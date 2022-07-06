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
import FormularioHotel from "../components/FormularioHotel";
import FormularioEvento from "../components/FormularioEvento";
import FormularioTransporte from "../components/FormularioTransporte";
import FormularioPaquete from "../components/FormularioPasaje";
import FormularioSeguro from "../components/FormularioSeguro";
import FormularioPasaje from "../components/FormularioPasaje";

const PagesRouter = () => {
  return (
    <Switch>
      <Route path="/quienessomos" component={QuienesSomos} />
      <Route path="/eventos" component={Eventos} />
      <Route exact path="/hoteles" component={Hoteles} />
      <Route path="/hoteles/:id" component={Hotel} />
      <Route path="/paquetes" component={Paquetes} />
      <Route path="/transporte" component={Transporte} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/formu-hotel" component={FormularioHotel} />
      <Route path="/formu-evento" component={FormularioEvento} />
      <Route path="/formu-transporte" component={FormularioTransporte} />
      <Route path="/formu-pasaje" component={FormularioPasaje} />
      <Route path="/formu-seguro" component={FormularioSeguro} />
    </Switch>
  );
};

export default PagesRouter;
