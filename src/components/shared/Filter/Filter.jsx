import React from "react";
import { useState } from "react";
import "./Filter.css";

const Filter = ({ selectedFilter, filters, onFilterSelection }) => {
  return (
    <div className="filter-container">
      {filters.map((filter) => (
        <div
          key={filter.value}
          className={
            "filter-item " + (filter.value === selectedFilter ? "selected" : "")
          }
          onClick={() => onFilterSelection(filter.value)}
        >
          {filter.name}
        </div>
      ))}
    </div>
  );
};

export default Filter;
