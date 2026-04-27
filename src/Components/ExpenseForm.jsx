import React from 'react';
import { categories } from '../Interfaces/Expense';
import { useState } from 'react';

function ExpenseForm({onAddExpense}) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);

    const handleAddExpense = () => {
        if(title === "" || amount <= 0){
            alert("Please fill all the fields!")
            return;
        }

        const newEntry = {
            id: Math.random().toString(),
            title: title,
            amount: parseFloat(amount),
            date: new Date().toLocaleDateString()
        };

        onAddExpense(newEntry);

        setTitle("");
        setAmount(0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Add new Expense</h2>
      
      <div className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Title" 
          value = {title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded focus:outline-blue-500" 
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value = {amount}
          onChange = {(e)=> setAmount(e.target.value)}
          className="border p-2 rounded focus:outline-blue-500" 
        />

        <button 
        onClick={handleAddExpense}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
            Add Expense
            </button>
        </div>
    </div>
  );
}

export default ExpenseForm;