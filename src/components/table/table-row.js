import React from "react";

const TableRow = ({ data }) => {
  return (
    <tr>
      {Object.keys(data)
        .slice(1)
        .map((key, index) => {
          return <td key={index}>{data[key]}</td>;
        })}
    </tr>
  );
};

export default TableRow;
