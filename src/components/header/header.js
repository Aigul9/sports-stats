import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-block">
      <h3>
        <Link to="/">Sports statistics</Link>
      </h3>
      <ul>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/leagues">Leagues</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
