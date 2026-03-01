import React, { useState } from 'react'
import ShowHideandPassword from './showHideandPassword'

const App = () => {
  const [isOn , setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn)
  }
  return (

    <>
    <ShowHideandPassword/>
    <div style={{textAlign:"center" , marginTop:"100px"}}>
      <h1>React Toggle button</h1>

      <button 
      onClick={handleToggle}
      style={{
        padding:"10px  20px",
        fontSize:"18px",
        backgroundColor:isOn ? "green" :"gray",
        color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
      }}
      >
      {isOn ? "ON" :"OFF"}
      </button>
      <p>status: {isOn ? "Button is on" :"Button is Of"}</p>
    </div>
    </>
    
  )
}




export default App