import { Redirect, Route, Switch } from "react-router-dom";

import QuienesSomos from "../pages/QuienesSomos";
import Eventos from "../pages/Eventos";
import Hoteles from "../pages/Hoteles";
import Paquetes from "../pages/Paquetes";
import Paquete from "../pages/Paquete";
import Contacto from "../pages/Contacto";
import Hotel from "../pages/Hotel";

import Evento from "../pages/Evento";
import Transportes from "../pages/Transportes";
import Transporte from "../pages/Transporte";
import Seguros from "../pages/Seguros";

import { InsuranceTable } from "../components/InsuranceTable";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import IniciarSesion from "../pages/IniciarSesion";
import Registrarse from "../pages/Registrarse";
import PublicRouter from "./PublicRouter";
import { Payment } from "../components/Payment";
import Reservas from "../pages/Reservas";
import Perfil from "../pages/Perfil";

const PagesRouter = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <PublicRouter path="/iniciarsesion" component={IniciarSesion} />
        <PublicRouter path="/registrarse" component={Registrarse} />
        <Route path="/quienessomos" component={QuienesSomos} />
        <Route exact path="/eventos" component={Eventos} />
        <Route path="/eventos/:id" component={Evento} />
        <Route exact path="/hoteles" component={Hoteles} />
        <Route path="/hoteles/:id" component={Hotel} />
        <Route exact path="/paquetes" component={Paquetes} />
        <Route path="/paquetes/:id" component={Paquete} />
        <Route exact path="/transportes" component={Transportes} />
        <Route path="/transportes/:id" component={Transporte} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/seguros" component={Seguros} />
        <Route path="/compra-paquete" component={Payment} />
        <Route path="/mis-reservas" component={Reservas} />
        <Route path="/mis-datos" component={Perfil} />
      </Switch>
    </>
  );
};

export default PagesRouter;
