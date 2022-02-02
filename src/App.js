import React, {useState} from 'react';
import Expenses from './components/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title:'Vegetables',
    amount: 100,
    date: new Date (2021, 6, 21),
  },
  {
    id: 'e2',
    title:'Fruits',
    amount: 400,
    date: new Date (2021, 7, 9),
  },
  {
    id: 'e3',
    title:'Grocery',
    amount: 760,
    date: new Date (2021, 5, 1),
  },
  {
    id: 'e4',
    title:'Rent',
    amount: 1000,
    date: new Date (2021, 9, 2),
  },
  ];

function App() {
const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  
 const addExpenseHandler = (expense) =>
 {
    setExpenses([expense, ...expenses]);
 }
  return (
    <div className="App">
     <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}/>
   </div>
  );
}

export default App;
   