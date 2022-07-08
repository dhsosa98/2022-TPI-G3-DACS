import React, { useState } from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

const AdminRouter = ({ component: Component, ...resto }) => {
  const { isAdmin } = useContext(AuthContext);
  return (
    <Route
      {...resto}
      component={(props) =>
        isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AdminRouter;
