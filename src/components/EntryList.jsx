import React from "react";
import "../styles/EntryList.scss";
import Entry from "./Entry";

export default function EntryList({ entries }) {
  return (
    <div className="cmp-entry-list">
      {entries ? <></> : <div id="no-entry">No entries found!</div>}
      {entries &&
        entries.map((item) => {
          return <Entry entry={item} />;
        })}
    </div>
  );
}
