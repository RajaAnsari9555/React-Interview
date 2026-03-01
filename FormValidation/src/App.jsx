

import {useState} from "react";
const App = () => {
 const [username, setUsername] = useState("");
 const [email , setEmail] = useState("");
 const [error ,setError] = useState("");

 const handleSubmit = (e) => {
   e.preventDefault();

   if(username == ""){
  setError("please Enter you username")
  return
 } 
 else if(!email.includes("@")){
  setError("Invalid email");
  return
 }  
 setError("");
  alert("form submitted successfully")
 };
 
  
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" placeholder='enter username' value={username} onChange={(e) =>setUsername(e.target.value)}/>
        {error && <p style={{color:"red"}}>{error}</p>}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      {error && <p style={{color:"red"}}>{error}</p>}
      <button type="submit">submit</button>
      </form>
      
    </div>
  )
}

export default App