import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({ component: Component, ...resto }) => {
  const [auth, setAuth] = useState(false);
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
