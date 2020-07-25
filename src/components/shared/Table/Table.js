import React from "react";
import "./Table.css";

const Table = ({ headers, body, onRowClick }) => {
  return (
    <table>
      <tr>
        {headers.map((header) => (
          <th>{header}</th>
        ))}
      </tr>

      {body.map((entry) => (
        <tr onClick={() => onRowClick(entry.id)}>
          {entry.data.map((col) => (
            <td>{col}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
