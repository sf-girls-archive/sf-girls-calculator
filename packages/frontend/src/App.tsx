import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import { AgentModal } from './components/agent';
import { Header } from './components/layout';

export const App: FC = () => {
  return (
    <>
      <AgentModal />
      <Header />
      <main className="app-shell">
        <Outlet />
      </main>

      <Analytics />
    </>
  );
};
