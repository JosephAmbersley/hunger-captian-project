import React from "react";
import { Route, Switch } from "react-router";
import Cart from './containers/Cart'
import Home from "./containers/Home";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"cart"} component={Cart} />
      </Switch>
    </>
  );
};
export default Router;
