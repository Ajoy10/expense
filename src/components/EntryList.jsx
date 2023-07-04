import React, { useContext } from "react";

import { DataContext } from "../context/DataContext";

import "../styles/EntryList.scss";
import Entry from "./Entry";

export default function EntryList({ edit, onEntryEditClick }) {
  const { entries, allEntries, RemoveEntry } = useContext(DataContext);
  const blob = new Blob([JSON.stringify(allEntries)], { type: "text/json" });
  const url = URL.createObjectURL(blob);
  return (
    <div className="cmp-entry-list">
      <a download="debug.json" href={url}>
        Download json
      </a>
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
