import { useSetAtom } from 'jotai';
import { FC, useEffect } from 'react';

import { CurrentViewAtom } from '../atoms';
import { Agents } from '../components/agent/Agents';

const viewName = 'calculator';

export const CalculatorPage: FC = () => {
  const setViewName = useSetAtom(CurrentViewAtom);

  useEffect(() => {
    setViewName(viewName);
  }, []);

  return (
    <section className="workspace-page workspace-page--calculator">
      <div className="workspace-heading">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-mark" />
            SIMULATION / 01
          </p>
          <h1>Damage Calculator</h1>
          <p>Assemble a squad, choose a target and compare projected damage over time.</p>
        </div>
        <span className="workspace-heading__meta">UP TO 7 AGENTS</span>
      </div>
      <div className="default-layout tree-nav-body mx-auto">
        <Agents />
      </div>
    </section>
  );
};

export default CalculatorPage;
