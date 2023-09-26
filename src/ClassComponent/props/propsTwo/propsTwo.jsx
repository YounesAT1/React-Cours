import React, { Component } from "react";

class DisplayComponent extends Component {
  render() {
    const { selectedWords } = this.props;

    return (
      <div>
        <h2>Selected Words</h2>
        <ul>
          {selectedWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
        {selectedWords.length === 0 && <p>No words selected</p>}
      </div>
    );
  }
}

export default DisplayComponent;
