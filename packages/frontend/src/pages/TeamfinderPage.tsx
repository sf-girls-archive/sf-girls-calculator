import { useSetAtom } from 'jotai';
import { FC, useEffect } from 'react';

import { CurrentViewAtom } from '../atoms';
import { Agents } from '../components/agent';

const viewName = 'teamfinder';

export const TeamfinderPage: FC = () => {
  const setViewName = useSetAtom(CurrentViewAtom);

  useEffect(() => {
    setViewName(viewName);
  }, []);

  return (
    <section className="workspace-page workspace-page--teamfinder">
      <div className="workspace-heading">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-mark" />
            SQUAD BUILDER / 02
          </p>
          <h1>Teamfinder</h1>
          <p>Explore agents, tune your filters and find a team that fits your strategy.</p>
        </div>
        <span className="workspace-heading__meta">UP TO 20 AGENTS</span>
      </div>
      <div className="default-layout tree-nav-body mx-auto">
        <Agents />
      </div>
    </section>
  );
};

export default TeamfinderPage;
