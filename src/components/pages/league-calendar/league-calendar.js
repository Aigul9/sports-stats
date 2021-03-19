import React, { Component } from "react";

export default class LeagueCalendar extends Component {
  render() {
    let { leagueId } = this.props;
    return <h1>{leagueId}</h1>;
  }
}
