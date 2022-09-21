import React from 'react'

const ExpenseDate = ({date}) => {
    const expenseDate = new Date(date);
  return (
    <div className="expense-item__date">
        <div className="month">{expenseDate.toLocaleString("en-IN", {month:"long"})}</div>
        <div className="year">{expenseDate.toLocaleString("en-IN", {year:"numeric"})}</div>
        <div className="day">{expenseDate.toLocaleString("en-IN", {day:"2-digit"})}</div>
        </div>
  )
}

export default ExpenseDate