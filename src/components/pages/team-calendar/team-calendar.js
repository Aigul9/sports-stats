import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

class TeamCalendar extends Component {
  render() {
    let {teamId} = this.props;
    console.log("cal", this.props.history.location);
    return (
      <h1>{teamId}</h1>
    );
  }
}

export default withRouter(TeamCalendar);