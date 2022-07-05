import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({ auth, component: Component, ...resto }) => {
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