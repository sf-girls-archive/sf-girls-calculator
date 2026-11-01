import { Agents, bruteforceTeam, calculateTeam, NewAgent, NewTarget, Targets } from '@sf-girls-calculator/calculator';
import { openDB } from 'idb';

import { AgentItem, TargetItem } from '../atoms';
import { overwriteEvoTree } from '../components/utils';

const MAX_BRUTEFORCE_RESULT_NUM = 5;

export type FunctionParams = {
  selectedAgents: string[];
  selectedTargets: string[];
};

export async function calculate({ selectedAgents, selectedTargets }: FunctionParams, isMultiple = false) {
  const db = await openDB('agent-db', 1);

  if (!db || selectedAgents.length === 0 || selectedTargets.length === 0) {
    return null;
  }

  const transaction = db.transaction('key-value', 'readwrite');
  const store = transaction.objectStore('key-value');
  const userAgents = await store.getAll();

  const targets = findTargets(selectedTargets, Targets.Targets, []);
  const agents = findAgents(selectedAgents, Agents.Agents, userAgents);

  const results = isMultiple
    ? bruteforceTeam(agents, targets[0], MAX_BRUTEFORCE_RESULT_NUM)
    : [calculateTeam(agents, targets[0])];

  // TODO: circular dependency - fix temporary solution
  results.map((result) =>
    result.team.map((agent) => {
      agent.nodes = [];
      return agent;
    })
  );

  return results;
}

export function findAgents(names: string[], source: NewAgent[], userSource: AgentItem[]) {
  const items = names.map((name) => {
    const item = source.find((item) => item.name === name)!;
    const userItem = userSource.find((item) => item.name === name)!;
    const userItemNodes = overwriteEvoTree(userItem);

    return {
      ...item,
      stats: {
        attackSpeed: userItem.stats.attackSpeed,
        normalAttack: userItem.stats.normalAttack,
        criticalRate: userItem.stats.criticalRate,
        criticalDamage: userItem.stats.criticalDamage,
        skillDamage: userItem.stats.skillDamage,
        baseSkillDamage: userItem.stats.skillDamage,
        projectileNumber: item.stats.projectileNumber,
        castTime: item.stats.castTime
      },
      nodes: userItemNodes
    };
  });

  return items;
}

export function findTargets(names: string[], source: NewTarget[], userSource: TargetItem[]) {
  const items = names.map((name) => {
    const item = source.find((item) => item.name === name)!;
    const userItem = userSource.find((item) => item.name === name)!;

    return { ...item, userItem };
  });

  return items;
}
