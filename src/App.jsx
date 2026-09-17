import './App.css'
import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'
import { collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../lib/firebase.ts'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (formData) => {
    setTodos(previousTodos => [...previousTodos, 
      {id: crypto.randomUUID(), text: formData.get("todo"), priority: formData.get("priority"), editEnabled: false}]);
  }

  const deleteTodo = (id) => {
    setTodos(previousTodos => [...previousTodos.filter(todo => todo.id !== id)]);
  }
  
  const editTodo = (id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, editEnabled: !todo.editEnabled} : todo));
  }

  const saveTodo = (formData) => {
    setTodos(todos => todos.map(todo => todo.id === formData.get("id") ? 
    {...todo, text: formData.get("todo"), priority: formData.get("priority"), editEnabled: false} : todo));
  };

  const sortTodo = () => {
    setTodos(previousTodos => [...previousTodos.sort((a, b) => a.priority - b.priority)]);
  }

  return (
    <div className="container-fluid px-5 py-2">
      <h1>Very Simple Todo App</h1>
      <h5 className="py-2 border-bottom">Track all of the things</h5>
      <div className="pt-2 row align-items-start">
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} saveTodo={saveTodo} sortTodo={sortTodo}/>
      </div>
    </div>
  )
}

export default App
