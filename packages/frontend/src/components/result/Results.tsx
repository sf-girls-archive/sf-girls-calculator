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
    return results[viewName].map((result, index) => {
      const remainingTime = result.time / 1000;
      const remainingHealth = result.target.currentHealth;

      if (viewName === 'teamfinder') {
        return (
          <article className="teamfinder-result-card" key={result.id}>
            <header className="teamfinder-result-card__header">
              <div className="teamfinder-result-card__damage">
                <span>TEAM / {String(index + 1).padStart(2, '0')}</span>
                <div>
                  <small>PROJECTED DAMAGE</small>
                  <strong>{result.totalDamage.toLocaleString('en-US')}</strong>
                </div>
              </div>
              <div className="teamfinder-result-card__team" aria-label="Team members">
                {result.team.map((agent) => (
                  <div className="teamfinder-result-card__agent" key={agent.name}>
                    <img src={`/agents/${agent.name.replace(/\s/g, '')}Mini.webp`} alt="" />
                    <span>{agent.name}</span>
                  </div>
                ))}
              </div>
            </header>

            <div className="teamfinder-result-card__metrics">
              <div>
                <span>TIME LEFT</span>
                <strong>{remainingTime} sec</strong>
              </div>
              <div>
                <span>TARGET HEALTH</span>
                <strong>{remainingHealth.toLocaleString('en-US')}</strong>
              </div>
              <div>
                <span>TEAM SIZE</span>
                <strong>{result.team.length} AGENTS</strong>
              </div>
            </div>

            {showTable ? (
              <div className="teamfinder-result-card__table">
                <Table result={result} contextMenuHandler={contextMenuHandler} />
              </div>
            ) : (
              <div className="teamfinder-result-card__chart">
                <div className="teamfinder-result-card__chart-heading">
                  <span>DAMAGE TIMELINE</span>
                  <span>DRAG TO ZOOM / CLICK LEGEND TO FILTER</span>
                </div>
                <div className="teamfinder-result-card__plot">
                  <Graph result={result} />
                </div>
              </div>
            )}
          </article>
        );
      }

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
    <div className={`results-container${viewName === 'teamfinder' ? ' results-container--teamfinder' : ''}`}>
      <div className="results-container__header">
        <div>
          <span className="results-container__eyebrow">
            {viewName === 'teamfinder' ? 'TEAMFINDER / CANDIDATES' : 'SIMULATION / OUTPUT'}
          </span>
          <h2 className="results-container__title">
            {viewName === 'teamfinder' ? 'Team comparison' : 'Damage results'}
          </h2>
        </div>
        <span className="results-container__count">
          {String(viewName === 'teamfinder' ? results[viewName].length : history.length).padStart(2, '0')}{' '}
          {viewName === 'teamfinder' ? 'TEAMS' : 'RUNS'}
        </span>
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
