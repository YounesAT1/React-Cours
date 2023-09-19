import React from "react";

class PillFass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 10,
      message: "",
      randomChoice: Math.floor(Math.random() * 2),
      userChoice: "",
      faceId: "",
      pileId: "",
      isDisabled: false,
    };
  }

  handleFlip = (e) => {
    const userChoice = e.target.value;
    const randomChoice = this.state.randomChoice;

    if (userChoice === "pill") {
      if (randomChoice === 1) {
        this.setState(
          {
            score: this.state.score + 10,
            message: "You won ",
            pileId: "green",
            randomChoice: Math.floor(Math.random() * 2),
          },
          () => {
            setTimeout(() => {
              this.setState({ pileId: "" });
            }, 1000);
          }
        );
      } else {
        this.setState(
          (prevState) => ({
            score: prevState.score === 0 ? 0 : prevState.score - 10,
            message: "You lost ",
            pileId: "red",
            randomChoice: Math.floor(Math.random() * 2),
          }),
          () => {
            setTimeout(() => {
              this.setState({ pileId: "" });
            }, 1000);
          }
        );
      }
    }

    if (userChoice === "face") {
      if (randomChoice === 0) {
        this.setState(
          {
            score: this.state.score + 10,
            message: "You won ",
            faceId: "green",
            randomChoice: Math.floor(Math.random() * 2),
          },
          () => {
            setTimeout(() => {
              this.setState({ faceId: "" });
            }, 1000);
          }
        );
      } else {
        this.setState(
          (prevState) => ({
            score: prevState.score === 0 ? 0 : prevState.score - 10,
            message: "You lost ",
            faceId: "red",
            ranadomChoice: Math.floor(Math.random() * 2),
          }),
          () => {
            setTimeout(() => {
              this.setState({ faceId: "" });
            }, 1000);
          }
        );
      }
    }
  };

  restartGame = () => {
    this.setState({
      score: 10,
      message: "",
      randomChoice: Math.floor(Math.random() * 2),
      userChoice: "",
      faceId: "",
      pileId: "",
      isDisabled: false,
    });
  };

  render() {
    const { pileId, faceId, score } = this.state;
    const isGameOver = score === 100;

    return (
      <div>
        <label htmlFor="pillFace">Pill ou face </label>
        <button
          value="pill"
          onClick={this.handleFlip}
          id={pileId}
          disabled={this.state.isDisabled || isGameOver}
        >
          Pill
        </button>
        <button
          value="face"
          onClick={this.handleFlip}
          id={faceId}
          disabled={this.state.isDisabled || isGameOver}
        >
          Face
        </button>
        <p>Choice: {this.state.randomChoice}</p>
        <p>Score: {score}</p>
        <p>Message: {this.state.message}</p>
        {score <= 0 && <button onClick={this.restartGame}>Reset</button>}
        {isGameOver && (
          <div>
            <p>Congratulations, you won!</p>
            <button onClick={this.restartGame}>Restart</button>
          </div>
        )}
      </div>
    );
  }
}

export default PillFass;
