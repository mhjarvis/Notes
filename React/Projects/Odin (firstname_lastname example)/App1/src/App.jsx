import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { v4 as uuid } from "uuid";
import "./App.css";

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const [person, setPerson] = useState({ name: '', age: 100 });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  return (
    <>
      <label>
        First Name:
          <input
            type='text'
            value={firstName}
            onChange={handleFirstNameChange}
          />
      </label>
      <br/>
      <label>
        Last Name:
          <input
            type='text'
            value={lastName}
            onChange={handleLastNameChange}
          />
      </label>
      <h1>{firstName} {lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export default App;