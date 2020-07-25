import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FamilyPage } from "../../pages";
import { NavigationHeader } from "../../shared";

const Authenticated = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/activities">
          <div>activities</div>
        </Route>
        <Route path="/about">
          <div>about</div>
        </Route>
        <Route path="/">
          <FamilyPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Authenticated;
