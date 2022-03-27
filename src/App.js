import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount:294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e2',
      title: 'House Payment',
      amount:978.33,
      date: new Date(2021, 2, 1)
    },
    {
      id: 'e3',
      title: 'New TV',
      amount:788.99,
      date: new Date(2021, 4, 12)
    },
    {
      id: 'e4',
      title: 'Dog Food',
      amount:67.99,
      date: new Date(2021, 4, 12)
    },
  ];

  //function to help pass the info up from NewExpense
  const addExpenseHandler = expenses => {
    console.log('In App.js');
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
