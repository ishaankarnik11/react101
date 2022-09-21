import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, discription, amount }) => {
  let [title, setTitle] = useState(discription);

  let handleButtonClick = () => {
    setTitle("new title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">{title}</div>
      <div className="expense-item__amount">${amount}</div>
      <button onClick={handleButtonClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
