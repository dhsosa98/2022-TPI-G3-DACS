import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthRouter from "./routers/AuthRouter";
import PublicRouter from "./routers/PublicRouter";

function App() {
  return (
    <Router>
      <div className="App ">
        <NavBar />
        <Switch>
          <PublicRouter path="/" component={AuthRouter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
