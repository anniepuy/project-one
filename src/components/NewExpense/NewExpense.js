import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = () => {
    const onSaveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    };

    return (
        <div className="new-expense">
           <ExpenseForm onSaveExpenseData={onSaveExpenseDateHandler}/>
        </div>
    )
};

export default NewExpense;