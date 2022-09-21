import React from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

const NewExpense = (prop) => {

  const expenseSubmitHandler = data => {
    // console.log("Inside newExpense")
    const expenseData = {...data, id: Math.random().toString()}
    // console.log(expenseData);
    prop.onAddNewExpense(expenseData);
  }

  return (
    <Card className='new-expense'>
    <ExpenseForm onExpenseSubmit={expenseSubmitHandler} />
    </Card>
  )
}

export default NewExpense