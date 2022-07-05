import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import { useState } from "react";
import { API_BASE_URL } from "./vite-env.d";
import axios from "axios";

import PublicRouter from "./routers/PublicRouter";
import PagesRouter from "./routers/PagesRouter";

function App() {

  return (
    <Router>
      <div className="App ">
        <NavBar />
        <Switch>
          <PublicRouter path="/" component={PagesRouter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
