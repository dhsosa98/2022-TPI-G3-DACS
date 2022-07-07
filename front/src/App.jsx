import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRouter from "./routers/PublicRouter";
import PagesRouter from "./routers/PagesRouter";
import PrivateRouter from "./routers/PrivateRouter";
import Home from "./pages/Home";
import IniciarSesion from "./pages/IniciarSesion";
import Registrarse from "./pages/Registrarse";
import QuienesSomos from "./pages/QuienesSomos";

function App() {
  return (
    <Router>
      <div className="App ">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <PublicRouter path="/iniciarsesion" component={IniciarSesion} />
          <PublicRouter path="/registrarse" component={Registrarse} />
          <PrivateRouter path="/admin" component={QuienesSomos} />
          <Route path="/" component={PagesRouter} />
          {/* <Redirect to="/" /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
