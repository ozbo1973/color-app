import React from "react";
import paletteColors from "./seedColors";
import { generatePalette } from "./helpers/colorHelper";
import Palette from "./components/Palette";

function App() {
  console.log(generatePalette(paletteColors[3]));
  return (
    <div className="App">
      <Palette {...paletteColors[3]} />
    </div>
  );
}

export default App;
