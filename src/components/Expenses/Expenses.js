import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses= (props) => {
   const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    //function to filter the expense list by year
const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
});

//dynamic updates based on user input
    return (
        <div>
            <Card className="expenses" >
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id}
                        title ={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
    
/* hard coded example of expenses
    return (
        <div>
            <Card className="expenses" >
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
            </Card>
        </div>
    );
*/
}

export default Expenses;