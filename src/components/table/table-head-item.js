import React from "react";
import "./table.css";

const TableHeadItem = ({ item }) => {
  let header = Object.keys(item);

  return header.slice(1).map((key, index) => {
    key = key[0].toUpperCase() + key.slice(1);
    return <th key={index}>{key}</th>;
  });
};

export default TableHeadItem;
