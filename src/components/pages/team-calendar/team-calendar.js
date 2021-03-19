import React, { Component } from "react";
import SportService from "../../../services/sport-service";
import Spinner from "../../spinner";

export default class TeamCalendar extends Component {
  sportService = new SportService();
  state = {
    matches: [],
    team: {},
    loading: true,
  };

  componentDidMount() {
    this.sportService.getMatch(this.props.teamId).then(({ matches }) => {
      this.setState({ matches });
    });

    this.sportService
      .getTeam(this.props.teamId)
      .then((team) => this.setState({ team, loading: false }));
  }

  renderTableData(items) {
    return items.map((match) => {
      const { id, date, homeTeam, awayTeam } = match;
      return (
        <tr key={id} className="row-hover">
          <td>{date}</td>
          <td>{homeTeam}</td>
          <td>{awayTeam}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    return (
      <thead>
        <tr>
          <th>Date</th>
          <th>Home Team</th>
          <th>Away Team</th>
        </tr>
      </thead>
    );
  }

  filterFinished() {
    return this.state.matches
      .filter((item) => item.status === "FINISHED")
      .reverse();
  }

  filterScheduled() {
    return this.state.matches.filter((item) => item.status === "SCHEDULED");
  }

  render() {
    const scheduled = this.filterScheduled(),
      finished = this.filterFinished();

    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <>
        <h1 id="title">{this.state.team.name}</h1>
        <table id="table" className="table-fixed">
          {this.renderTableHeader()}
          <tbody>
            <tr>
              <td colSpan="3">
                <span className="split">Scheduled ({scheduled.length})</span>
              </td>
            </tr>
            {this.renderTableData(scheduled)}
            <tr>
              <td colSpan="3">
                <span className="split">Finished ({finished.length})</span>
              </td>
            </tr>
            {this.renderTableData(finished)}
          </tbody>
        </table>
      </>
    );
  }
}
