import React, { Component } from "react";
import Slider from "rc-slider";
import { Select, MenuItem, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import "rc-slider/assets/index.css";
import "../styles/Navbar.css";

export default class Navbar extends Component {
  state = { format: "hex", open: false };

  onFormatChange = e => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleFormatChange(e.target.value);
  };

  handleOnClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { level, handleSlider } = this.props;
    const { format, open } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">ReactColorApp</a>
        </div>
        <div className="slider-container">
          <span className="slider-text">{`level: ${level}`}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={level < 100 ? 50 : 100}
              onAfterChange={handleSlider}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.onFormatChange}>
            <MenuItem value="hex">HEX-#ffffff</MenuItem>
            <MenuItem value="rgb">RGB-rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA-rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          message={
            <span id="message-id">{`Format now ${format.toUpperCase()}`}</span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          autoHideDuration={3000}
          onClose={this.handleOnClose}
          action={
            <IconButton
              onClick={this.handleOnClose}
              key="close"
              aria-label="Close"
              color="inherit"
            >
              <CloseIcon />
            </IconButton>
          }
        />
      </header>
    );
  }
}
