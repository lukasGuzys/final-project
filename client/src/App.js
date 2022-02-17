import React, { useState, useEffect } from "react"
import './App.css';
import Axios from "axios";

function App() {

  const [clientName, enterClientName] = useState("");
  const [clientSurname, enterClientSurname] = useState("");
  const [clientEmail, enterClientEmail] = useState("");
  const [clientAge, enterClientAge] = useState(0);

  const [clientList, enterClientList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:8080/list").then((response) => {
      enterClientList(response.data)
    })
  }, [])

  const addToList = () => {
    Axios.post("http://localhost:8080/add",
      {
        clientName: clientName,
        clientSurname: clientSurname,
        clientEmail: clientEmail,
        clientAge: clientAge
      })
  };

  return (
    <div className="App">
      <div className="card">
      <h1>Clients List</h1>

      <label>Name: </label>
      <input type="text" onChange={(event) => { enterClientName(event.target.value) }} />
      <label>Surname: </label>
      <input type="text" onChange={(event) => { enterClientSurname(event.target.value) }} />
      <label>Email: </label>
      <input type="text" onChange={(event) => { enterClientEmail(event.target.value) }} />
      <label>Age: </label>
      <input type="number" onChange={(event) => { enterClientAge(event.target.value) }} />
      <button onClick={addToList}>Add Client</button>
      <h1>Clients List</h1>
      </div>

      {clientList.map((val, key) => {
        return (
        <div className="list" key={key}>
          <h1>Name: {val.clientName}</h1>
          <h1>Surname: {val.clientSurname}</h1>
          <h1>Email: {val.clientEmail}</h1>
          <h1>Age: {val.clientAge}</h1>
          
        </div>
        );
      })}
    </div>
  );
}

export default App;
