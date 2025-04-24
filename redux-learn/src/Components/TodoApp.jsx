import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../Features/ToDo/TodoSlice';

function TodoApp() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo List</h2>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="New task" />
      <button onClick={() => { dispatch(addTodo(text)); setText(''); }}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
