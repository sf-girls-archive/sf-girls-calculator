import {
  ActionType,
  Agent,
  Agents,
  ClassEnum,
  EffectTypeEnum,
  EvoNode,
  HistoryActionTypeEnum,
  HistoryType,
  ResultType
} from '@sf-girls-calculator/calculator';
import { AgentItem, AgentNode } from '../atoms';

export enum ClassTag {
  Artillery = 'tag--danger',
  Gunner = 'tag--info',
  Striker = 'tag--warning',
  Support = 'tag--success'
}

export enum TabEnum {
  Stats = 'Stats',
  Bio = 'Bio',
  Skill = 'Skill',
  EvoTree = 'Evo Tree'
}

export type MenuItem = {
  label: string;
  sortParam: string;
  sortDirection: string;
};

export type ViewName = 'calculator' | 'teamfinder';

/** App Helper */

export function createWrapper(wrapperId: string) {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
}

/** Agent Helper */

export function getAgentInfo(name: string) {
  const agent = Agents.Agents.find((agent) => agent.name === name);
  return {
    title: agent?.title ?? 'No title',
    recordNumber: agent?.index ?? 0,
    bio: agent?.bio ?? 'No bio',
    skillDescription: agent?.skill.description ?? 'No skill description',
    skillName: agent?.skill.name ?? 'No skill',
    skillCooldown: agent?.skill.cooldown ?? 0,
    skillEffects:
      agent?.skill.effects.map((effect) => ({
        type: effect.type,
        duration: 'duration' in effect ? effect.duration : undefined,
        interval: 'interval' in effect ? effect.interval : undefined,
        numberOfHits: 'numberOfHits' in effect ? effect.numberOfHits : undefined
      })) ?? [],
    className: agent?.class ?? ClassEnum.ARTILLERY,
    organization: agent?.organization ?? 'Unknown organization',
    rarity: agent?.rarity ?? 'Unknown rarity'
  };
}

/** Select Helper */

export interface InputConfig {
  label: string;
  min?: number;
  step?: number;
  abbrTitle?: string;
}

export const inputConfig: Record<string, InputConfig> = {
  attackSpeed: { label: 'Attack Speed' },
  normalAttack: { label: 'Normal Attack' },
  skillDamage: { label: 'Skill Damage' },
  criticalRate: { label: 'Critical Rate', step: 0.01, abbrTitle: 'for reference: 100% = 1' },
  criticalDamage: { label: 'Critical Damage', step: 0.01, abbrTitle: 'for reference: 100% = 1' }
};

/** Graph Helper */

export function getColorFromString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}

export function prepareGraphData(result: ResultType): Array<HistoryType[]> {
  const data: Array<HistoryType[]> = [];

  for (const [index, agent] of result.team.entries()) {
    data[index] = [];

    for (const event of agent.history) {
      data[index].push({ ...event, time: event.time / 1000 });
    }
  }

  return data;
}

export const getActionTooltip = (action: ActionType): string => {
  if (action.effectType === EffectTypeEnum.NONE) {
    return `${action.attackMode} ${action.type} ${action.damage}`;
  } else if (action.type === HistoryActionTypeEnum.USE_SKILL || action.type === HistoryActionTypeEnum.REMOVE) {
    return `${action.type} (${action.effectType})`;
  } else if (action.effectType === EffectTypeEnum.DOT || action.effectType === EffectTypeEnum.DAMAGE) {
    return `${action.effectType} ${action.damage}`;
  }
  return '';
};

export const getBonusTooltip = (action: ActionType): string => {
  if (action.bonus && action.bonus.length > 0) {
    return `(${action.bonus.join(', ')})`;
  }
  return '';
};

export const getInfoText = (event: HistoryType): string => {
  return event.actions
    .map((action) => {
      const actionTooltip = getActionTooltip(action);
      const bonusTooltip = getBonusTooltip(action);
      return actionTooltip + ' ' + bonusTooltip;
    })
    .join(', ');
};

export const createTooltip = (color: string, name: string, event: HistoryType) => {
  const infoText = getInfoText(event);
  return (
    <div key={name} className="tooltip-content">
      <span className="dot" style={{ backgroundColor: color }}></span>
      <p>
        <strong>{`${name}: ${event.totalDamage} `}</strong>
        <small>{infoText}</small>
      </p>
    </div>
  );
};

/** EvoTree Helper */

export function getAllNodes(nodes: EvoNode[]): AgentNode[] {
  return nodes.flatMap(getAllNodeChildren);
}

export function getAllNodeParents(node: EvoNode): AgentNode[] {
  const parents: AgentNode[] = [];
  let parent = node.parent;

  while (parent) {
    parents.push({ name: parent.name, level: parent.level });
    parent = parent.parent;
  }

  return parents;
}

export function getAllNodeChildren(node: EvoNode): AgentNode[] {
  return [{ name: node.name, level: node.level }, ...node.children.flatMap(getAllNodeChildren)];
}

export function overwriteEvoTree(agent: AgentItem): EvoNode[] {
  const defaultAgent = Agents.Agents.find((a) => a.name === agent.name);

  if (!defaultAgent) {
    return [];
  }

  const iterateNodes = (nodes: EvoNode[], agentNodes: AgentNode[]) => {
    for (const node of nodes) {
      const matchingNode = agentNodes.find((n) => n.name === node.name);

      if (matchingNode) {
        node.level = matchingNode.level;
      }

      if (node.children.length > 0) {
        iterateNodes(node.children, agentNodes);
      }
    }
  };

  const initAgent = new Agent(defaultAgent);
  iterateNodes(initAgent.nodes, agent.nodes);

  return initAgent.nodes;
}

export function getTreeNumber(node: EvoNode) {
  if (!node.parent) {
    return 0;
  }

  return 1;
}

export function getEvoNodeTooltip(node: EvoNode) {
  return `${node.name
    .split(' ')
    .map((word) => (/^(I|II|III|IV)$/.test(word) ? word : word.charAt(0)))
    .join('')} ${node.level}`;
}

/** Style Helper */

const createStyleObject = (size: string, position: string) => {
  return {
    backgroundSize: size,
    backgroundPosition: position
  };
};

export const AgentStyleMap = {
  Akari: createStyleObject('110%', 'center top'),
  Akina: createStyleObject('130%', 'center'),
  'Aphra Clairmont': createStyleObject('90%', 'center'),
  Amikam: createStyleObject('100%', 'center'),
  Aoi: createStyleObject('140%', 'center'),
  Ari: createStyleObject('120%', 'center'),
  Ayu: createStyleObject('120%', 'center'),
  Bia: createStyleObject('120%', 'center'),
  Cadence: createStyleObject('120%', 'center'),
  Chia: createStyleObject('80%', 'center'),
  Chiharu: createStyleObject('120%', 'center'),
  Chihiro: createStyleObject('120%', 'center'),
  Chloe: createStyleObject('120%', 'center'),
  Coco: createStyleObject('120%', 'center'),
  Denka: createStyleObject('120%', 'center'),
  Eiko: createStyleObject('120%', 'center'),
  Ember: createStyleObject('120%', 'center'),
  Eri: createStyleObject('120%', 'center'),
  Feme: createStyleObject('80%', 'center'),
  'Gai Gai': createStyleObject('120%', 'center'),
  Goi: createStyleObject('120%', 'center'),
  Hami: createStyleObject('120%', 'center'),
  Hitomi: createStyleObject('120%', 'center'),
  Hoshiko: createStyleObject('120%', 'center'),
  Iizuna: createStyleObject('80%', 'center'),
  Irina: createStyleObject('120%', 'center'),
  'Kagawa Matsu': createStyleObject('60%', 'center'),
  Kaja: createStyleObject('80%', 'center'),
  Karry: createStyleObject('80%', 'center'),
  Kiyomi: createStyleObject('120%', 'center'),
  Kotaru: createStyleObject('120%', 'center'),
  Kotora: createStyleObject('120%', 'center'),
  Kura: createStyleObject('120%', 'center'),
  Larisa: createStyleObject('120%', 'center'),
  Livia: createStyleObject('120%', 'center'),
  Laura: createStyleObject('120%', 'center'),
  Mai: createStyleObject('120%', 'center'),
  Masamune: createStyleObject('120%', 'center'),
  Mei: createStyleObject('120%', 'center'),
  Meteli: createStyleObject('120%', 'center'),
  Midori: createStyleObject('80%', 'center'),
  Mika: createStyleObject('120%', 'center'),
  Mitsu: createStyleObject('120%', 'center'),
  Momoko: createStyleObject('120%', 'center'),
  Mora: createStyleObject('120%', 'center'),
  Musuna: createStyleObject('120%', 'center'),
  Ne: createStyleObject('120%', 'center'),
  Neugena: createStyleObject('120%', 'center'),
  Neve: createStyleObject('120%', 'center'),
  'Neve X': createStyleObject('120%', 'center'),
  Noa: createStyleObject('120%', 'center'),
  O: createStyleObject('120%', 'center'),
  Pan: createStyleObject('60%', 'center'),
  Rei: createStyleObject('120%', 'center'),
  'Rei JK': createStyleObject('80%', 'center'),
  Reika: createStyleObject('120%', 'center'),
  Riho: createStyleObject('120%', 'center'),
  'Riho X': createStyleObject('120%', 'center'),
  Rosalie: createStyleObject('120%', 'center'),
  Rui: createStyleObject('120%', 'center'),
  Sara: createStyleObject('120%', 'center'),
  Sato: createStyleObject('120%', 'center'),
  Sayaka: createStyleObject('120%', 'center'),
  Sera: createStyleObject('120%', 'center'),
  Seina: createStyleObject('120%', 'center'),
  Setsuna: createStyleObject('120%', 'center'),
  Shiko: createStyleObject('80%', 'center'),
  Sizuko: createStyleObject('120%', 'center'),
  Sora: createStyleObject('120%', 'center'),
  Toki: createStyleObject('120%', 'center'),
  Tsurumi: createStyleObject('80%', 'center'),
  Tyrla: createStyleObject('80%', 'center'),
  Uni: createStyleObject('120%', 'center'),
  Uta: createStyleObject('120%', 'center'),
  Uzu: createStyleObject('120%', 'center'),
  Vanessa: createStyleObject('120%', 'center'),
  Victoria: createStyleObject('120%', 'center'),
  Windy: createStyleObject('80%', 'center'),
  Wu: createStyleObject('120%', 'center'),
  Yukako: createStyleObject('120%', 'center'),
  Yuki: createStyleObject('120%', 'center'),
  Yuuha: createStyleObject('120%', 'center'),
  'Zi Long': createStyleObject('120%', 'center')
};
