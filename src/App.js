import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e2',
      title: 'House Payment',
      amount: 946.32,
      date: new Date(2021, 2, 1)
    },
    {
      id: 'e3',
      title: 'New TV',
      amount: 788.98,
      date: new Date(2021, 4, 12)
    },
    {
      id: 'e4',
      title: 'Dog Food',
      amount: 67.99,
      date: new Date(2021, 4, 12)
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[1].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;
