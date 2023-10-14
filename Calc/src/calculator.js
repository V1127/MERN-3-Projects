import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  // State to store the current input and result
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  // Define the button layout
  const buttonLayout = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', // Clear button
  ];

  return (
    <div className="calculator">
      <div className="calculator-screen">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="calculator-buttons">
        {buttonLayout.map((button) => (
          <div
            key={button}
            className={`calculator-button ${button === '=' ? 'calculator-operator' : ''}`}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
