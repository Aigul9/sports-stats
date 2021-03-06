import React from "react";
import PageList from "../page-list";
import SportService from "../../../services/sport-service";

const Teams = () => {
  const sportService = new SportService();

  return (
    <>
      <PageList
        getData={sportService.getTeams}
        type="teams"
        optionField="founded"
      />
    </>
  );
};

export default Teams;
