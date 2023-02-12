import "./styles/App.scss";
import ActionButtons from "./components/ActionButtons";
import TotalAmount from "./components/TotalAmount";
import EntryList from "./components/EntryList";
import { DataContext } from "./context/DataContext";
import EntryForm from "./components/EntryForm";
import { useState } from "react";
import MonthPicker from "./components/MonthPicker";
import { useContext } from "react";
import { Icon } from "@iconify/react";

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

  const { theme, ChangeTheme } = useContext(DataContext);

  try {
    return (
      <div className={"App " + theme}>
        <div className="stic">
          <div className="top-bar">
            <button
              id="theme-changer-btn"
              className="small-round-button"
              onClick={(e) => {
                ChangeTheme();
              }}
            >
              <Icon icon="foundation:contrast" />
            </button>
          </div>
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
      </div>
    );
  } catch (error) {
    return <>{error.toString()}</>;
  }
}

export default App;
