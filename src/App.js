
import { useEffect, useState } from 'react';
import './App.css';
// components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // states
  const [inputText , setInputText] = useState('');
  const [todos , setTodos] = useState([]);
  const [status , setStatus] = useState('all')
  const [filteredTodos , setFilteredTodos] = useState([]);

  // funcions
    //  i want to run this get from local storage function only once when the page loads so

    useEffect(()=>{
      getLocalTodos();
    } , [])
  
  useEffect(()=>{
  filterHandler() ; saveLocalTodos();
 }, [ todos , status ])

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
    
  }
 
  // save data in local storage
  const saveLocalTodos = () => {
 
      localStorage.setItem("todos" , JSON.stringify(todos));
    
  }  
  
  // get data from local storage

   const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos' , JSON.stringify([]));
      }else{
        let todoLocal = JSON.parse(localStorage.getItem('todos'))
        console.log(todoLocal)
        setTodos(todoLocal)
      }
   }

  return (
    <div className="App">
     <header>
       <h1>My Todo List</h1>
     </header>
     {<Form  
     todos={todos}
     setTodos={setTodos} 
     inputText  ={inputText} 
     setInputText = {setInputText}
     setStatus = {setStatus}
     />}
     {<TodoList 
     inputText = {inputText}
     todos = {todos}
     setTodos ={setTodos}
     filteredTodos = {filteredTodos}
     />}
    </div>
  );
}

export default App;
