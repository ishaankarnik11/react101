// import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const data = [
    {
      id: 1,
      date: "2022-09-14",
      discription: "Icecream",
      amount: 10,
    },
    {
      id: 2,
      date: "2022-08-20",
      discription: "Insurance",
      amount: 289,
    },
    {
      id: 3,
      date: "2002-04-03",
      discription: "Vadapav",
      amount: 200,
    },
    {
      id: 4,
      date: "2022-08-22",
      discription: "Pizza",
      amount: 40,
    },
  ];

  const newExpenseHandler = data =>{
    console.log("inside app.js");
    console.log(data);
  }

  return (
    <div className="App">
      <NewExpense onAddNewExpense={newExpenseHandler} />
      <Card className="container">
        {data.map((data) => {
          return (
            <ExpenseItem
              key={data.id}
              date={data.date}
              discription={data.discription}
              amount={data.amount}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default App;
