import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FamilyPage, ActivitiesPage } from "../../pages";
import { NavigationHeader } from "../../shared";

const Authenticated = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/about">
          <div>about</div>
        </Route>
        <Route path="/family">
          <FamilyPage />
        </Route>
        <Route path="/">
          <ActivitiesPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Authenticated;
