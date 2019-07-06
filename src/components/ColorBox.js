import React from "react";

export default function ColorBox({ name, color }) {
  const style = {
    backgroundColor: color,
    width: "20%",
    height: "25%",
    display: "inline-block",
    position: "relative",
    cursor: "pointer"
  };
  return (
    <div className="ColorBox" style={style}>
      <span>More</span>
      <span>{name}</span>
    </div>
  );
}
