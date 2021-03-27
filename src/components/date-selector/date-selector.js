import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import "./date-selector.css";

const DateSelector = ({ onChange }) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(null);
  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };
  // return (
  //   <DatePicker
  //     dateFormat="dd.MM.yyyy"
  //     selected={startDate}
  //     onChange={onChange}
  //     startDate={startDate}
  //     endDate={endDate}
  //     selectsRange
  //     // inline
  //     className="date-picker"
  //     popperPlacement="left-start"
  //   />
  // );
  // const onEntered = (event) => {
  //   console.log(event);
  // };

  // const onChange = (dates) => {
  //   const [startDate, endDate] = dates;
  //   console.log(startDate, endDate);
  // };

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
