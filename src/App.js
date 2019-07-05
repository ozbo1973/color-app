import React from "react";
import paletteColors from "./seedColors";
import Palette from "./components/Palette";

function App() {
  return (
    <div className="App">
      <Palette {...paletteColors[2]} />
    </div>
  );
}

export default App;
