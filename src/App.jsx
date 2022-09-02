import "./styles/App.scss";
import ActionButtons from "./components/ActionButtons";
import TotalAmount from "./components/TotalAmount";
import EntryList from "./components/EntryList";
import DataContextProvider from "./context/DataContext";
import EntryForm from "./components/EntryForm";
import { useState } from "react";
import MonthPicker from "./components/MonthPicker";

function App() {
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editEntry, setEditEntry] = useState(null);
  const OpenEntryForm = () => {
    setShowEntryForm(true);
    setEditEntry(null);
  };

  const CloseEntryForm = () => {
    setShowEntryForm(false);
  };

  const TurnOnEditMode = (turnOn) => {
    setEditMode(turnOn);
  };

  const OpensEditEntry = (entry) => {
    setShowEntryForm(true);
    setEditEntry(entry);
  };

  return (
    <div className="App">
      <DataContextProvider>
        <div className="stic">
          <MonthPicker />
          <TotalAmount totalAmount={500} />
          <ActionButtons
            onAddClickHandler={OpenEntryForm}
            onEditClickHandler={TurnOnEditMode}
            editMode={editMode}
          />
        </div>
        <EntryList edit={editMode} onEntryEditClick={OpensEditEntry} />
        <EntryForm
          show={showEntryForm}
          entry={editEntry}
          entryCloseHandler={CloseEntryForm}
        />
      </DataContextProvider>
    </div>
  );
}

export default App;
