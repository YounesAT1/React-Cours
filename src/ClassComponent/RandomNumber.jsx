import React from "react";

class RandomNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      result: "",
      counter: 0,
      randomNumber: Math.floor(Math.random() * 10),
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleButtonClick = () => {
    const number = this.state.number;
    const randomNumber = this.state.randomNumber;

    if (number > randomNumber) {
      this.setState({
        result: "the number you've entred is high try again!!",
        counter: this.state.counter + 1,
        number: "",
      });
    } else if (number < randomNumber) {
      this.setState({
        result: "the number you've entred is smaller try again !!",
        counter: this.state.counter + 1,
        number: "",
      });
    } else {
      this.setState({
        result: `You've entred the correct number!! You tried ${this.state.counter} times!!`,
        number: "",
      });
    }
  };

  resetAll = () => {
    this.setState({
      number: 0,
      result: "",
      counter: 0,
      randomNumber: Math.floor(Math.random() * 10),
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="number">Enter a number :</label>
        <input
          type="number"
          id="number"
          name="number"
          value={this.state.number}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleButtonClick}>OK</button>
        <button onClick={this.resetAll}>Reset All</button>
        <p>Counts : {this.state.counter}</p>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default RandomNumber;
