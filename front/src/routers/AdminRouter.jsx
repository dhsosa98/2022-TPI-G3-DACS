import React, { useState } from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

const AdminRouter = ({ component: Component, ...resto }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...resto}
      component={(props) =>
        (user?.role?.description === 'Admin') ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AdminRouter;