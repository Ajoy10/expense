import { Icon } from "@iconify/react";
import React from "react";
import "../styles/ActionButtons.scss";

export default function ActionButtons() {
  return (
    <div className="cmp-action-buttons">
      <button className="action-button">
        <Icon icon="foundation:plus" />
      </button>

      <button className="action-button secondary">
        <Icon icon="foundation:pencil" />
      </button>
    </div>
  );
}
