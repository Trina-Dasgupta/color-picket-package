import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ColorPicker = ({ defaultColor, onChange }) => {
  const [color, setColor] = useState(defaultColor);

  const handleChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    if (onChange) {
      onChange(newColor);
    }
  };

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={handleChange}
        style={{ cursor: 'pointer', width: '50px', height: '50px' }}
      />
      <p>Selected Color: {color}</p>
    </div>
  );
};

ColorPicker.propTypes = {
  defaultColor: PropTypes.string,
  onChange: PropTypes.func,
};

ColorPicker.defaultProps = {
  defaultColor: "#000000",
  onChange: null,
};

export default ColorPicker;
