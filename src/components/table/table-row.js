import React from "react";
import "./table.css";

const TableRow = ({ data, onRowClicked }) => {
  return (
    <tr onClick={onRowClicked} className="row-hover">
      {Object.keys(data)
        .slice(1)
        .map((key, index) => {
          return <td key={index}>{data[key]}</td>;
        })}
    </tr>
  );
};

export default TableRow;
