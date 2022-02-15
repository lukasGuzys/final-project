import React from "react"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Clients List</h1>

      <label>Name: </label>
      <input type="text"/>
      <label>Surname: </label>
      <input type="text"/>
      <label>Email: </label>
      <input type="email"/>
      <label>Age: </label>
      <input type="number"/>
      <button>Add Client</button>
    </div>
  );
}

export default App;
