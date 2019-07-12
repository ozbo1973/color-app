import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

function MiniPalette({ classes, paletteName, id, colors, emoji }) {
  const displayColors = () =>
    colors.map((c, i) => (
      <div
        key={i}
        style={{ backgroundColor: c.color, height: "10px", width: "10px" }}
      />
    ));
  return (
    <div className={classes.root}>
      <div className={classes.colors}>{displayColors()}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "grey",
    display: "flex"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none",
    color: "black",
    fontSize: "1rem"
  },
  emoji: {}
};

export default withStyles(styles)(MiniPalette);
