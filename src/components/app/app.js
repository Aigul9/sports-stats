import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header";
import Teams from '../pages/teams';
import Leagues from '../pages/leagues';

export default class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Route path="/teams" component={Teams}/>
          <Route path="/leagues" component={Leagues}/>
          <Route
            path="/team/:id"
            render={({ match, location, history }) => {
              const { id } = match.params;
              console.log(id);
              // return <BookItem bookId={id}/>
            }}
          />
          <Route
            path="/league/:id"
            render={({ match, location, history }) => {
              console.log(match, location, history);
              const { id } = match.params;
              console.log(id);
              // return <BookItem bookId={id}/>
            }}
          />
        </>
      </Router>
    );
  }
}
