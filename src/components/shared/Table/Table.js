import React from "react";
import "./Table.css";

const testHeaders = ["What?", "When?", "Who?", "Info"];
const testBody = [
  ["aaa", "aaa", "aaa", "aaa"],
  ["aaa", "aaa", "aaa", "aaa"],
  ["aaa", "aaa", "aaa", "aaa"],
];

const Table = ({ headers = testHeaders, body = testBody }) => {
  return (
    <table>
      <tr>
        {headers.map((header) => (
          <th>{header}</th>
        ))}
      </tr>

      {body.map((entry) => (
        <tr>
          {entry.map((col) => (
            <td>{col}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
