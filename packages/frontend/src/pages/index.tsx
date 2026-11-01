import { FC, Suspense, lazy } from 'react';
import { Spinner } from '../components/common';

export { ErrorBoundary } from './ErrorBoundary';

const CalculatorPage = lazy(() => import('./CalculatorPage'));
const TeamfinderPage = lazy(() => import('./TeamfinderPage'));

export const Calculator: FC = () => (
  <Suspense fallback={<Spinner />}>
    <CalculatorPage />
  </Suspense>
);

export const Teamfinder: FC = () => (
  <Suspense fallback={<Spinner />}>
    <TeamfinderPage />
  </Suspense>
);
