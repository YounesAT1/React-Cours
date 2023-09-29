import React, { Component } from "react";

class DisplayComponent extends Component {
  render() {
    return (
      <div>
        <h2>Selected Words</h2>
        <ul>
          {this.props.selectedWords.map((word) => (
            <li>{word}</li>
          ))}
        </ul>
        {this.props.selectedWords.length === 0 && <p>No words selected</p>}
      </div>
    );
  }
}

export default DisplayComponent;
