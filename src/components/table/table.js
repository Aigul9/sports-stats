import React, { useContext } from "react";
import TableRow from "./table-row";
import TableHeadItem from "./table-head-item";
import Spinner from "../spinner";
import { Context } from "../utils/store";
import "./table.css";

function Table({ items, onRowClicked, type }) {
  const [state] = useContext(Context);
  const globalItems = state[type];
  if (globalItems.length === 0) {
    return <Spinner />;
  }

  return (
    <table id="table">
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
  );
}

export default Table;
