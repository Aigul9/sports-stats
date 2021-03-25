import React from "react";
import { withRouter } from "react-router-dom";
import PageList from "../page-list";
import SportService from "../../../services/sport-service";

const Leagues = () => {
  const sportService = new SportService();
  return <PageList getData={sportService.getLeagues} type="leagues" />;
};

export default withRouter(Leagues);
