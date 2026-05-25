import ExpenseList from '../Components/ExpenseList';
import { useState } from 'react';
import ExpenseForm from '../Components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);};

  const deleteExpense  = (id) => {
    const filteredExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(filteredExpenses);
  };

  const updateExpense = (id, newTitle, newAmount) =>{
    const updatedExpenses = expenses.map((expense) =>{
      if(expense.id === id){
        return {...expense, title:newTitle, amount: parseFloat(newAmount)};
      }
      return expense;
    });
    setExpenses(updatedExpenses);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Expense Tracker
        </h1>

        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} onDelete={deleteExpense} onUpdate= {updateExpense}/>


        <p className="mt-4 text-center text-gray-500">
          Total Expenses: {expenses.length}
          </p>
      </div>
    </div>
  );
}

export default App;
