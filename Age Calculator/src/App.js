import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label htmlFor="birthdate">Enter your birthdate:</label>
      <input
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>You are {age} years old</p>}
    </div>
  );
}

export default App;
