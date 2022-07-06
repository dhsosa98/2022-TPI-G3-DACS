import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./contexts/Auth";
import "./index.css";
import ReloadPrompt from "./ReloadPrompt";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ReloadPrompt />
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
