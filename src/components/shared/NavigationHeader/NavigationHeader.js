import React from "react";
import { useHistory } from "react-router";
import "./NavigationHeader.css";

const testOptions = [
  { title: "Activity", path: "/" },
  { title: "Team", path: "./team" },
  { title: "About", path: "/about" },
];

const NavigationHeader = ({ options = testOptions }) => {
  const history = useHistory();

  return (
    <div className="navigation">
      {options.map((option) => {
        return (
          <div
            className="navigation-item"
            onClick={() => history.push(option.path)}
          >
            {option.title}
          </div>
        );
      })}
    </div>
  );
};

export default NavigationHeader;
