import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./contexts/Auth";
import "./index.css";
import ReloadPrompt from "./ReloadPrompt";
import { Provider } from "react-redux";
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
      <ReloadPrompt />
      <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
