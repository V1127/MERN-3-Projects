// App.js
import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import './App.css';

function App() {
  const initialBackgroundColor = 'white';
  const [backgroundColor, setBackgroundColor] = useState(initialBackgroundColor);
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'pink',
    'purple',
    'brown',
  ];

  const handleColorChange = (selectedColor) => {
    setBackgroundColor(selectedColor);
  };

  return (
    <div className="app-container" style={{ backgroundColor }}>
      <div className="app-content">
        <h1>Color Picker</h1>
        <ColorPicker colors={colors} onColorChange={handleColorChange} />
      </div>
    </div>
  );
}

export default App;
