import { useAtomValue } from 'jotai';
import { FC, MouseEvent, useState } from 'react';
import { FaChartArea, FaTable } from 'react-icons/fa';

import { Graph, Table } from './index';
import { Button } from '../common';
import { AgentItem, CurrentViewAtom, ResultListAtom, ResultListHistoryAtom } from '../../atoms';

type ResultsProps = {
  loading: boolean;
  calculate: () => void;
  contextMenuHandler: (event: MouseEvent, agent: AgentItem) => void;
};

export const Results: FC<ResultsProps> = ({ loading, calculate, contextMenuHandler }) => {
  const [showGraph, setShowGraph] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const viewName = useAtomValue(CurrentViewAtom);
  const results = useAtomValue(ResultListAtom);
  const history = useAtomValue(ResultListHistoryAtom);

  const renderResults = () => {
    return results[viewName].map((result) => {
      const remainingTime = result.time / 1000;
      const remainingHealth = result.target.currentHealth;

      return (
        <div className="content" key={result.id}>
          <div className="w-100p" style={{ height: '500px' }}>
            <p className="pt-1">
              <span>
                Remaining Time: <span className="font-semibold">{`${remainingTime} second(s)`}</span>
              </span>

              <br />
              <span>
                Remaining Health: <span className="font-semibold">{remainingHealth}</span>
              </span>
            </p>
            {showTable && <Table result={result} contextMenuHandler={contextMenuHandler} />}
            {showGraph && <Graph result={result} />}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="results-container">
      <div className="results-container__header">
        <div>
          <span className="results-container__eyebrow">SIMULATION / OUTPUT</span>
          <h2 className="results-container__title">Damage results</h2>
        </div>
        <span className="results-container__count">{String(history.length).padStart(2, '0')} RUNS</span>
      </div>

      <div className="results-toolbar">
        <span className="results-toolbar__label">VIEW</span>
        <div className="btn-group">
          <Button
            ariaLabel="Show graph"
            tooltip="Show Graph"
            tooltipPosition="bottom"
            variant={showGraph ? 'outline' : undefined}
            onClick={() => {
              setShowGraph(true);
              setShowTable(false);
            }}
          >
            <FaChartArea size={20} />
          </Button>
          <Button
            ariaLabel="Show table"
            tooltip="Show Table"
            tooltipPosition="bottom"
            variant={showTable ? 'outline' : undefined}
            onClick={() => {
              setShowGraph(false);
              setShowTable(true);
            }}
          >
            <FaTable size={20} />
          </Button>
        </div>
        <Button disabled={loading} text="Calculate" onClick={() => calculate()} />
      </div>

      {renderResults()}
    </div>
  );
};
