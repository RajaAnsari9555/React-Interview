import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [users ,setUser] = useState([]);
  useEffect(() => {
     fetch("https://dummyjson.com/users").then((res) => res.json())
     .then((data) => {
      console.log(data.users)
      setUser(data.users)

     })
  },[])
  return (
    <div>
      <ul>
  {users.map((user) => (
    <li key={user.id}>
      {user.firstName} {user.lastName} {user.middleName} {user.age}
    </li>
    
  ))}
</ul>
      
    </div>
  )
}

export default App