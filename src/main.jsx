import React from "react";
import ReactDOM from "react-dom/client";
import Shell from './pages/Shell';
import Home from "./components/Home";
import Roles from "./components/Roles";
import AddRole from "./components/AddRole";
import Candidates from "./components/Candidates";
import AddCandidate from "./components/AddCandidate";
import 'bootstrap/dist/css/bootstrap.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/candidates",
        element: <Candidates />,
      },
      {
        path: "/roles",
        element: <Roles />,
      },
      {
        path: "/roles/new",
        element: <AddRole />,
      },
      {
        path: "/candidates/new",
        element: <AddCandidate />,
      },
      {
        path: "/roles/:roleID",
        element: <Roles />
      },
    ],
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
