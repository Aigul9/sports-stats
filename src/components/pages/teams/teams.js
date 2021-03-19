import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Table from "../../table";
import SportService from "../../../services/sport-service";

class Teams extends Component {
  sportService = new SportService();
  type = "teams";

  render() {
    return (
      <>
        <h1 id="title"> List of {this.type} </h1>
        <Table
          onRowClicked={(id) => {
            this.props.history.push(`/${this.type}/${id}`);
          }}
          getData={this.sportService.getTeams}
          type={this.type}
        />
      </>
    );
  }
}

export default withRouter(Teams);
