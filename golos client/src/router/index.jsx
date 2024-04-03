import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InitialDataEntry from "../views/InitialDataEntry";
import Login2 from "../views/Auth/Login2";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login2 />,
  },
  {
    path: "/InitialDataEntry",
    element: <InitialDataEntry />,
  },
]);

export default router;
