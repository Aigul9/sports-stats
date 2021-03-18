import React, { Component } from "react";
import TableRow from "./table-row";
import TableHeadItem from "./table-head-item";
import "./table.css";

export default class Table extends Component {
  render() {
    let { items } = this.props;

    return (
      <table id="table">
        <thead>
          <tr>
            <TableHeadItem item={items[0]} />
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return <TableRow key={item.id} data={item} />;
          })}
        </tbody>
      </table>
    );
  }
}