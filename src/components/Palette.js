import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

import "../styles/Palette.css";

export default class Palette extends Component {
  state = { level: 500, format: "hex" };

  handleSlider = level => {
    this.setState({ level });
  };

  handleFormatChange = val => {
    this.setState({ format: val });
  };

  displayColorBoxes = format =>
    this.props.palette.colors[this.state.level].map(color => (
      <ColorBox key={color.id} background={color[format]} name={color.name} />
    ));

  render() {
    const { paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;
    console.log(paletteName);
    return (
      <div className="Palette">
        <Navbar
          level={level}
          handleSlider={this.handleSlider}
          handleFormatChange={this.handleFormatChange}
        />
        <div className="Palette-colors">{this.displayColorBoxes(format)}</div>
        <footer className="Palette-footer">
          <span>{paletteName}</span> <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
