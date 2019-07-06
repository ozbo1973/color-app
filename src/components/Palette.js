import React, { Component } from "react";
import ColorBox from "./ColorBox";

export default class Palette extends Component {
  displayColorBoxes = () =>
    this.props.colors.map(color => <ColorBox {...color} />);

  render() {
    const paletteStyle = { height: "100vh" };
    const paletteColorsStyle = { height: "80%" };
    return (
      <div className="Palette" style={paletteStyle}>
        <h1>Palette Component</h1>
        {/* navbar for palette */}
        <div className="Palette-colors" style={paletteColorsStyle}>
          {this.displayColorBoxes()}
        </div>
        {/* footer goes here */}
      </div>
    );
  }
}
