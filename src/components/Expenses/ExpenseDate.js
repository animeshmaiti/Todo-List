import './ExpenseDate.css'
import React from 'react';

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const Day = props.date.toLocaleString("en-IN", { day: "2-digit" });
  const year = props.date.getFullYear();
  return(
    <div className="expense-date" >
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day" >{Day}</div>
        <div className="expense-date__year" >{year}</div>
      </div>
  );
}

export default ExpenseDate;
