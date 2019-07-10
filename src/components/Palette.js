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
      <ColorBox background={color[format]} name={color.name} />
    ));

  render() {
    const { level, format } = this.state;
    return (
      <div className="Palette">
        <Navbar
          level={level}
          handleSlider={this.handleSlider}
          handleFormatChange={this.handleFormatChange}
        />
        <div className="Palette-colors">{this.displayColorBoxes(format)}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
