import React from "react";
import img from "./error.png";
import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={img} alt="Error icon" />
      <span>Data can not be fetched. Try again later.</span>
    </div>
  );
};

export default ErrorIndicator;
