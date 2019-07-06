import React from "react";
import paletteColors from "./seedColors";
import Palette from "./components/Palette";

function App() {
  return (
    <div className="App">
      <Palette {...paletteColors[3]} />
    </div>
  );
}

export default App;
