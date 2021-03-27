import React from "react";
import PageList from "../page-list";
import SportService from "../../../services/sport-service";

const Leagues = () => {
  const sportService = new SportService();
  return <PageList getData={sportService.getLeagues} type="leagues" />;
};

export default Leagues;
