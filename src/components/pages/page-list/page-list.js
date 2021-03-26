import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import Table from "../../table";
import ErrorIndicator from "../../error-indicator";
import Spinner from "../../spinner";
import SearchBar from "../../search-bar";
import SelectList from "../../select-list";
import { Context } from "../../utils/store";

const PageList = ({ history, getData, type, optionField }) => {
  // list of teams/leagues
  const [state, dispatch] = useContext(Context);
  // search field
  const [input, setInput] = useState("");
  // selected option
  const [selectedOption, setSelectedOption] = useState();

  const search = window.location.search;
  const params = new URLSearchParams(search);

  const searchItems = (array, text) => {
    if (!text) {
      return array;
    }

    return array.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
  };

  const filterItems = (array, value) => {
    if (!value) {
      return array;
    }

    return array.filter((item) => item[optionField] === value);
  };

  const onSearchChange = (text = "") => {
    setInput(text);
  };

  const onYearChange = (value) => {
    let year = value ? value.value : "";
    setSelectedOption(year);
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
  }, []);

  useEffect(() => {
    const name = params.get("name") || "";

    if (name) {
      history.push({ search: params.toString() });
    }

    onSearchChange(name);
  }, [state[type]]);

  if (state.error) {
    return <ErrorIndicator />;
  }

  const visibleItems = filterItems(
    searchItems(state[type], input),
    selectedOption
  );

  if (state[type].length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <h1 id="title"> List of {type} </h1>
      <div className="table-options">
        <SearchBar input={input} onChange={onSearchChange} />
        <SelectList
          items={state[type]}
          optionField={optionField}
          onChange={onYearChange}
        />
      </div>
      <Table
        onRowClicked={(id) => {
          history.push(`/${type}/${id}`);
        }}
        items={visibleItems}
        type={type}
      />
    </>
  );
};

export default withRouter(PageList);
