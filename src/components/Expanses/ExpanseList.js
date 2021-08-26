import ExpanseItem from "./ExpanseItem";

import "./ExpanseList.css"

function ExpanseList(prop) {
  
    if (prop.items.length === 0) {
        return <h2 className="list-empty">Found No Expanse</h2>
  }

  return (
    <ul className="expanse-list">
      {prop.items.map((expanse) => (
      <ExpanseItem
        key={expanse.key}
        title={expanse.title}
        amount={expanse.amount}
        date={expanse.date}
      />
      ))
      }
    </ul>
  );
}
export default ExpanseList;
