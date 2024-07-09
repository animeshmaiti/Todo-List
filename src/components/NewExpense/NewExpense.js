import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
let uniqueId = 2;
const NewExpense = (props) => {
  const savedataHandler = (enteredexpensedata) => {
    const expenseData = {
      ...enteredexpensedata,
      id: uniqueId++,
    };
    // console.log(expenseData);

    props.onAddExpense(expenseData);
  };
  return (
    <div>
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={savedataHandler} />
      </div>
    </div>
  );
};

export default NewExpense;
