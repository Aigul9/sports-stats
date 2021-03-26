import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./search-bar.css";

const SearchBar = ({ input, onChange }) => {
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (input) {
      params.set("name", input);
    } else {
      params.delete("name");
    }
    history.push({ search: params.toString() });
  }, [input, history]);

  return (
    <input
      placeholder="Search..."
      className="form-control search-input"
      value={input}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
