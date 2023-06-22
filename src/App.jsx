import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login";
import Createtenant from "./pages/Createtenant";
import Deletetenant from "./pages/Deletetenant";
import Tenantlist from "./pages/Tenantlist";
import Logout from "./pages/logout";
import Home from "./pages/Home";
import './App.css';
import ErrorPage from './pages/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/create-tenant",
      element: <Createtenant />,
    },
    {
      path: "/delete-tenant",
      element: <Deletetenant />,
    },
    {
      path: "/tenant-list",
      element: <Tenantlist />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/delete-tenant",
      element: <Deletetenant />,
    },

    {
      path: "*",
      element: <ErrorPage />,
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
