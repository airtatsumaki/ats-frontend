import React from "react"
import ReactDOM from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.css';
import Candidates from "./components/Candidates"
import Roles from "./components/Roles"
import Home from "./components/Home";
import Shell from './pages/Shell';
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
        path: "/roles/:roleIndex",
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
