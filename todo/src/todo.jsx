import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim() === '') return;
    setTodos([...todos, todoText]);
    setTodoText('');
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-row justify-evenly gap-4 mb-4">
                <h1 className="text-xl text-white font-bold mb-4">ToDo List</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
                <input className="flex flex-row focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-60 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" placeholder="Add your activity for today" value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
                <button onClick={addTodo} className="ml-4 p-2 px-4 bg-sky-600 rounded-xl text-white">Add</button>
            </div>
            <tbody className="flex items-center justify-center mt-4">
                <tr>
                    <table className="w-full border border-gray-300 mt-2">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="py-3 px-4 text-left">Task</th>
                                <th className="py-3 px-4 text-left">Delete</th>
                            </tr>
                        </thead> 
                    </table>
                    <tbody>
                        {todos.map((todo, index) => (
                            <tr className="bg-white border border-gray-300">
                                <td className="py-3 px-4" key={index}>{todo}</td>
                                <td className="py-3 px-4">            
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold ml-2 px-3 py-1 rounded mt-4 gap-4" onClick={() => removeTodo(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </tr>
            </tbody>  
        </div>
    );
}

export default Todo;
