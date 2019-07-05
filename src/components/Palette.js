import React, { Component } from "react";

export default class Palette extends Component {
  render() {
    return (
      <div className="Palette">
        <h1>Palette Component</h1>
        {/* navbar for palette */}
        <div className="Palette-colors">{/* color boxes */}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
