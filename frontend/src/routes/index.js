import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import Login from "../views/Login";
import Home from "../views/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">{Login}</Route>
        <Route path="/">{Home}</Route>
      </Switch>
    </BrowserRouter>
  );
}
