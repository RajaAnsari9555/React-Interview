import React, { useState } from 'react'

const ShowHideandPassword = () => {
     const[show , setShow] = useState(false);
   

  return (
    <div>
        <input type={show ? "text" :"password"}  placeholder='Enter you password'/>
        <button onClick={() =>setShow(!show)}>{show ? "hide" :"show"}</button>
    </div>
  )
}

export default ShowHideandPassword