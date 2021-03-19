import React, { Component } from "react";
import SportService from "../../../services/sport-service";
import Spinner from "../../spinner";
import "./team-calendar.css";

export default class TeamCalendar extends Component {
  sportService = new SportService();
  state = {
    matches: [],
    team: {},
    loading: true,
  };

  componentDidMount() {
    this.sportService.getMatch(this.props.teamId).then(({ matches }) => {
      console.log(matches);
      this.setState({ matches });
    });

    this.sportService
      .getTeam(this.props.teamId)
      .then((team) => this.setState({ team, loading: false }));
  }

  assignMatchResultClass(winner, type) {
    if (winner === null) {
      return;
    }
    if (winner === "DRAW") {
      return "draw";
    }
    if (winner.substr(0, 4).toLowerCase() === type) {
      return "win";
    } else {
      return "lose";
    }
  }

  // assignCurrentTeamClass(teamName) {
  //   return teamName === this.state.team.name ? "current-team" : null;
  // }

  renderTableData(items) {
    return items.map((match) => {
      const { id, date, winner, homeTeam, awayTeam } = match;

      const classHomeTeam = this.assignMatchResultClass(winner, "home"),
        classAwayTeam = this.assignMatchResultClass(winner, "away");
      // classHomeCurrent = this.assignCurrentTeamClass(homeTeam),
      // classAwayCurrent = this.assignCurrentTeamClass(awayTeam);

      return (
        <tr key={id} className="row-hover">
          <td>{date}</td>
          <td className={`${classHomeTeam}`}>{homeTeam}</td>
          <td className={`${classAwayTeam}`}>{awayTeam}</td>
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
