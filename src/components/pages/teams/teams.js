import React, { Component } from "react";
import SportService from "../../../services/sport-service";
import Spinner from "../../spinner";
import Table from "../../table";

export default class Teams extends Component {
  sportService = new SportService();

  state = {
    teams: [],
    loading: true,
  };

  componentDidMount() {
    this.sportService.getTeams().then(this.onLoaded);
  }

  onLoaded = (teams) => {
    this.setState({ teams, loading: false });
  };

  render() {
    const { teams, loading } = this.state;
    let content = loading ? (
      <Spinner />
    ) : (
      <>
        <h1 id="title">List of teams</h1>
        <Table items={teams} />
      </>
    );

    return <div>{content}</div>;
  }
}
