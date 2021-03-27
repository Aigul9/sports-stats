import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import SportService from "../../../services/sport-service";
import Spinner from "../../spinner";
import SelectList from "../../select-list";
import DateSelector from "../../date-selector";
import "./team-calendar.css";

class TeamCalendar extends Component {
  sportService = new SportService();
  state = {
    matches: [],
    team: {},
    loading: true,
    selectedOption: null,
    startDate: null,
    endDate: null,
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

  onDateChange = (dates) => {
    const [startDate, endDate] = dates;
    this.setState({ startDate, endDate });
    console.log(startDate, endDate);
  };

  filterByDates = (items, startDate, endDate) => {
    if (!startDate) {
      return items;
    }

    return items.filter((item) => {
      const teamDate = new Date(moment(item.date, "DD.MM.YYYY")).getTime(),
        dateBefore = new Date(startDate).getTime(),
        dateAfter = new Date(endDate).getTime();
      return dateBefore <= teamDate && teamDate <= dateAfter;
    });
  };

  render() {
    const {
      matches,
      team,
      loading,
      selectedOption,
      startDate,
      endDate,
    } = this.state;

    const scheduled = this.filterScheduled(
        this.filterByDates(
          this.filterByYear(matches, selectedOption),
          startDate,
          endDate
        )
      ),
      finished = this.filterFinished(
        this.filterByDates(
          this.filterByYear(matches, selectedOption),
          startDate,
          endDate
        )
      );

    if (loading) {
      return <Spinner />;
    }

    return (
      <>
        <h2 id="title">{team.name}</h2>
        <div className="date-fields">
          <DateSelector onChange={this.onDateChange} />
          <SelectList
            items={this.updateArray(matches)}
            optionField="date"
            onChange={this.onYearChange}
            selectedOption={selectedOption}
          />
        </div>
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
