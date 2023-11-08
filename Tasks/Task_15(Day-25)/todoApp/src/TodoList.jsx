import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'notcompleted' });
  const [filter, setFilter] = useState('all'); // Default filter: Show all todos

  const addTodo = () => {
    if (newTodo.name.trim() !== '') {
      setTodos([...todos, { ...newTodo }]);
      setNewTodo({ name: '', description: '', status: 'notcompleted' });
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].editing = true;
    setTodos(updatedTodos);
  };

  const saveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].editing = false;
    setTodos(updatedTodos);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = newStatus;
    setTodos(updatedTodos);
  };

  const filterTodos = () => {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'completed') {
      return todos.filter((todo) => todo.status === 'completed');
    } else if (filter === 'notcompleted') {
      return todos.filter((todo) => todo.status === 'notcompleted');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Task Name"
        value={newTodo.name}
        onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newTodo.description}
        onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
      />
      <button onClick={addTodo}>Add Task</button>

      <div>
        <label>Show tasks:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notcompleted">Not Completed</option>
        </select>
      </div>

      <ul>
        {filterTodos().map((todo, index) => (
          <li key={index}>
            {todo.editing ? (
              <>
                <input
                  type="text"
                  value={todo.name}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                />
                <input
                  type="text"
                  value={todo.description}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                />
                <button onClick={() => saveTodo(index)}>Save</button>
              </>
            ) : (
              <>
                <div>{todo.name}</div>
                <div>Description: {todo.description}</div>
                <div>Status: {todo.status}</div>
                <select className='bg bg-primary'
                  value={todo.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                >
                  <option className="option" value="completed">Completed</option>
                  <option className="option" value="notcompleted">Not Completed</option>
                </select>
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
