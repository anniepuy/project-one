import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

//adding function to pass values from expense for passing up to newexpense
const NewExpense = (props) => {
//useState for button
    const[isEditing, setIsEditing] = useState(false)

    const onSaveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    //function for setting the button selection state
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDateHandler}/>}
        </div>
    )
};

export default NewExpense;