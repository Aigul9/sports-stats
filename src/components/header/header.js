import React from "react";
import { Navbar, Nav } from "rsuite";
import "./header.css";
import { Link as L } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Body className="header">
        <Nav>
          <LinkContainer to="/teams">
            <Nav.Item>
              {/* <Nav.Link as={L} to="/teams" className="link-header"> */}
              Sports statistics
              {/* </Nav.Link> */}
            </Nav.Item>
          </LinkContainer>
          <LinkContainer to="/teams">
            <Nav.Item>
              {/* <Nav.Link as={L} to="/teams"> */}
              Teams
              {/* </Nav.Link> */}
            </Nav.Item>
          </LinkContainer>
          <LinkContainer to="/leagues">
            <Nav.Item>
              {/* <Nav.Link as={L} to="/leagues"> */}
              Leagues
              {/* </Nav.Link> */}
            </Nav.Item>
          </LinkContainer>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Header;
