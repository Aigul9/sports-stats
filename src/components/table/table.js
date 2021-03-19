import React, { useContext, useEffect } from "react";
import TableRow from "./table-row";
import TableHeadItem from "./table-head-item";
import { Context } from "../utils/store";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./table.css";

function Table({ onRowClicked, getData, type }) {
  const [state, dispatch] = useContext(Context);
  const items = state[type];

  useEffect(() => {
    getData()
      .then((data) => {
        dispatch({
          type: `GET_${type.toUpperCase()}`,
          payload: data,
        });
      })
      .catch(() => {
        dispatch({
          type: "GET_ERROR",
        });
      });
  }, [getData, dispatch, type]);

  if (state.error) {
    return <ErrorIndicator />;
  }

  if (items.length === 0) {
    return <Spinner />;
  }

  return (
    <table id="table">
      <thead>
        <tr>
          <TableHeadItem item={items[0]} />
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
