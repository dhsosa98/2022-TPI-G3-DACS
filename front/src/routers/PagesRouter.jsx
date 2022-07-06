import { Redirect, Route, Switch } from "react-router-dom";

import QuienesSomos from "../pages/QuienesSomos";
import Eventos from "../pages/Eventos";
import Hoteles from "../pages/Hoteles";
import Paquetes from "../pages/Paquetes";
import Contacto from "../pages/Contacto";
import Hotel from "../pages/Hotel";
import FormularioHotel from "../components/FormularioHotel";
import FormularioTransporte from "../components/FormularioTransporte";

import FormularioPasaje from "../components/FormularioPasaje";
import Evento from "../pages/Evento";
import Transportes from "../pages/Transportes";
import Transporte from "../pages/Transporte";
import FormularioPaquete from "../components/FormularioPaquete";
import { CrearSeguro } from "../components/CrearSeguro";
import { ActualizarSeguro } from "../components/ActualizarSeguro";
import { ActualizarEvento } from "../components/ActualizarEvento";
import { CrearEvento } from "../components/CrearEvento";
import { InsuranceTable } from "../components/InsuranceTable";

const PagesRouter = () => {
  return (
    <Switch>
      <Route path="/quienessomos" component={QuienesSomos} />
      <Route exact path="/eventos" component={Eventos} />
      <Route path="/eventos/:id" component={Evento} />
      <Route exact path="/hoteles" component={Hoteles} />
      <Route path="/hoteles/:id" component={Hotel} />
      <Route path="/paquetes" component={Paquetes} />
      <Route exact path="/transportes" component={Transportes} />
      <Route path="/transportes/:id" component={Transporte} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/formu-hotel" component={FormularioHotel} />
      <Route path="/formu-transporte" component={FormularioTransporte} />
      <Route path="/formu-pasaje" component={FormularioPasaje} />
      <Route exact path="/formu-seguro" component={CrearSeguro} />
      <Route path="/formu-seguro/:id" component={ActualizarSeguro} />
      <Route path="/formu-paquete" component={FormularioPaquete} />
      <Route exact path="/formu-evento" component={CrearEvento} />
      <Route path="/formu-evento/:id" component={ActualizarEvento} />
      <Route path='/seguros' component={InsuranceTable} />
    </Switch>
  );
};

export default PagesRouter;
