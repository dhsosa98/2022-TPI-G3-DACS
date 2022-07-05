import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useState } from 'react';


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