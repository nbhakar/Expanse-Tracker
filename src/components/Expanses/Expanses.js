import react, { useState } from "react";

import "./Expanse.css";

import Card from "../UI/Card";
import ExpanseFilter from "./ExpanseFilter";
import ExpanseList from "./ExpanseList";
import ExpansesChart from "./ExpansesChart";

function Expanses(prop) {
  const [newYear, setNewYear] = useState("2020");

  function changeFilterHandler(newDate) {
    setNewYear(newDate);
  }

  const filterdExpanse = prop.items.filter((expanse) => {
    return expanse.date.getFullYear().toString() === newYear;
  });

return (
  <Card className="expanse-box">
    <ExpanseFilter selected={newYear} onChangeFilter={changeFilterHandler} />
    <ExpansesChart expanses={filterdExpanse}/>
    <ExpanseList items={filterdExpanse} />
  </Card>
);
}
export default Expanses;
