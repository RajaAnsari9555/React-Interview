import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then((data) => {
        console.log(data.users);
        setUsers(data.users);
      });
  }, []); // ✅ dependency array correctly placed

  const filtered = users.filter(user =>
    user.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <ul>
        {search == "" ?(
          <p>Type Something to search ...</p>
        ):(
            filtered.map(user => (
          <li key={user.id}>{user.firstName}</li>
        ))
        )}
        
        
      </ul>
    </div>
  );
}

export default App;