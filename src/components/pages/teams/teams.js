import React from "react";
import { withRouter } from "react-router-dom";
import PageList from "../page-list";
import SportService from "../../../services/sport-service";
// import SelectList from "../../select-list";

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

export default withRouter(Teams);
