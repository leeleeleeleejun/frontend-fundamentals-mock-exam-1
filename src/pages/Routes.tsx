import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { SavingsCalculatorPage } from './SavingsCalculatorPage';
import { ErrorBoundary } from '@suspensive/react';
import ErrorPage from '@/pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SavingsCalculatorPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
]);

export function Routes() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
