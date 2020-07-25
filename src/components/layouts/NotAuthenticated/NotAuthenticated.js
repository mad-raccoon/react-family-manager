import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RegisterPage, LoginPage } from "../../pages";

const NotAuthenticated = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default NotAuthenticated;
