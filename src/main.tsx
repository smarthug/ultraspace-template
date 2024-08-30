import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ErrorPage from "./pages/error-page.jsx";
import World from "./pages/world";
import Shop from "./pages/shop/index.jsx";
import Inventory from "./pages/inventory/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/world" replace />
      },
      {
        path: "world",
        element: <World />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
