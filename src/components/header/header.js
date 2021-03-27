import React from "react";
import { Navbar, Nav } from "rsuite";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Body className="header">
        <Nav>
          <Nav.Item>
            <Link to="/sports-stats/" className="link link-header">
              Sports statistics
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/sports-stats/teams" className="link">
              Teams
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/sports-stats/leagues" className="link">
              Leagues
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Header;
