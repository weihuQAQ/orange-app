import { createBrowserRouter, Navigate } from 'react-router-dom';

import NotFountPage from '@pages/404';
import ErrorBoundary from '@pages/ErrorBoundary';
import Login from '@pages/Login';
import Layout from '@components/Layout';
import SvgLine from '@pages/SvgLine';
import Register from '@pages/Register';
import Home from '@pages/Home';
import Tools from '@pages/Tools';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/dashboard',
    element: <Navigate to="/dashboard/home" replace />,
  },
  {
    path: '/dashboard',
    element: <Layout />,
    ErrorBoundary,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'svg',
        element: <SvgLine />,
      },
      {
        path: 'tools',
        element: <Tools />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '*',
    element: <NotFountPage />,
  },
]);
