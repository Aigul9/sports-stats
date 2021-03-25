import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import Table from "../../table";
import ErrorIndicator from "../../error-indicator";
import SearchBar from "../../search-bar";
import { Context } from "../../utils/store";

const Teams = ({ history, getData }) => {
  const [state, dispatch] = useContext(Context);
  const [input, setInput] = useState("");
  const [items, setItems] = useState(state.teams);

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
    updateInput();
  }, [state.teams]);

  if (state.error) {
    return <ErrorIndicator />;
  }

  console.log(history);

  return (
    <>
      <h1 id="title"> List of teams </h1>
      <SearchBar input={input} onChange={updateInput} />
      <Table
        onRowClicked={(id) => {
          history.push(`/teams/${id}`);
        }}
        items={items}
      />
    </>
  );
};

export default withRouter(Teams);
