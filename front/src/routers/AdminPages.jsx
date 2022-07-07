import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import FormularioHotel from "../components/FormularioHotel";
import FormularioTransporte from "../components/FormularioTransporte";
import FormularioPaquete from "../components/FormularioPaquete";
import { CrearSeguro } from "../components/CrearSeguro";
import { ActualizarSeguro } from "../components/ActualizarSeguro";
import { ActualizarEvento } from "../components/ActualizarEvento";
import { CrearEvento } from "../components/CrearEvento";
import FormularioPasaje from "../components/FormularioPasaje";
import { InsuranceTable } from "../components/InsuranceTable";

const AdminPages = () => {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path="/admin" exact component={Home} />
        <Route path="/admin/crear-hotel" component={FormularioHotel} />
        <Route path="/admin/crear-transporte" component={FormularioTransporte} />
        <Route path="/admin/crear-pasaje" component={FormularioPasaje} />
        <Route exact path="/admin/crear-seguro" component={CrearSeguro} />
        <Route path="/admin/editar-seguro/:id" component={ActualizarSeguro} />
        <Route path="/admin/crear-paquete" component={FormularioPaquete} />
        <Route exact path="/admin/crear-evento" component={CrearEvento} />
        <Route path="/admin/editar-evento/:id" component={ActualizarEvento} />
        <Route path='/admin/seguros' component={InsuranceTable} />
      </Switch>
    </>
  );
};

export default AdminPages;
