import NotFountPage from "@pages/404";
import ErrorBoundary from "@pages/ErrorBoundary";
import Home from "@pages/Home";
import Login from "@pages/Login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    ErrorBoundary,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFountPage />,
  },
]);
