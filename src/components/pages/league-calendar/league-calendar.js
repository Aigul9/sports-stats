import React, { useEffect, useState } from "react";
import SportService from "../../../services/sport-service";
import PageCalendar from "../page-calendar";

const LeagueCalendar = ({ leagueId }) => {
  const sportService = new SportService();
  const [leagueName, setLeague] = useState();

  useEffect(() => {
    sportService.getLeague(leagueId).then((league) => {
      setLeague(league.name);
    });
  }, []);

  return (
    <>
      <PageCalendar
        itemId={leagueId}
        itemName={leagueName}
        type="competitions"
      />
    </>
  );
};

export default LeagueCalendar;
