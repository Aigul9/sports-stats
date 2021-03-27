import React, { useEffect, useState } from "react";
import SportService from "../../../services/sport-service";
import PageCalendar from "../page-calendar";

const TeamCalendar = ({ teamId }) => {
  const sportService = new SportService();
  const [teamName, setTeam] = useState();

  useEffect(() => {
    sportService.getTeam(teamId).then((team) => {
      setTeam(team.name);
    });
  }, []);

  return (
    <>
      <PageCalendar itemId={teamId} itemName={teamName} type="teams" />
    </>
  );
};

export default TeamCalendar;
