import React from "react";
import { Route, Switch } from "react-router-dom";

const AppRouter = () => {
  // todo lo que se haga una vez logueado

  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default AppRouter;
