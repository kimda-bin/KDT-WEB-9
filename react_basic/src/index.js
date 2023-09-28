import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
// import Router from "./12Router/Router";
import Router from "./12Router_parc/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
