import React, { Component } from "react";
import "./table.css";

export default class TableHeadItem extends Component {
  renderTableHeader() {
    let { item } = this.props;
    let header = Object.keys(item);

    return header.slice(1).map((key, index) => {
      key = key[0].toUpperCase() + key.slice(1);
      return <th key={index}>{key}</th>;
    });
  }

  render() {
    return this.renderTableHeader();
  }
}
