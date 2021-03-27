import React from "react";
import spinner from "./spinner.svg";
import "./spinner.css";

const Spinner = () => {
  return <img src={spinner} alt="Loading..." className="spinner" />;
};

export default Spinner;
