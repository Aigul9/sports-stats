import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import "./select-list.css";

const SelectList = ({ items, optionField, onChange, selectedOption }) => {
  const [options, setOptions] = useState([]);

  const getSelectOptions = () => {
    let selectOptions = [
      ...new Set(items.map((item) => item[optionField]).filter((item) => item)),
    ].sort(); // list of years

    selectOptions = selectOptions.map((value) => {
      return { value, label: value };
    });

    setOptions(selectOptions);
  };

  useEffect(() => {
    getSelectOptions();
  }, []);

  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (selectedOption) {
      params.set("year", selectedOption);
    } else {
      params.delete("year");
    }
    history.push({ search: params.toString() });
  }, [selectedOption, history]);

  function handleChange(event) {
    if (!event) {
      event = "";
    } else {
      event = event.value;
    }

    onChange(event);
  }

  return (
    <Select
      value={{
        value: selectedOption,
        label: selectedOption || "Select...",
      }}
      options={options}
      className="select-list"
      onChange={handleChange}
      isClearable={true}
    />
  );
};

export default SelectList;
