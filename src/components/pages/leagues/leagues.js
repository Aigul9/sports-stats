import React, { Component } from "react";
import SportService from "../../../services/sport-service";
import Spinner from "../../spinner";
import '../table.css';

export default class Leagues extends Component {
  sportService = new SportService();

  state = {
    leagues: [],
    loading: true,
  };

  componentDidMount() {
    this.sportService.getLeagues().then(this.onLoaded);
  }

  onLoaded = (leagues) => {
    this.setState({ leagues, loading: false });
  };

  renderTableData() {
    return this.state.leagues.map((league) => {
      const {id, name, area} = league;
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{area}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.leagues[0]);
    
    return header.slice(1).map((key, index) => {
      key = key[0].toUpperCase() + key.slice(1);
      return <th key={index}>{key}</th>
    });
  }

  render() {
    const { loading } = this.state;
    const spinner = loading ? <Spinner/> : <h1 id='title'>List of leagues</h1>;
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