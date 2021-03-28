import React from "react";
import { Navbar, Nav } from "rsuite";
import { LinkContainer } from "react-router-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Body className="header">
        <Nav>
          <LinkContainer to="/" className="link-header">
            <Nav.Item>Sports statistics</Nav.Item>
          </LinkContainer>
          <LinkContainer to="/teams">
            <Nav.Item>Teams</Nav.Item>
          </LinkContainer>
          <LinkContainer to="/leagues">
            <Nav.Item>Leagues</Nav.Item>
          </LinkContainer>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Header;
