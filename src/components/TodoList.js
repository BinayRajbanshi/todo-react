import React from 'react'
// components
import Todo from './Todo'

export default function TodoList(props) {
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
          {props.filteredTodos.map(todo=>(
           <Todo key={todo.id}
            text = {todo.text} 
            todos = {props.todos}
            setTodos = {props.setTodos}
            todo = {todo}
            />
          ))}
        
        </ul>
    </div>
  )
}
