import React from 'react'
import {useState} from "react";

const App = () => {
const [active, setActive] = useState("tab1")
  return (
    <div>
  <button onClick={() => setActive("tab1")}>Tab1</button>
  <button onClick={() => setActive("tab2")}>Tab2</button>
  {active === "tab1" && <div>
          <h2>Features of Tab 1</h2>
          <ul>
            <li>Dashboard Overview</li>
            <li>Statistics</li>
            <li>User Activity</li>
          </ul>

    </div>}
  {active === "tab2" &&  <div>
          <h2>Features of Tab 2</h2>
          <ul>
            <li>Profile Settings</li>
            <li>Account Details</li>
            <li>Privacy Options</li>
          </ul>
        </div>}
    </div>
  )
}

export default App