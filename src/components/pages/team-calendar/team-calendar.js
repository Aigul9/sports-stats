import React, { Component } from "react";

export default class TeamCalendar extends Component {
  render() {
    let { teamId } = this.props;
    return <h1>{teamId}</h1>;
  }
}
