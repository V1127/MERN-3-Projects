// ColorPicker.js
import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isColorListVisible: false,
      selectedColor: null,
    };
  }

  handleColorButtonClick = () => {
    this.setState({ isColorListVisible: !this.state.isColorListVisible });
  };

  handleColorClick = (color) => {
    this.setState({
      selectedColor: color,
      isColorListVisible: false,
    });

    // Pass the selected color to the parent component
    this.props.onColorChange(color);
  };

  render() {
    const { colors } = this.props;
    const { isColorListVisible, selectedColor } = this.state;

    return (
      <div className="color-picker">
        <button onClick={this.handleColorButtonClick}>Pick a color</button>
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-square"
                style={{ backgroundColor: color }}
                onClick={() => this.handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <p>Selected Color: {selectedColor}</p>
        )}
      </div>
    );
  }
}

export default ColorPicker;
