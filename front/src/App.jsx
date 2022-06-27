import NavBar from "./components/NavBar"
import Login from "./components/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";

function App() {

  return(
  <Router>
    <section>
      <NavBar/>
    </section>
    <Switch>
      <Home/>
    </Switch>
  </Router>
  )
}

export default App
