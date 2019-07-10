import React from "react";
import paletteColors from "./seedColors";
import { generatePalette } from "./helpers/colorHelper";
import Palette from "./components/Palette";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(paletteColors[4])} />
    </div>
  );
}

export default App;
