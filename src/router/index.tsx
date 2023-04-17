import { createBrowserRouter } from 'react-router-dom';

import NotFountPage from '@pages/404';
import ErrorBoundary from '@pages/ErrorBoundary';
import Login from '@pages/Login';
import Layout from '@components/Layout';
import SvgLine from '@pages/SvgLine';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    ErrorBoundary,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Login />,
      },
    ],
  },

  {
    path: '/svg',
    element: <SvgLine />,
  },

  {
    path: '*',
    element: <NotFountPage />,
  },
]);
