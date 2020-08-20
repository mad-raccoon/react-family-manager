import React, { useState } from "react";
import "./Table.css";

const Table = ({ headers, body, onRowClick }) => {
  const [orderIndex, setOrderIndex] = useState(null);

  const handleSort = (header) => {
    const index = headers.findIndex(function (o) {
      return o === header;
    });
    console.log(index);
    setOrderIndex(index);
  };

  const orderedBody = () => {
    if (orderIndex || orderIndex === 0) {
      return body.sort(function (a, b) {
        return a[orderIndex + 1] > b[orderIndex + 1] ? 1 : -1;
      });
    }

    return body;
  };

  const getCells = (array) => {
    const cells = [];
    for (let index = 1; index < array.length; index++) {
      cells.push(<td>{array[index]}</td>);
    }
    return cells;
  };

  return (
    <table>
      <tr>
        {headers.map((header) => (
          <th key={header} onClick={() => handleSort(header)}>
            {header}
          </th>
        ))}
      </tr>

      {orderedBody().map((entry) => (
        <tr onClick={() => onRowClick(entry[0])}>{getCells(entry)}</tr>
      ))}
    </table>
  );
};

export default Table;
