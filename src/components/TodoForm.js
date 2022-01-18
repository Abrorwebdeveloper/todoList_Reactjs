import React, {useState}  from 'react'

function TodoForm({addTodo}) {

  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  })

  function handleTaskInputChange(e) {
    setTodo({...todo, task: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()

    if(todo.task.trim()) {
      addTodo({...todo, id: Date.now()})
    }

    setTodo({...todo, task: ""})
  }
    return (
        <form
          onSubmit={handleSubmit}
          className='form-control d-flex'
        >
          <input 
            className='w-100'
            type="text"
            placeholder="Add todo"
            value={todo.task}
            onChange={handleTaskInputChange}
          />
          <button className='btn btn-primary w-100'>Add todo</button>   
        </form>
    )
}

export default TodoForm
