import React, { useState } from 'react';
import ColorPicker from 'react-color-picker-package'


function App() {
  const [color, setColor] = useState('#ff0000');

  return (
    <div>
      <h1>React Color Picker</h1>
      <ColorPicker defaultColor={color} onChange={(newColor) => setColor(newColor)} />
      <p>Selected Color: {color}</p>
    </div>
  );
}

export default App;
