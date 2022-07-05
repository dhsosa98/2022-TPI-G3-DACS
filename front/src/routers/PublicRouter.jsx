import React from 'react'
import { Redirect, Route } from "react-router-dom";

const PublicRouter = ({ auth, component: Component, ...resto }) => {
  return (
    <Route
      {...resto}
      component={(props) =>
        auth ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRouter