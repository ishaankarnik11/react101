import React, { useState } from "react";

const ExpenseForm = (prop) => {
  const [userData, setUserData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  let handleUserInput = (e) => {
    // setUserData({ ...userData, [e.target.id]: e.target.value });
    setUserData((previous) => {
      return { ...previous, [e.target.id]: e.target.value };
    });
  };

  let handleSubmit = e =>{
    e.preventDefault();
    const data = {
      title: userData.title,
      amount: userData.amount,
      date: new Date(userData.date)
    }
    prop.onExpenseSubmit(data);
    setUserData({
      title: "",
      amount: "",
      date: "",
    });
  };


  return (
    <form action="" onSubmit={handleSubmit }>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__label" htmlFor="title">
            Title
          </label>
          <input
            onChange={handleUserInput}
            className="new-expense__input"
            type="text"
            id="title"
            value={userData.title}
          />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__label" htmlFor="amount">
            Amount
          </label>
          <input
            onChange={handleUserInput}
            className="new-expense__input"
            type="number"
            min={"0.01"}
            step="0.01"
            id="amount"
            value={userData.amount}
          />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__label" htmlFor="date">
            Date
          </label>
          <input
            onChange={handleUserInput}
            className="new-expense__input"
            type="date"
            id="date"
            min={"2021-01-01"}
            max="2023-01-01"
            value={userData.date}
          />
        </div>

        <div className="new-expense__actions">
          <button className="new-expense__submit" type="submit">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
