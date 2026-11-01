import { useAtomValue } from 'jotai';
import { FC, MouseEvent, useState } from 'react';
import { FaLevelDownAlt, FaLevelUpAlt } from 'react-icons/fa';
import { ResultType } from '@sf-girls-calculator/calculator';

import { ResultListHistoryAtom } from '../../atoms';

type HistoryItemProps = {
  result: ResultType;
  nextResult: number;
  difference: number;
};

const HistoryItem: FC<HistoryItemProps> = ({ result, nextResult, difference }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = (event: MouseEvent<HTMLDetailsElement>) => {
    event.preventDefault();
    setOpen((prev) => !prev);
  };

  const renderAgents = () =>
    result.team
      .sort((a, b) => b.stats.totalDamage - a.stats.totalDamage)
      .map((agent) => (
        <div
          key={agent.name}
          className="avatar avatar--xs tooltip tooltip--top"
          data-tooltip={`${agent.name}: ${agent.stats.totalDamage}`}
        >
          <div
            style={{
              height: '100%',
              backgroundImage: `url(agents/${agent.name.replace(/\s/g, '')}Mini.webp)`,
              backgroundSize: '100%'
            }}
          />
        </div>
      ));

  const renderDifferenceIcon = () => {
    if (difference > 0) {
      return <FaLevelUpAlt color="green" style={{ transform: 'rotate(360deg) scaleX(-1)' }} />;
    } else if (difference < 0) {
      return <FaLevelDownAlt color="red" style={{ transform: 'rotate(360deg) scaleX(-1)' }} />;
    } else {
      return null;
    }
  };

  const renderDifference = () =>
    nextResult && (
      <span className="accordion__difference">
        {renderDifferenceIcon()}
        <span>{difference} %</span>
      </span>
    );

  return (
    <li className="m-0 p-0">
      <details className="accordion" open={open} onClick={toggleAccordion}>
        <summary className="accordion__summary">
          {renderDifference()}
          <span className="accordion__damage">{result.totalDamage}</span>
        </summary>
        <div className="result-team">{renderAgents()}</div>
      </details>
    </li>
  );
};

export const History: FC = () => {
  const history = useAtomValue(ResultListHistoryAtom);

  const renderHistoryItems = () => {
    if (history.length > 0) {
      return history.map((result, index) => {
        const nextResult = history[index + 1]?.totalDamage;
        const resultDifference = Math.round(((result.totalDamage - nextResult) / nextResult) * 100);

        return <HistoryItem key={result.id} result={result} nextResult={nextResult} difference={resultDifference} />;
      });
    }

    return (
      <li>
        <a>No Results</a>
      </li>
    );
  };

  return (
    <aside className="toc__nav" aria-labelledby="result-history-title">
      <h2 id="result-history-title" className="sidebar__title">
        Results
      </h2>
      <ul id="result-history" className="menu result-container">
        {renderHistoryItems()}
      </ul>
    </aside>
  );
};
