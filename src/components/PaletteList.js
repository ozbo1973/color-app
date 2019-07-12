import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  displayPalettes = () =>
    this.props.palettes.map(p => <MiniPalette key={p.id} {...p} />);
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>{this.displayPalettes()}</div>
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    backgroundColor: "navy",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    color: "white",
    display: "flex",
    justifyContent: "space-between"
  },
  palettes: {
    marginTop: "10px",
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%"
  }
};

export default withStyles(styles)(PaletteList);
