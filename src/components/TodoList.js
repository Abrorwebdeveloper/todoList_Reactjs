import React from 'react'
import ToDo from "./ToDo"

function TodoList({todos, toggleCompleted, removeTodo}) {
    return (
        <ul className='list-group'>
           {
               todos.map((todo) => (
                   <ToDo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
               ))
           } 
        </ul>
    )
}

export default TodoList
