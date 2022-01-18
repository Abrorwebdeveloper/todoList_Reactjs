import React, {useState, useEffect} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("react_todo"))

    if(storageItem) {
      setTodos(storageItem)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("react_todo", JSON.stringify(todos))
  }, [todos])

  function addTodo(todo) {
    setTodos([todo, ...todos])
  }


  function toggleCompleted(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  return (
    <div className="w-50 mx-auto">
      <header className="App-header">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
      </header>
    </div>
  );
}

export default App;
