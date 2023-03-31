import React from "react"
import ReactDOM from "react-dom/client"
import Candidates from "./components/Candidates"
import Roles from "./components/Roles"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>HELLO WORLD!</div>,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
