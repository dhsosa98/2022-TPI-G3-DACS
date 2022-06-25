import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ReloadPrompt from "./ReloadPrompt";

ReactDOM.render(
  <React.StrictMode>
    <ReloadPrompt />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
