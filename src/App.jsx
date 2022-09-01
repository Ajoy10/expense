import "./styles/App.scss";
import ActionButtons from "./components/ActionButtons";
import TotalAmount from "./components/TotalAmount";
import EntryList from "./components/EntryList";

function App() {
  return (
    <div className="App">
      <div className="stic">
        <TotalAmount totalAmount={500} />
        <ActionButtons />
      </div>
      <EntryList
        entries={[
          { title: "olo", money: -1000 },

          { title: "Hello", money: 500 },
          { title: "Hello", money: -500 },
          { title: "Hello", money: 90 },
          { title: "Hello", money: -500 },
          { title: "Beo", money: 500 },
        ]}
      />
    </div>
  );
}

export default App;
