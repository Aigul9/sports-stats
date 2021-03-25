import React from "react";
import { withRouter } from "react-router-dom";
import PageList from "../page-list";
import SportService from "../../../services/sport-service";

const Teams = () => {
  const sportService = new SportService();
  return <PageList getData={sportService.getTeams} type="teams" />;
};

export default withRouter(Teams);
