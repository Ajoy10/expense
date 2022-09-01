import { Icon } from "@iconify/react";
import React from "react";

import "../styles/ActionButtons.scss";

export default function ActionButtons({
  onAddClickHandler,
  onEditClickHandler,
  editMode,
  onEditCancelClickHandler,
}) {
  return (
    <div className="cmp-action-buttons">
      <button
        className="action-button"
        id="add-btn"
        onClick={() => onAddClickHandler()}
      >
        <Icon icon="foundation:plus" />
      </button>

      <button
        className="action-button secondary"
        id="edit-btn"
        onClick={() => {
          onEditClickHandler(!editMode);
        }}
      >
        {editMode ? (
          <Icon icon="foundation:x" />
        ) : (
          <Icon icon="foundation:pencil" />
        )}
      </button>
    </div>
  );
}
