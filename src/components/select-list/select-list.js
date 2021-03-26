import React, { useEffect, useState } from "react";
import SortedSet from "js-sorted-set";
import Select from "react-select";
import "./select-list.css";

const SelectList = ({ items, optionField, onChange }) => {
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

  return (
    <Select
      options={options}
      className="select-list"
      onChange={(value) => onChange(value)}
      isClearable={true}
    />
  );
};

export default SelectList;
