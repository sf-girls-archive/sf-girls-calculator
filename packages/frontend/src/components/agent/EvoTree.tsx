import { useAtom, useAtomValue } from 'jotai';
import { FC, useMemo } from 'react';
import { EvoNode as EvoNodeClass } from '@sf-girls-calculator/calculator';

import { EvoNode } from './EvoNode';
import { Button } from '../common';
import { getAllNodeChildren, getAllNodes, getAllNodeParents, overwriteEvoTree } from '../utils';
import { AgentDB } from '../../atoms';

export const EvoTree: FC = () => {
  const agents = useAtomValue(AgentDB.values);
  const agentEntry = agents.find((agent) => agent.options.openModal);

  if (!agentEntry) {
    return null;
  }

  const [agent, setAgent] = useAtom(AgentDB.item(agentEntry.name));

  if (!agent) {
    return null;
  }

  const nodes = useMemo(() => overwriteEvoTree(agent), [agent]);
  const allNodes = useMemo(() => getAllNodes(nodes), [nodes]);
  const disableMax = allNodes.every((node) => node.level === 5);
  const disableReset = allNodes.every((node) => node.level === 0);

  const onUpdateNode = (node: EvoNodeClass) => {
    const newNodes = getAllNodeParents(node).concat(getAllNodeChildren(node));

    setAgent({
      ...agent,
      nodes: agent.nodes.map((node) => {
        const matchingNode = newNodes.find((newNode) => newNode.name === node.name);
        return matchingNode ? matchingNode : node;
      })
    });
  };

  const updateNodesLevel = (level: number) => {
    setAgent({ ...agent, nodes: agent.nodes.map((node) => ({ ...node, level })) });
  };

  return (
    <div className="evo-tree-editor">
      <div className="evo-tree-viewport">
        {nodes.map((node) => (
          <EvoNode key={node.name} node={node} update={onUpdateNode} />
        ))}
      </div>

      <div className="evo-tree-controls">
        <Button text="Max" color="primary" disabled={disableMax} onClick={() => updateNodesLevel(5)} />
        <Button text="Reset" color="primary" disabled={disableReset} onClick={() => updateNodesLevel(0)} />
      </div>
    </div>
  );
};
