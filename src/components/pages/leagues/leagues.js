import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SportService from "../../../services/sport-service";
import Table from "../../table";

class Leagues extends Component {
  sportService = new SportService();
  type = "leagues";

  render() {
    return (
      <>
        <h1 id="title"> List of {this.type} </h1>
        <Table
          onRowClicked={(id) => {
            this.props.history.push(`/${this.type}/${id}`);
          }}
          getData={this.sportService.getLeagues}
          type={this.type}
        />
      </>
    );
  }
}

export default withRouter(Leagues);
