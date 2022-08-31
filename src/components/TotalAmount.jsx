import React from "react";
import { Icon } from "@iconify/react";
import "./styles/TotalAmount.scss";

export default function TotalAmount({ totalAmount }) {
  let loss = false;
  if (totalAmount < 0) {
    loss = true;
  }
  return (
    <div className={"cmp-total-amount" + (loss ? " loss" : "")}>
      <div id="total-amount-text">
        <span id="rupees">₹</span> {Math.abs(totalAmount)}
      </div>
      <div id="total-amount-icon">
        {loss ? <Icon icon="fe:drop-down" /> : <Icon icon="fe:drop-up" />}
      </div>
    </div>
  );
}
