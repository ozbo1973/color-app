import React from "react";
import { Link } from "react-router-dom";

export default function PaletteList({ palettes }) {
  const displayPalettes = () =>
    palettes.map(p => (
      <div key={p.id}>
        <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
      </div>
    ));
  return (
    <div className="PaletteList">
      <h1>React Colors</h1>
      <div>{displayPalettes()}</div>
    </div>
  );
}
