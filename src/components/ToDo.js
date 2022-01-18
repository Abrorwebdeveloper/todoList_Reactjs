import React from 'react'

function ToDo({todo, toggleCompleted, removeTodo}) {

    function handleCheckkbox(){
        toggleCompleted(todo.id)
    }
    function handleRemove() {
        removeTodo(todo.id)
    }
    return (
        <li className='d-flex align-items-center list-group-item'>
            <input class="form-check-input" type="checkbox" onClick={handleCheckkbox} />
            <span style={{
                textDecoration: todo.completed ? "line-through" : null
            }} className='text-center  w-100 fs-5'>{ todo.task }</span>
            <button className='btn btn-danger' onClick={handleRemove}>delete</button>
        </li>
    )
}

export default ToDo
