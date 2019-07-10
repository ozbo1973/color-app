import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/Navbar.css";

export default function Navbar({ level, handleSlider }) {
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="/">ReactColorApp</a>
      </div>
      <div className="slider-container">
        <span className="slider-text">{`level: ${level}`}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={level < 100 ? 50 : 100}
            onAfterChange={handleSlider}
          />
        </div>
      </div>
    </header>
  );
}
