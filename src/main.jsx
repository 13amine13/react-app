import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import "./Styles/index.css"

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login/>,
  },{
    path: "/Register",
    element: <Register/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

