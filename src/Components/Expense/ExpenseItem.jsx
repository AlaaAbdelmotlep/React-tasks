import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  //   const expenseData = new Date(2021, 2, 18);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 250.5;
  //   console.log(props)

  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        {/* date Object can't display as html plain text */}
        {/* <div>{expenseData.toISOString()}</div> */}
        <div className="expense-item__description ">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
  );
}

export default ExpenseItem;
