import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";

export default class ColorBox extends Component {
  state = { copied: false };

  handleCopy = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };

  render() {
    const { background, name } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.handleCopy}>
        <div className="ColorBox" style={{ backgroundColor: background }}>
          <div
            className={`copy-color-box ${copied && "show"}`}
            style={{ backgroundColor: background }}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!!</h1>
            <p>{`${name}: ${background}`}</p>
          </div>
          <div className="copy-content">
            <div className="ColorBox-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
