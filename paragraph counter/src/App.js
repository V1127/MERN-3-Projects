import React, { useState } from 'react';
import './App.css'; // Create a CSS file for your styling

function WordCounter() {
  const [text, setText] = useState('');

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(word => word !== '').length;
  };

  // Define inline styles as JavaScript objects
  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#008000', // Green color
  };

  return (
    <div className="word-counter">
      <h1 style={headerStyle}>Responsive Paragraph Word Counter</h1>
      <div className="input-container">
        <textarea
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <p className="counter-text">Number of Words: {countWords(text)}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="center-container">
        <WordCounter />
      </div>
    </div>
  );
}

export default App;
