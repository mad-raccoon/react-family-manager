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
        return a[orderIndex] > b[orderIndex] ? 1 : -1;
      });
    }

    return body;
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
        <tr>
          {entry.map((col) => (
            <td key={col}>{col}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
