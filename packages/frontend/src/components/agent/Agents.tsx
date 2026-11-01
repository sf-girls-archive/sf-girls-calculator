import { useAtomValue, useSetAtom } from 'jotai';
import { FC, MouseEvent, useCallback, useState } from 'react';
import { Agents as AgentsRaw } from '@sf-girls-calculator/calculator';

import { AgentGallery } from './AgentGallery';
import { AgentList } from './AgentList';
import { ContextMenu, Portal, Spinner } from '../common';
import {
  AgentDB,
  AgentItem,
  CurrentViewAtom,
  FilterAtom,
  ResultListAtom,
  ResultListHistoryAtom,
  TargetDB
} from '../../atoms';
import { calculateWorker } from '../../webworker';

const AGENT_COMPONENTS = {
  calculator: AgentList,
  teamfinder: AgentGallery
};

const WORKER_CONFIG = {
  calculator: calculateWorker.calculateCalculator,
  teamfinder: calculateWorker.calculateTeamfinder
};

export const Agents: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [contextMenuState, setContextMenuState] = useState<{
    agent?: AgentItem;
    position: {
      left: number;
      top: number;
    };
  }>({ agent: undefined, position: { left: 0, top: 0 } });

  const viewName = useAtomValue(CurrentViewAtom);
  const filter = useAtomValue(FilterAtom);
  const agents = useAtomValue(AgentDB.values);
  const targets = useAtomValue(TargetDB.values);

  const setAgent = useSetAtom(AgentDB.set);
  const setResults = useSetAtom(ResultListAtom);
  const setHistory = useSetAtom(ResultListHistoryAtom);

  const selectedAgents = agents.filter((agent) => agent.options[viewName].isSelected).map((agent) => agent.name);
  const selectedTargets = targets.filter((target) => target.options[viewName].isSelected).map((target) => target.name);

  agents.sort((a: AgentItem, b: AgentItem) => {
    const agentA = AgentsRaw.Agents.find((agent) => agent.name === a.name);
    const agentB = AgentsRaw.Agents.find((agent) => agent.name === b.name);

    if (!agentA || !agentB) {
      return 0;
    }

    if (a.options.isFavorite && !b.options.isFavorite) {
      return -1;
    }
    if (!a.options.isFavorite && b.options.isFavorite) {
      return 1;
    }

    let comparison = 0;

    if (filter[viewName].sortParam === 'rarity') {
      comparison = agentA.rarity.localeCompare(agentB.rarity);
    } else if (filter[viewName].sortParam === 'class') {
      comparison = agentA.class.localeCompare(agentB.class);
    }

    if (comparison === 0) {
      comparison = agentA.name.localeCompare(agentB.name);
    }

    if (filter[viewName].sort === 'descending') {
      comparison *= -1;
    }

    return comparison;
  });

  const filteredAgents = agents.filter((a) => {
    const agent = AgentsRaw.Agents.find((agent) => agent.name === a.name);

    if (!agent) {
      return false;
    }

    const filterClass = filter[viewName].class;
    const filterRarity = filter[viewName].rarity;
    const filterSearch = filter[viewName].searchParam;

    const passedFilter =
      (filterClass.length === 0 || filterClass.includes(agent.class)) &&
      (filterRarity.length === 0 || filterRarity.includes(agent.rarity)) &&
      (filterSearch.length === 0 || agent.name.toLocaleLowerCase().includes(filterSearch.toLocaleLowerCase()));

    return passedFilter;
  });

  const workerCall = useCallback(
    async (selectedAgents: string[], selectedTargets: string[]) => {
      // if (selectedAgents.length > 0 && selectedTargets) {
      //   const test_results = [];

      //   for (let i = 0; i < 100; i++) {
      //     const test_result = await WORKER_CONFIG[viewName]({ selectedAgents, selectedTargets });
      //     test_results.push(JSON.parse(test_result)[0]);
      //   }

      //   test_results.sort((a, b) => b.totalDamage - a.totalDamage);
      //   console.log({
      //     max: test_results[0].totalDamage,
      //     min: test_results[test_results.length - 1].totalDamage
      //   });
      // }

      const newResults = await WORKER_CONFIG[viewName]({ selectedAgents, selectedTargets });
      const parsedResults = JSON.parse(newResults);

      return parsedResults;
    },
    [viewName]
  );

  const calculate = async () => {
    setLoading(true);

    const newResults = await workerCall(selectedAgents, selectedTargets);

    if (newResults) {
      setResults((prev) => ({ ...prev, [viewName]: newResults }));
      setHistory((prev) => [...newResults, ...prev]);
    }

    setLoading(false);
  };

  const onAgentSelect = (agent: AgentItem) => {
    const selectedAgentsCount = agents.filter((agent) => agent.options[viewName]?.isSelected).length;

    if (viewName === 'teamfinder') {
      if (selectedAgentsCount === 20 && !agent.options[viewName]?.isSelected) {
        return;
      }
    }

    // TODO: individual limit for calculator (pve - 6/pvp - 7)
    if (viewName === 'calculator') {
      if (selectedAgentsCount === 7 && !agent.options[viewName]?.isSelected) {
        return;
      }
    }

    setAgent(agent.name, {
      ...agent,
      options: {
        ...agent.options,
        [viewName]: { ...agent.options[viewName], isSelected: !agent.options[viewName].isSelected }
      }
    });
  };

  const onAgentToggleModal = (agent: AgentItem) => {
    setAgent(agent.name, {
      ...agent,
      options: {
        ...agent.options,
        openModal: !agent.options.openModal
      }
    });
  };

  const onAgentToggleFavorite = (agent: AgentItem) => {
    setAgent(agent.name, {
      ...agent,
      options: {
        ...agent.options,
        isFavorite: !agent.options.isFavorite
      }
    });
  };

  const onContextMenu = (event: MouseEvent, agent: AgentItem) => {
    event.preventDefault();
    setContextMenuState({
      agent,
      position: {
        left: event.clientX,
        top: event.clientY
      }
    });
  };

  const AgentComponent = AGENT_COMPONENTS[viewName];

  return (
    <>
      {contextMenuState.agent && (
        <ContextMenu
          agent={contextMenuState.agent}
          position={contextMenuState.position}
          onClose={() =>
            setContextMenuState((prev) => ({
              ...prev,
              agent: undefined
            }))
          }
          favorite={onAgentToggleFavorite}
          toggleModal={onAgentToggleModal}
          select={onAgentSelect}
        />
      )}

      {isLoading && (
        <Portal wrapperId="spinner">
          <div className="u-fixed u-top-50p u-left-50p u-z-10">
            <Spinner />
          </div>
        </Portal>
      )}

      <AgentComponent
        agents={filteredAgents}
        loading={isLoading}
        calculate={calculate}
        favorite={onAgentToggleFavorite}
        toggleModal={onAgentToggleModal}
        select={onAgentSelect}
        contextMenuHandler={onContextMenu}
      />
    </>
  );
};
