import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "../styles/MonthPicker.scss";

export default function MonthPicker() {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const [pickerOpen, setPickerOpen] = useState(false);

  const {
    month,
    year,
    PreviousYearHandler,
    NextYearHandler,
    MonthClickHandler,
  } = useContext(DataContext);

  return (
    <div className="cmp-month-picker">
      <div
        className="selected-month"
        onClick={(e) => {
          e.preventDefault();
          setPickerOpen((old) => !old);
        }}
      >
        <div id="text">
          {months[month]} {year}
        </div>
        <div id="drop-icon">
          <Icon icon="fe:drop-down" />
        </div>
      </div>

      {pickerOpen && (
        <div className="month-picker-wrapper">
          <div className="month-picker">
            <div className="year-cycle">
              <Icon
                icon="fe:arrow-left"
                onClick={(e) => {
                  e.preventDefault();
                  PreviousYearHandler();
                }}
              />
              <div id="year">{year}</div>
              <Icon
                icon="fe:arrow-right"
                onClick={(e) => {
                  e.preventDefault();
                  NextYearHandler();
                }}
              />
            </div>

            <div className="month-selector-wrapper">
              <div className="grid">
                {months.map((month, id) => {
                  return (
                    <div
                      className="cell month"
                      key={id}
                      onClick={(e) => {
                        e.preventDefault();
                        MonthClickHandler(id);
                        setPickerOpen(false);
                      }}
                    >
                      {month.substring(0, 3)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
