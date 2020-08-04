import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FamilyPage, ActivitiesPage } from "../../pages";
import { NavigationHeader } from "../../shared";
import { useAuth } from "../../../shared/hooks";
import "./Authenticated.css";

const Authenticated = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <BrowserRouter>
      <div className="header">
        <NavigationHeader />
        <input type="button" value="Logout" onClick={handleLogout} />
      </div>
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
