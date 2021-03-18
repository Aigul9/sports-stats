import React, { Component } from "react";
import SportService from "../../../services/sport-service";
import Spinner from "../../spinner";
import Table from "../../table";

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

  render() {
    const { leagues, loading } = this.state;
    let content = loading ? (
      <Spinner />
    ) : (
      <>
        <h1 id="title">List of leagues</h1>
        <Table items={leagues} />
      </>
    );

    return <div>{content}</div>;
  }
}