import React from "react";
import { Icon } from "@iconify/react";

export default function Entry({ entry, edit, onEditClick }) {
  let loss = false;
  if (entry.money < 0) {
    loss = true;
  }
  return (
    <div className={"cmp-entry" + (loss ? " loss" : "")}>
      <div className="entry-title">{entry.title}</div>
      {edit && (
        <div className="entry-edit">
          <button
            className="small-round-button"
            id="entry-edit-btn"
            onClick={(e) => {
              onEditClick(entry);
            }}
          >
            <Icon icon="fe:edit" />
          </button>

          <button className="small-round-button" id="entry-delete-btn">
            <Icon icon="fe:trash" />
          </button>
        </div>
      )}
      <div className="entry-money">
        <span id="rupees">₹</span> {Math.abs(entry.money)}
        <div className="entry-icon">
          {loss ? <Icon icon="fe:drop-down" /> : <Icon icon="fe:drop-up" />}
        </div>
      </div>
    </div>
  );
}
