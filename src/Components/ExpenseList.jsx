import React from 'react';

function ExpenseList({ expenses, onDelete, onUpdate }) {
  return (
    <div className="mt-8 w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Recent Expenses</h3>
      <div className="space-y-3">
        {expenses.map((expense) => (
          <div 
            key={expense.id} 
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
          >
            <div>
              <p className="font-bold text-gray-800">{expense.title}</p>
              <p className="text-xs text-gray-400">{expense.date}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="font-semibold text-blue-600">
                ${expense.amount}
              </div>
              
              <button 
                onClick={() => onDelete(expense.id)} 
                className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs hover:bg-red-200 transition"
              >
                Delete
              </button>

              <button
                onClick={() => {
                  const newTitle = window.prompt("Please enter a new title:", expense.title);

                  if(newTitle){
                    const newAmount = window.prompt("Please enter a new amount:", expense.amount);

                    if(newAmount){
                      onUpdate(expense.id, newTitle, newAmount);
                    }
                  }
                }
              }
              className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-200 transition"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;