import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

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
