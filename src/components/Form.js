

import React from 'react'

export default function Form({setInputText , inputText, setTodos , todos , setStatus}) {
  const inputTextHandler = (e) => {
     setInputText(e.target.value)
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText , completed: false , id: Math.random()*1000}
    ])
    setInputText('')
  };

  
  const handleStatus = (e) => {
    setStatus(e.target.value)
  }
  return (
      <form>
          <div className="wrapper">
            <input type="text" className='todo-input'
            value={inputText}
            onChange={inputTextHandler}
            />
            <button onClick={submitTodoHandler} className='todo-button' type='submit' >
            <i className='fas fa-plus-square'></i>
            </button>
          </div>
          <div className='select' onChange={handleStatus}>
              <select name="todos" className='filter-todo'>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
          </div>
      </form>
    
  )
}
