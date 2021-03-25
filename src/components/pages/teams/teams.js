import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import Table from "../../table";
import ErrorIndicator from "../../error-indicator";
import SearchBar from "../../search-bar";
import { Context } from "../../utils/store";

const Teams = ({ history, location, getData }) => {
  const [state, dispatch] = useContext(Context);
  const [input, setInput] = useState("");
  const [items, setItems] = useState(state.teams);

  const search = window.location.search;
  const params = new URLSearchParams(search);

  const updateInput = (text = "") => {
    setInput(text);

    if (!text) {
      setItems(state.teams);
      return;
    }

    const filtered = state.teams.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });

    setItems(filtered);
  };

  useEffect(() => {
    getData()
      .then((data) => {
        dispatch({
          type: "GET_TEAMS",
          payload: data,
        });
      })
      .catch(() => {
        dispatch({
          type: "GET_ERROR",
        });
      });
  }, [getData, dispatch]);

  useEffect(() => {
    const name = params.get("name") || "";

    if (name) {
      history.push({ search: params.toString() });
    }

    updateInput(name);
  }, [state.teams]);

  if (state.error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <h1 id="title"> List of teams </h1>
      <SearchBar input={input} onChange={updateInput} />
      <Table
        onRowClicked={(id) => {
          history.push(`/teams/${id}`);
        }}
        items={items}
        type="teams"
      />
    </>
  );
};

export default withRouter(Teams);
