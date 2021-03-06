import React, { useState, useEffect } from "react"
import './App.css';
import Axios from "axios";

function App() {

  const [clientName, enterClientName] = useState("");
  const [clientSurname, enterClientSurname] = useState("");
  const [clientEmail, enterClientEmail] = useState("");
  const [clientAge, enterClientAge] = useState(0);

  const [newClientName, enterNewClientName] = useState("");
  const [newClientSurname, enterNewClientSurname] = useState("");
  const [newClientEmail, enterNewClientEmail] = useState("");
  const [newClientAge, enterNewClientAge] = useState("");

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
      });
  };

  const updateClient = (id) => {
    Axios.put("http://localhost:8080/update", {
      id: id,
      newClientName: newClientName,
      newClientSurname: newClientSurname,
      newClientEmail: newClientEmail,
      newClientAge: newClientAge,
    })
  }

  const deleteClient = (id) => {
    Axios.delete(`http://localhost:8080/delete/${id}`)
  };

  const year = new Date().getFullYear();
  return (
    <div className="App">
      <div className="card">
        <h1>Clients List</h1>

        <label>Name: </label>
        <input type="text" onChange={(event) => { enterClientName(event.target.value) }} />
        <label>Surname: </label>
        <input type="text" onChange={(event) => { enterClientSurname(event.target.value) }} />
        <label>Email: </label>
        <input type="email" onChange={(event) => { enterClientEmail(event.target.value) }} />
        <label>Age: </label>
        <input type="number" onChange={(event) => { enterClientAge(event.target.value) }} />
        <button onClick={addToList}>Add Client</button>
        <h1>Clients List</h1>
      </div>

      {clientList.map((val, key) => {
        return (
          <div className="list" key={key}>

            <div className="list-box">
              <h1>Name: {val.clientName}</h1>
              <input type="text"
                placeholder="Change Name"
                onChange={(event) => {
                  enterNewClientName(event.target.value)
                }}
              />
            </div>

            <div className="list-box">
              <h1>Surname: {val.clientSurname}</h1>
              <input type="text"
                placeholder="Change Surname"
                onChange={(event) => {
                  enterNewClientSurname(event.target.value)
                }}
              />
            </div>

            <div className="list-box">
              <h1>Email: {val.clientEmail}</h1>
              <input type="email"
                placeholder="Change Email"
                onChange={(event) => {
                  enterNewClientEmail(event.target.value)
                }}
              />
            </div>

            <div className="list-box">
            <h1>Birth Date: {year - val.clientAge}</h1>
            <input type="number"
              placeholder="Change Age"
              onChange={(event) => {
                enterNewClientAge(event.target.value)
              }}
            />
            </div>

            <button className="update-btn" onClick={() => updateClient(val._id)}>Update</button>

            <button onClick={() => deleteClient(val._id)}
              className="delete-btn">Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
