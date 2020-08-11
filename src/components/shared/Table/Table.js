import React from 'react';
import './Table.css';

const Table = ({ headers, body, onRowClick }) => {
  return (
    <table>
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>

      {body.map((entry) => (
        <tr key={entry.id} onClick={() => onRowClick(entry.id)}>
          {entry.data.map((col) => (
            <td key={col}>{col}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
