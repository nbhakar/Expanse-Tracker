import React,{ useState } from "react";

import Expanses from "./components/Expanses/Expanses";
import NewExpanse from "./components/NewExpanse/NewExpanse";

const dummy_expanses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expanse , setExpanse] = useState(dummy_expanses);
  function addExpanseHandler(addExpanse){
    setExpanse(prevExpanse => {
      return [addExpanse , ...prevExpanse];
    })
  }
  return (
    <div>
      <NewExpanse onAddNewExpanse={addExpanseHandler} />
      <Expanses items = {expanse} />
    </div>
  );
}

export default App;
