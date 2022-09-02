import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "../styles/EntryForm.scss";

export default function EntryForm({
  show = false,
  entry = null,
  entryCloseHandler,
}) {
  if (!show) {
    return <></>;
  }

  return (
    <div className="cmp-entry-form">
      <Form entry={entry} entryCloseHandler={entryCloseHandler} />
    </div>
  );
}

function Form({ entry, entryCloseHandler }) {
  const { AddEntry, UpdateEntry } = useContext(DataContext);

  const [title, setTitle] = useState(entry ? entry.title : "");
  const [moneyInput, setMoneyInput] = useState(entry ? entry.money : "");
  const [money, setMoney] = useState(entry ? entry.money : 0);

  const titleElement = useRef(null);
  const moneyElement = useRef(null);

  const Validate = (e) => {
    if (title.trim() === "") {
      e.preventDefault();
      titleElement.current.focus();
      return false;
    } else if (money !== parseFloat(moneyInput)) {
      e.preventDefault();
      moneyElement.current.focus();

      return false;
    }

    return true;
  };

  useEffect(() => {
    titleElement.current.focus();
  }, []);

  return (
    <div className="cmp-form">
      <form
        autocomplete="off"
        onSubmit={(e) => {
          Validate(e);
        }}
      >
        <div className="input-group">
          <div className="label">Title</div>
          <input
            ref={titleElement}
            type="text"
            name="title"
            id="form-title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <div className="label">Money</div>
          <input
            ref={moneyElement}
            type="number"
            name="money"
            id="form-money"
            value={moneyInput}
            onChange={(e) => {
              setMoneyInput(e.target.value);
              const parsed = parseFloat(e.target.value);
              if (!Object.is(NaN, parsed)) setMoney(parsed);
            }}
          />
        </div>

        <div className="button-group">
          {entry ? (
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();

                if (!Validate(e)) return;
                UpdateEntry(entry.id, title, money);
                entryCloseHandler();
              }}
            >
              Update
            </button>
          ) : (
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();

                if (!Validate(e)) return;
                AddEntry(title, money);
                setMoney(0);
                setMoneyInput("");
                setTitle("");
                titleElement.current.focus();
              }}
            >
              Add
            </button>
          )}
          <button
            className="button secondary"
            onClick={(e) => {
              e.preventDefault();
              entryCloseHandler();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
