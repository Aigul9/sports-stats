import React from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import "./date-selector.css";

const DateSelector = ({ onChange }) => {
  return (
    <DateRangePicker
      showOneCalendar
      placeholder="Choose the range"
      className="date-picker"
      cleanable={true}
      onChange={(dates) => onChange(dates)}
    />
  );
};

export default DateSelector;
