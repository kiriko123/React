import UserGreeting from "./UserGreeting"
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import List from "./List";

function App() {
  const fruits = [{ id: 1, name: "tao", calo: 90 },
  { id: 2, name: "cam", calo: 103 },
  { id: 3, name: "buoi", calo: 102 },
  { id: 4, name: "dua", calo: 103 }];
  const vegatables = [{ id: 5, name: "cachua", calo: 90 },
  { id: 6, name: "suplo", calo: 103 },
  { id: 7, name: "rau muon", calo: 102 },
  { id: 8, name: "dau que", calo: 103 }];
  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="fruits" /> : null}
      {vegatables.length > 0 ? <List items={vegatables} category="vegatables"/> : null}
    </>
  );
}

export default App;
