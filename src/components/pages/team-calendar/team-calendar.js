import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SportService from "../../../services/sport-service";
import Spinner from "../../spinner";
import SelectList from "../../select-list";
import "./team-calendar.css";

class TeamCalendar extends Component {
  sportService = new SportService();
  state = {
    matches: [],
    team: {},
    loading: true,
    selectedOption: null,
  };

  componentDidMount() {
    this.sportService.getMatch(this.props.teamId).then(({ matches }) => {
      this.setState({ matches });
    });

    this.sportService
      .getTeam(this.props.teamId)
      .then((team) => this.setState({ team, loading: false }));

    const params = new URLSearchParams(window.location.search);
    this.props.history.push({ search: params.toString() });
    const year = params.get("year") || "";
    this.onYearChange(year);
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

  filterFinished(items) {
    return items.filter((item) => item.status === "FINISHED").reverse();
  }

  filterScheduled(items) {
    return items.filter((item) => item.status === "SCHEDULED");
  }

  filterByYear(items, year) {
    if (!year) {
      return items;
    }

    return items.filter((item) => item.date.substr(6, 4) === year);
  }

  onYearChange = (year) => {
    this.setState({ selectedOption: year });
  };

  updateArray = (items) => {
    return items.map((item) => {
      return {
        ...item,
        date: item.date.substr(6, 4),
      };
    });
  };

  render() {
    const { matches, team, loading, selectedOption } = this.state;
    const scheduled = this.filterScheduled(
        this.filterByYear(matches, selectedOption)
      ),
      finished = this.filterFinished(
        this.filterByYear(matches, selectedOption)
      );

    if (loading) {
      return <Spinner />;
    }

    return (
      <>
        <h1 id="title">{team.name}</h1>
        <SelectList
          items={this.updateArray(matches)}
          optionField="date"
          onChange={this.onYearChange}
          selectedOption={selectedOption}
        />
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

export default withRouter(TeamCalendar);
