import React, { useContext } from "react";

import { DataContext } from "../context/DataContext";

import "../styles/EntryList.scss";
import Entry from "./Entry";

export default function EntryList({ edit, onEntryEditClick }) {
  const { entries, RemoveEntry } = useContext(DataContext);

  return (
    <div className="cmp-entry-list">
      {entries && entries.length > 0 ? (
        <></>
      ) : (
        <div id="no-entry">No entries found!</div>
      )}
      {entries &&
        entries.map((item) => {
          return (
            <Entry
              key={item.id}
              entry={item}
              edit={edit}
              onEditClick={onEntryEditClick}
              onDeleteClick={RemoveEntry}
            />
          );
        })}
    </div>
  );
}
