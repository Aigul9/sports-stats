import React from "react";
import { Navbar, Nav } from "rsuite";
import "./header.css";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Body className="header">
        <Nav>
          <Nav.Item href="/sports-stats/teams" className="link-header">
            Sports statistics
          </Nav.Item>
          <Nav.Item href="/sports-stats/teams">Teams</Nav.Item>
          <Nav.Item href="/sports-stats/leagues">Leagues</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Header;
