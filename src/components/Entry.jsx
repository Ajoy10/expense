import React from "react";
import { Icon } from "@iconify/react";

export default function Entry({ entry }) {
  let loss = false;
  if (entry.money < 0) {
    loss = true;
  }
  return (
    <div className={"cmp-entry" + (loss ? " loss" : "")}>
      <div className="entry-title">{entry.title}</div>
      <div className="entry-money">
        <span id="rupees">₹</span> {Math.abs(entry.money)}
        <div className="entry-icon">
          {loss ? <Icon icon="fe:drop-down" /> : <Icon icon="fe:drop-up" />}
        </div>
      </div>
    </div>
  );
}
