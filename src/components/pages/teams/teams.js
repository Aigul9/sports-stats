import React, { Component } from "react";
import SportService from "../../../services/sport-service";
import Spinner from "../../spinner";
import './teams.css';

export default class Teams extends Component {
  sportService = new SportService();

  state = {
    teams: [],
    loading: true,
  };

  componentDidMount() {
    console.log("mounting");
    this.sportService.getTeams().then(this.onLoaded);
  }

  onLoaded = (teams) => {
    this.setState({ teams, loading: false });
  };

  renderTableData() {
    return this.state.teams.map((team) => {
      const {id, name, area, founded, venue, colors} = team;
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{area}</td>
          <td>{founded}</td>
          <td>{venue}</td>
          <td>{colors}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.teams[0]);
    return header.slice(1).map((key, index) => {
      key = key[0].toUpperCase() + key.slice(1);
      return <th key={index}>{key}</th>
    });
  }

  render() {
    const { loading } = this.state;
    const spinner = loading ? <Spinner/> : null;
    let header = null;

    if (!loading) {
      header = this.renderTableHeader();
    }

    return (
      <>
        {spinner}
        <table id="teams">
          <tbody>
            <tr>{header}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </>
    );
  }
}