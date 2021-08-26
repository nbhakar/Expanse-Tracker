import React, { useState } from "react";

import "./ExpanseForm.css";

function ExpanseForm(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  function titleChangeHandler(event) {
    setNewTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setNewAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setNewDate(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();
    const expanseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };
    props.onGetNewExpanse(expanseData);
    setNewTitle("");
    setNewDate("");
    setNewAmount(""); 

  }
  function cancelHandler(){
    props.onCancel(false)
  }
  return (
    <form onSubmit={submitForm}>
      <div className="row form-box">
        <div className="col-4 form-title">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="col-4 form-amount">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.1"
            value={newAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="col-4 form-date">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31 "
            value={newDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="form-button">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Confirm Add</button>
      </div>
      
    </form>
  );
}

export default ExpanseForm;
