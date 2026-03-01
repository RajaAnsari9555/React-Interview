import React, { useState } from 'react'

const App = () => {

  const initialUsers = [
    { id: 1, name: "Rahul", age: 25 },
    { id: 2, name: "Anjali", age: 22 },
    { id: 3, name: "Vikram", age: 28 },
    { id: 4, name: "Priya", age: 24 },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [sortorder, setSortOrder] = useState("");

  let filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  const Deletebtn = (id) => {
    setUsers(users.filter(u => u.id !== id));
  }
  const handleSort =(order)  => {
    setSortOrder(order);
  }

  if(sortorder === "asc") {
      filteredUsers = [...filteredUsers].sort((a ,b) => a.age - b.age)
  }
  
  if(sortorder === "desc") {
    filteredUsers =[...filteredUsers].sort((a,b) => b.age- a.age)
  }
  return (
    <div>
      <h1>User Details</h1>

      <input
        type="text"
        value={search}
        placeholder="Search user..."
        onChange={(e) => setSearch(e.target.value)}
      />
       
       <br />
       <br />
       <button onClick={() => handleSort("asc")}>Sort Asc</button>
        <button onClick={() => handleSort("desc")}>Sort Desc</button>
     <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.age}
            <button onClick={() => Deletebtn(user.id)}> Delete</button>
          </li>
        ))}
      </ul>
      <p>Total User: {filteredUsers.length}</p>
    </div>
  )
}

export default App;