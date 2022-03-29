import Expense from "./Components/Expense/Expense";
import NewExpense from "./Components/newExpense/NewExpense";

const App = () => {
  const expense = [
    {
      id: 1,
      title: "Shopping",
      amount: 100,
      date: new Date(2020, 7, 12),
    },
    {
      id: 2,
      title: "Selling",
      amount: 100,
      date: new Date(2019, 8, 15),
    },
    {
      id: 3,
      title: "Buying",
      amount: 100,
      date: new Date(2023, 9, 22),
    },
  ];

  const addExpenseHandler = expense => {
    // console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expense} />
    </div>
  );
};

export default App;
