import React,{useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expense';

const Dummy_expenses = [
  {
    id: 1,
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  }
];

const App = () => {
  const[expenses,setExpenses]=useState(Dummy_expenses);
  // console.log(expenses[0].id);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;