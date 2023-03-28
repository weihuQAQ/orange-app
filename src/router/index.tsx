import { createBrowserRouter } from "react-router-dom";

import NotFountPage from "@pages/404";
import ErrorBoundary from "@pages/ErrorBoundary";
import Login from "@pages/Login";
import Layout from "@components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    ErrorBoundary,
    children: [
      {
        path: "/login2",
        element: <Login />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "*",
    element: <NotFountPage />,
  },
]);
