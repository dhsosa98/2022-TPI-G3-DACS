import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";
import HomeAdmin from "../pages/HomeAdmin";
import FormularioTransporte from "../components/FormularioTransporte";
import FormularioPaquete from "../components/FormularioPaquete";
import { HotelTables } from "../components/HotelTables";
import { CrearSeguro } from "../components/CrearSeguro";
import { ActualizarSeguro } from "../components/ActualizarSeguro";
import { ActualizarEvento } from "../components/ActualizarEvento";
import { CrearHotel } from "../components/CrearHotel";
import { ActualizarHotel } from "../components/ActualizarHotel";
import { CrearEvento } from "../components/CrearEvento";
import FormularioPasaje from "../components/FormularioPasaje";
import { InsuranceTable } from "../components/InsuranceTable";
import { ShowTable } from "../components/ShowTable";
import { UserTables } from "../components/UserTable";
import { PackageTable } from "../components/PackageTable";
import { TicketTable } from "../components/TicketTable";
import { CrearPasaje } from "../components/CrearPasaje";
import { ActualizarPasaje } from "../components/ActualizarPasaje";



const AdminPages = () => {
  return (
    <>
      <NavBarAdmin/>
      <Switch>
        {/* <Route path="/admin/crear-usuario" component={CrearUsuario} />
        <Route path='/admin/lista-usuarios' component={usersTable} /> */}
        <Route path="/admin" exact component={HomeAdmin} />
        <Route exact path="/admin/crear-hotel" component={CrearHotel} />
        <Route path="/admin/editar-hotel/:id" component={ActualizarHotel} />
        <Route path="/admin/crear-transporte" component={FormularioTransporte} />
        <Route exact path="/admin/crear-pasaje" component={CrearPasaje} />
        <Route path="/admin/editar-pasaje/:id" component={ActualizarPasaje} />
        <Route exact path="/admin/crear-seguro" component={CrearSeguro} />
        <Route path="/admin/editar-seguro/:id" component={ActualizarSeguro} />
        <Route path="/admin/crear-paquete" component={FormularioPaquete} />
        <Route exact path="/admin/crear-evento" component={CrearEvento} />
        <Route path="/admin/editar-evento/:id" component={ActualizarEvento} />
        <Route path='/admin/lista-seguros' component={InsuranceTable} />
        <Route path='/admin/lista-hoteles' component={HotelTables} />
        <Route path='/admin/lista-eventos' component={ShowTable} />
        <Route path='/admin/lista-usuarios' component={UserTables} />
        <Route path='/admin/lista-paquetes' component={PackageTable} />
        <Route path='/admin/lista-pasajes' component={TicketTable} />
      </Switch>
    </>
  );
};

export default AdminPages;
