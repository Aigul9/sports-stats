import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header";
import Teams from "../pages/teams";
import Leagues from "../pages/leagues";
import TeamCalendar from "../pages/team-calendar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Route path="/teams" exact component={Teams} />
          <Route path="/leagues" component={Leagues} />
          <Route
            path="/teams/:id"
            render={({ match }) => {
              return <TeamCalendar teamId={match.params.id} />;
            }}
          />
          <Route
            path="/league/:id"
            render={({ match, location, history }) => {
              console.log(match, location, history);
              //   const { id } = match.params;
            }}
          />
        </>
      </Router>
    );
  }
}
