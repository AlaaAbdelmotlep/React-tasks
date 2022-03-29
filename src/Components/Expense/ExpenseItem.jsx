// extract useState function from react
import React , { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  // const returnedValue = useState(props.title)
  // console.log(returnedValue) [intilaValue, setterFun]

  /*
  props.title is inital value for vraiable to track on it
  [] is destructing for returing form useState
  title is pointer to managed value
  setTitle is setter function
  */

  // const [title, setTitle] = useState(props.title)

  // change react elem value
  // let title = props.title;

  // const clickHandeler = () => {
  //   // console.log('KosOmek')
  //   // No thing will happenm ckeck how comp is excute
  //   // title = "check if title changed";
  //   // setTitle => pass to it new value
  //   setTitle('Updated')
  //   // Not working like that => title = 'Updated'
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandeler}>change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
