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
import AdminRouter from "./routers/AdminRouter";
import AdminPages from "./routers/AdminPages";

function App() {
  return (
    <Router>
      <div className="App ">
        <div className="flex flex-col min-h-screen">
          <Switch>
            <AdminRouter path="/admin" component={AdminPages} />
            <Route path="/" component={PagesRouter} />
            <Route path="/" exact component={Home} />
            {/* <Redirect to="/" /> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
