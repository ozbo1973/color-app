import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

import "../styles/Palette.css";

export default class Palette extends Component {
  state = { level: 500 };

  handleSlider = level => {
    this.setState({ level });
  };

  displayColorBoxes = () =>
    this.props.palette.colors[this.state.level].map(color => (
      <ColorBox {...color} />
    ));

  render() {
    const { level } = this.state;
    return (
      <div className="Palette">
        <Navbar level={level} handleSlider={this.handleSlider} />
        <div className="Palette-colors">{this.displayColorBoxes()}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
