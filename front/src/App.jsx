import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRouter from "./routers/PublicRouter";
import PagesRouter from "./routers/PagesRouter";
import PrivateRouter from "./routers/PrivateRouter";
import Home from "./pages/Home";
import IniciarSesion from "./pages/IniciarSesion";
import Registrarse from "./pages/Registrarse";
import QuienesSomos from "./pages/QuienesSomos";
import AdminPages from "./routers/AdminPages";
import AdminRouter from "./routers/AdminRouter";

function App() {
  return (
    <Router>
      <div className="App ">
        <Switch>
          <PublicRouter path="/iniciarsesion" component={IniciarSesion} />
          <PublicRouter path="/registrarse" component={Registrarse} />
          <AdminRouter path="/admin" component={AdminPages} />
          <Route path="/" component={PagesRouter} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
