import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // set useState to empty string becuse when component render it will be empty
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // useState({here u can groub ur state})
  // manage mulit state in one state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (e) => {
    // console.log("title changed")
    // console.log(e)
    // return object have info about event
    // e.target.value
    // console.log(e.target.value);
    setEnteredTitle(e.target.value);
    // Now we ensure that value is stored in some where
    // and can fetch it during life cycel
    // setUserInput({
    //   enteredTitle: e.target.value,
    // other date will get lost
    // we need to destructure object
    // ...userInput,
    // we override enteredTitle
    // enteredTitle: e.target.value
    // here we depend on prev state to update one state
    // whenEver ur state updated depending on prev state
    // u need to use this approch => to make sure that u tarcked on leatest updated snapshot
    // setUserInput ((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredTitle: e.target.value
    //     }
    // })
    // });
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData)
    props.onSaveExpenseData(expenseData);
    // here we lift state up to newExpense component
    // to clear userInput => Must add value={} to input filed
    // 2-way data binding => we listen on changeState & change input value
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
