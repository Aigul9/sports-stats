import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header";
import Teams from "../pages/teams";
import Leagues from "../pages/leagues";
import TeamCalendar from "../pages/team-calendar";
import LeagueCalendar from "../pages/league-calendar";
import Store from "../utils/store";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Store>
          <Header />
          <Route path="/teams" exact component={Teams} />
          <Route path="/leagues" exact component={Leagues} />
          <Route
            path="/teams/:id"
            render={({ match }) => {
              return <TeamCalendar teamId={match.params.id} />;
            }}
          />
          <Route
            path="/leagues/:id"
            render={({ match }) => {
              return <LeagueCalendar leagueId={match.params.id} />;
            }}
          />
        </Store>
      </Router>
    );
  }
}