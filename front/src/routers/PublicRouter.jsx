import React, { useState } from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

const PublicRouter = ({ component: Component, ...resto }) => {
  const { auth } = useContext(AuthContext);
  return (
    <Route
      {...resto}
      component={(props) =>
        auth ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRouter;
