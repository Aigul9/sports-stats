import React, { useContext } from "react";
import TableRow from "./table-row";
import TableHeadItem from "./table-head-item";
import { Context } from "../utils/store";
import "./table.css";

function Table({ items, onRowClicked, type }) {
  const [state] = useContext(Context);
  const globalItems = state[type];

  return (
    // <div className="table-wrapper">
    <table className="fl-table">
      <thead>
        <tr>
          <TableHeadItem item={globalItems[0]} />
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <TableRow
              key={item.id}
              data={item}
              onRowClicked={() => onRowClicked(item.id)}
            />
          );
        })}
      </tbody>
    </table>
    // </div>
  );
}

export default Table;
