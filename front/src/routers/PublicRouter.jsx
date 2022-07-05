import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useState } from 'react';

const PublicRouter = ({ component: Component, ...resto }) => {
  const [auth, setAuth] = useState(false);
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
