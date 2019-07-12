import React from "react";
import { Route, Switch } from "react-router-dom";
import paletteColors from "./seedColors";
import { generatePalette } from "./helpers/colorHelper";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";

function App() {
  const findPalette = id =>
    generatePalette(paletteColors.filter(p => p.id === id)[0]);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={paletteColors} />}
      />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette palette={findPalette(routeProps.match.params.id)} />
        )}
      />
      <Route render={() => <h1>No Path</h1>} />
      {/* <div className="App">
      <Palette palette={generatePalette(paletteColors[4])} />
    </div> */}
    </Switch>
  );
}

export default App;
