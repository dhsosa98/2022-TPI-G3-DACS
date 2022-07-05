import { Redirect, Route, Switch } from "react-router-dom";

import QuienesSomos from "../pages/QuienesSomos";
import Eventos from "../pages/Eventos";
import Hoteles from "../pages/Hoteles";
import IniciarSesion from "../pages/IniciarSesion";
import Paquetes from "../pages/Paquetes";
import Registrarse from "../pages/Registrarse";
import Transporte from "../pages/Transporte";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Hotel from "../pages/Hotel";

const PagesRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/quienessomos" component={QuienesSomos} />
      <Route path="/eventos" component={Eventos} />
      <Route exact path="/hoteles" component={Hoteles} />
      <Route path="/hoteles/:id" component={Hotel} />
      <Route path="/iniciarsesion" component={IniciarSesion} />
      <Route path="/paquetes" component={Paquetes} />
      <Route path="/registrarse" component={Registrarse} />
      <Route path="/transporte" component={Transporte} />
      <Route path="/contacto" component={Contacto} />
      <Redirect to="/" />
    </Switch>
  );
};

export default PagesRouter;
