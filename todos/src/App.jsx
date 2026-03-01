import React, { useState } from 'react'

const App = () => {
  const [input, setInput] = useState("");
  const [todoList , setTodoList] = useState([]);
  setTodoList{
    id:1,
    input:react,
    completed:false
  }
  return (
   <>
   <input className='border-white' value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
   <button>Add</button>
   {
    t
   }
   </>
  )
}

export default App