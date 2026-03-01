import React, { useEffect, useState } from 'react'
import "./App"

const App = () => {
const [input, setInput] = useState("")
  const [result, setResult] = useState([]);
  const [showResults, setShowResults] = useState(false);

  
const fetchData  = async() => {
  const data =  await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
  const json =await data.json();
  setResult(json?.recipes)
};


useEffect(() => {
  const timer = setTimeout(fetchData , 300);

  return () => {
    clearTimeout(timer)
  }
},[input])

  return (
    <div className=' flex  items-center justify-center min-h-screen '>
     
      <div className=''>
         <h1 className=" mt-2.5 text-2xl text-black">Autocomplete Search Bar</h1>
        <input type="text" className=' mt-3 w-[500px] p-3 border text-left border-gray-300 rounded' value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setShowResults(true) } onBlur={() => setShowResults(false) }/>

        <div className=' w-[500px] max-h-[500px]  border m-auto mt-2 rounded  overflow-y-scroll '>
       {showResults && result.map((r) =><span className=' block p-[3px] hover:bg-gray-200 cursor-pointer' key={r.id}>{r.name}</span> )}
        </div>
      </div>
    </div>
  )
}

export default App