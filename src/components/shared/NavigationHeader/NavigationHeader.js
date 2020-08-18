import React from "react";
import { useHistory } from "react-router";
import "./NavigationHeader.css";

const NavigationHeader = ({ options }) => {
  const history = useHistory();

  return (
    <div className="navigation">
      {options.map((option) => {
        return (
          <div
            key={option.path}
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
