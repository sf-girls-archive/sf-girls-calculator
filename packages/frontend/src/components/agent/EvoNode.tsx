import { FC, useState } from 'react';
import { EvoNode as EvoNodeModel } from '@sf-girls-calculator/calculator';
import { FaBrain } from 'react-icons/fa';
import { getEvoNodeTooltip, getTreeNumber } from '../utils';

type EvoNodeProps = {
  node: EvoNodeModel;
  update: (node: EvoNodeModel) => void;
};

export const EvoNode: FC<EvoNodeProps> = ({ node, update }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const treeNumber = getTreeNumber(node);
  const imageUrl = `${import.meta.env.BASE_URL}evoNodes/${node.name.replace(/\s/g, '')}.webp`;
  const actionText = node.level === 5 ? 'Click to reset this branch' : 'Click to upgrade';
  const tooltipText = `${node.name} · Level ${node.level}/5 · ${actionText}`;
  const actionLabel =
    node.level === 5
      ? `Reset ${node.name} and its descendants`
      : `Upgrade ${node.name} to level ${node.level + 1}`;

  const handleNodeClick = () => {
    node.levelUp();
    update(node);
  };

  return (
    <div className={`u-flex-column-reverse u-center level-${treeNumber}-container`}>
      <button
        type="button"
        className={`hover-grow tooltip tooltip--bottom level-${treeNumber}-item evo-node`}
        data-text={getEvoNodeTooltip(node)}
        data-tooltip={tooltipText}
        title={tooltipText}
        aria-label={`${actionLabel} (current level ${node.level} of 5)`}
        onClick={handleNodeClick}
      >
        {imageFailed ? (
          <span className="evo-node__image-fallback" aria-hidden="true">
            <FaBrain />
          </span>
        ) : (
          <img className="evo-node__image" src={imageUrl} alt="" draggable={false} onError={() => setImageFailed(true)} />
        )}
        <span className="evo-node__level" aria-hidden="true">
          <span>LV</span>
          <strong>{node.level}</strong>
          <span>/5</span>
        </span>
        <span className={`evo-node__upgrade${node.level === 5 ? ' evo-node__upgrade--reset' : ''}`} aria-hidden="true">
          {node.level === 5 ? '↻' : '+'}
        </span>
      </button>
      <div className="u-flex u-flex-row">
        {node.children.map((child) => (
          <EvoNode key={child.name} node={child} update={update} />
        ))}
      </div>
    </div>
  );
};
