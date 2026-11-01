import './index.scss';
import './viewer-theme.scss';

import { Provider } from 'jotai';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { App } from './App';
import { Calculator, ErrorBoundary, Teamfinder } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '/', element: <Calculator /> },
      { path: '/calculator', element: <Navigate to="/" replace /> },
      { path: '/teamfinder', element: <Teamfinder /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
