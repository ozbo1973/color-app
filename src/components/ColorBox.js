import React from "react";
import "../styles/ColorBox.css";

export default function ColorBox({ name, color }) {
  return (
    <div className="ColorBox" style={{ backgroundColor: color }}>
      <div className="copy-content">
        <div className="ColorBox-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">More</span>
    </div>
  );
}
