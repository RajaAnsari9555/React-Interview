import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([
   {
    id:1,
    text:"raja",
    completed:false,
   }
  ])

 const addTodo = () => {
  if(input.trim() == "") return;
  const item = {
    id:todolist.length +1,
    text:input,
    completed:true
  }
  setTodolist(prev => [...prev , item])
  setInput("")
 }

 const toggleCompeted= (id) =>  {
     setTodolist(
      todolist.map(todo => {
        if(todo.id == id){
          return{
            ...todo,
            completed : !todo.completed
          }
        }else{
          return todo
        }
      })
     )
 }

 const deleteTodo = (id) => {
  setTodolist(
    todolist.filter(
      todo => (todo.id !== id)
    )
  )
 }
 
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => addTodo()}>Add</button>
      <ul>
        {
          todolist.map(todo => <li key={todo.id}>
         <input type="checkbox" checked={todo.completed} onChange={() => toggleCompeted(todo.id)}/>
         <span className={todo.completed ?'strike-through' :""} >{todo.text}</span>
         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>)
        }
      </ul>
    </div>
  )
}

export default App