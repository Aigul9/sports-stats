import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import Table from "../../table";
import ErrorIndicator from "../../error-indicator";
import Spinner from "../../spinner";
import SearchBar from "../../search-bar";
import SelectList from "../../select-list";
import { Context } from "../../utils/store";

const PageList = ({ history, getData, type, optionField }) => {
  const [state, dispatch] = useContext(Context);
  const [input, setInput] = useState("");
  const [selectedOption, setSelectedOption] = useState();

  const params = new URLSearchParams(window.location.hash.split("?")[1]);

  const searchItems = (array, text) => {
    if (!text) {
      return array;
    }

    return array.filter((item) =>
      Object.values(item)
        .slice(1)
        .some((field) => {
          return convertField(field)
            .toString()
            .toLowerCase()
            .includes(text.toLowerCase());
        })
    );
  };

  const convertField = (field) => {
    return field || "";
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
    setSelectedOption(+value);
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
    const year = params.get("year") || "";
    history.push({ search: params.toString() });

    onSearchChange(name);
    onYearChange(year);
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
    <div className="space">
      <h2 id="title"> List of {type} </h2>
      <div className="options">
        <SearchBar input={input} onChange={onSearchChange} />
        <SelectList
          items={state[type]}
          optionField={optionField}
          onChange={onYearChange}
          selectedOption={selectedOption}
        />
      </div>
      <Table
        onRowClicked={(id) => {
          history.push(`/${type}/${id}`);
        }}
        items={visibleItems}
        type={type}
      />
    </div>
  );
};

export default withRouter(PageList);
