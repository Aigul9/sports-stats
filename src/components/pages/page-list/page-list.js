import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import Table from "../../table";
import ErrorIndicator from "../../error-indicator";
import SearchBar from "../../search-bar";
import { Context } from "../../utils/store";

const PageList = ({ history, getData, type }) => {
  const [state, dispatch] = useContext(Context);
  const [input, setInput] = useState("");
  const initialData = state[type];
  const [items, setItems] = useState(initialData);

  const search = window.location.search;
  const params = new URLSearchParams(search);

  const updateInput = (text = "") => {
    setInput(text);

    if (!text) {
      setItems(initialData);
      return;
    }

    const filtered = initialData.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });

    setItems(filtered);
  };

  useEffect(() => {
    getData()
      .then((data) => {
        dispatch({
          type: `GET_${type.toUpperCase()}`,
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
  }, [initialData]);

  if (state.error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <h1 id="title"> List of {type} </h1>
      <SearchBar input={input} onChange={updateInput} />
      <Table
        onRowClicked={(id) => {
          history.push(`/${type}/${id}`);
        }}
        items={items}
        type={type}
      />
    </>
  );
};

export default withRouter(PageList);
