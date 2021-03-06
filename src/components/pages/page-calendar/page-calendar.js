import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import SportService from "../../../services/sport-service";
import Spinner from "../../spinner";
import SelectList from "../../select-list";
import DateSelector from "../../date-selector";
import "./page-calendar.css";
import ErrorIndicator from "../../error-indicator";

class PageCalendar extends Component {
  sportService = new SportService();
  state = {
    matches: [],
    loading: true,
    selectedOption: null,
    startDate: null,
    endDate: null,
    error: false,
  };

  componentDidMount() {
    this.sportService
      .getMatch(this.props.type, this.props.itemId)
      .then(({ matches }) => {
        this.setState({ matches, loading: false, error: false });
      })
      .catch((e) => {
        this.setState({ loading: false, error: true });
      });

    const params = new URLSearchParams(window.location.hash.split("?")[1]);
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

  renderTableData(matches) {
    return matches.map((match) => {
      const { id, date, winner, homeTeam, awayTeam } = match;

      const classHomeTeam = this.assignMatchResultClass(winner, "home"),
        classAwayTeam = this.assignMatchResultClass(winner, "away");

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

  filterFinished(matches) {
    return matches.filter((match) => match.status === "FINISHED").reverse();
  }

  filterScheduled(matches) {
    return matches.filter((match) => match.status === "SCHEDULED");
  }

  filterByYear(matches, year) {
    if (!year) {
      return matches;
    }

    return matches.filter((match) => match.date.substr(6, 4) === year);
  }

  onYearChange = (year) => {
    this.setState({ selectedOption: year });
  };

  updateArray = (matches) => {
    return matches.map((match) => {
      return {
        ...match,
        date: match.date.substr(6, 4),
      };
    });
  };

  onDateChange = (dates) => {
    const [startDate, endDate] = dates;
    this.setState({ startDate, endDate });
  };

  filterByDates = (matches, startDate, endDate) => {
    if (!startDate) {
      return matches;
    }

    return matches.filter((match) => {
      const matchDate = new Date(moment(match.date, "DD.MM.YYYY")).getTime(),
        dateBefore = new Date(startDate).getTime(),
        dateAfter = new Date(endDate).getTime();
      return dateBefore <= matchDate && matchDate <= dateAfter;
    });
  };

  render() {
    const {
      matches,
      loading,
      selectedOption,
      startDate,
      endDate,
      error,
    } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

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

    return (
      <div className="space">
        <h2 id="title">{this.props.itemName}</h2>
        <div className="options">
          <DateSelector onChange={this.onDateChange} />
          <SelectList
            items={this.updateArray(matches)}
            optionField="date"
            onChange={this.onYearChange}
            selectedOption={selectedOption}
          />
        </div>
        <div className="table-wrapper">
          <table className="fl-table fixed">
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
        </div>
      </div>
    );
  }
}

export default withRouter(PageCalendar);
