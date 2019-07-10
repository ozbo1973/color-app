import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
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
        <h1>Palette Component</h1>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={level < 100 ? 50 : 100}
            onAfterChange={this.handleSlider}
          />
        </div>
        <div className="Palette-colors">{this.displayColorBoxes()}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
