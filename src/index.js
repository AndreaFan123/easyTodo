import React from "react";
import { createRoot } from "react-dom/client";
window.React = React;

import App from "./App";
import { AuthContextProvide } from "./context/authContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AuthContextProvide>
    <App tab="home" />
  </AuthContextProvide>
);