import "./ExpanseDate.css";

function ExpanseDate(prop) {
  const month = prop.date.toLocaleString("en-GB", { month: "long" });
  const day = prop.date.toLocaleString("en-GB", { day: "2-digit" });
  const year = prop.date.getFullYear();

  return (
    <div className = "expanse-date">
      <div className = "expanse-date_month">{month}</div>
      <div className = "expanse-date_year">{year}</div>
      <div className = "expanse-date_day">{day}</div>
    </div>
  );
}
export default ExpanseDate;
