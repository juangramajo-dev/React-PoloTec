import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import NotFound from "../layouts/NotFound";
import Dashboard from "./Dashboard";
import Todo from "./Todo";
import Fetchlist from "./Fetchlist";
import React from "react";
const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "todo", element: <Todo /> },
        { path: "fetch-list", element: <Fetchlist /> },
      ],
    },
    { path: "/404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};
export default Routes;
