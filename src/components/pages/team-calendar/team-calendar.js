import React from "react";
import { withRouter } from "react-router-dom";
import SportService from "../../../services/sport-service";
import PageCalendar from "../page-calendar";

const TeamCalendar = ({ teamId }) => {
  const sportService = new SportService();

  return (
    <>
      <PageCalendar getData={sportService.getTeam} itemId={teamId} />
    </>
  );
};

export default withRouter(TeamCalendar);
