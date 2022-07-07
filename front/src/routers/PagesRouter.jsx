import { Redirect, Route, Switch } from "react-router-dom";

import QuienesSomos from "../pages/QuienesSomos";
import Eventos from "../pages/Eventos";
import Hoteles from "../pages/Hoteles";
import Paquetes from "../pages/Paquetes";
import Contacto from "../pages/Contacto";
import Hotel from "../pages/Hotel";

import Evento from "../pages/Evento";
import Transportes from "../pages/Transportes";
import Transporte from "../pages/Transporte";

import { InsuranceTable } from "../components/InsuranceTable";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";

const PagesRouter = () => {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/quienessomos" component={QuienesSomos} />
      <Route exact path="/eventos" component={Eventos} />
      <Route path="/eventos/:id" component={Evento} />
      <Route exact path="/hoteles" component={Hoteles} />
      <Route path="/hoteles/:id" component={Hotel} />
      <Route path="/paquetes" component={Paquetes} />
      <Route exact path="/transportes" component={Transportes} />
      <Route path="/transportes/:id" component={Transporte} />
      <Route path="/contacto" component={Contacto} />
    </Switch>
    </>
  );
};

export default PagesRouter;
