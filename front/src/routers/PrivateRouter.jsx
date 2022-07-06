import React, { useState } from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

const PrivateRouter = ({ component: Component, ...resto }) => {
  const { auth } = useContext(AuthContext);
  return (
    <Route
      {...resto}
      component={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRouter;
