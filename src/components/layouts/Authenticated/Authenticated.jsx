import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TeamPage, PlanPage } from "../../pages";
import { NavigationHeader } from "../../shared";
import { useAuth } from "../../../shared/hooks";
import "./Authenticated.css";

const navigationOptions = [
  { title: "Plan", path: "/" },
  { title: "Team", path: "./team" },
  { title: "About", path: "/about" },
];

const Authenticated = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <BrowserRouter>
      <div className="header">
        <NavigationHeader options={navigationOptions} />
        <input type="button" value="Logout" onClick={handleLogout} />
      </div>
      <Switch>
        <Route path="/about">
          <div>about</div>
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/">
          <PlanPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Authenticated;
