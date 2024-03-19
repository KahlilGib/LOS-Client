import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BadanUsaha from "../views/BadanUsaha"
import Login1 from "../views/Auth/Login1";


const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login1/>,
    },
    {
        path: "/BadanUsaha",
        element: <BadanUsaha/>,
      },
  ]);

  export default router;