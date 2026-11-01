import { FC } from 'react';
import { EvoNode as EvoNodeModel } from '@sf-girls-calculator/calculator';
import { getEvoNodeTooltip, getTreeNumber } from '../utils';

type EvoNodeProps = {
  node: EvoNodeModel;
  update: (node: EvoNodeModel) => void;
};

export const EvoNode: FC<EvoNodeProps> = ({ node, update }) => {
  const treeNumber = getTreeNumber(node);
  const imageUrl = `evoNodes/${node.name.replace(/\s/g, '')}.webp`;
  const tooltipText = `${node.name} (Level: ${node.level})`;

  const avatarStyle = {
    borderRadius: '10%',
    cursor: 'pointer',
    fontSize: '0.75rem',
    fontWeight: '500',
    height: '2.75rem',
    width: '2.75rem',
    textShadow: '1px 1px 5px rgba(0, 0, 0, 1)',
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  const handleNodeClick = () => {
    node.levelUp();
    update(node);
  };

  return (
    <div className={`u-flex-column-reverse u-center level-${treeNumber}-container`}>
      <div
        className={`avatar avatar--l text-white hover-grow tooltip tooltip--bottom level-${treeNumber}-item evo-node`}
        data-text={getEvoNodeTooltip(node)}
        data-tooltip={tooltipText}
        style={avatarStyle}
        onClick={handleNodeClick}
      />
      <div className="u-flex u-flex-row">
        {node.children.map((child) => (
          <EvoNode key={child.name} node={child} update={update} />
        ))}
      </div>
    </div>
  );
};
