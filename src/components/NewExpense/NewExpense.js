import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

//adding function to pass values from explense for up to newexpense
const NewExpense = (props) => {
    const onSaveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
           <ExpenseForm onSaveExpenseData={onSaveExpenseDateHandler}/>
        </div>
    )
};

export default NewExpense;