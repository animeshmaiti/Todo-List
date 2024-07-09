import React, { useState } from "react";
import Card from "../UI/Card";
import Expensesfilter from "./Expensefilter";
import "./Expense.css";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <Expensesfilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filterExpenses}/>
        <ExpenseList items={filterExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
