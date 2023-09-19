import React from "react";

class ImageQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        { pic: "1.avif", correctAnswer: "Car", wrongAnswer: "Bike" },
        {
          pic: "airplane.png",
          correctAnswer: "Airplane",
          wrongAnswer: "Rocket",
        },
        { pic: "cat.jpg", correctAnswer: "Cat", wrongAnswer: "Fox" },
        {
          pic: "dog.jpg",
          correctAnswer: "Dog",
          wrongAnswer: "Your friend",
        },
      ],
      answerClicked: false,
      currentQuestionIndex: 0,
      score: 0,
      alert: "",
    };
  }

  handleAnswerClicking = (selectedAnswer) => () => {
    const currentQuestion =
      this.state.questions[this.state.currentQuestionIndex];
    const isCorrect =
      selectedAnswer === currentQuestion.correctAnswer ? true : false;
    this.setState({
      answerClicked: true,
      score: isCorrect ? this.state.score + 1 : this.state.score,
      selectedAnswer,
      isCorrect,
    });
    setTimeout(this.moveToNextQuestion, 1000);
  };

  moveToNextQuestion = () => {
    const nextQuestionIndex = this.state.currentQuestionIndex + 1;
    if (nextQuestionIndex < this.state.questions.length) {
      this.setState({
        currentQuestionIndex: nextQuestionIndex,
        answerClicked: false,
      });
    } else {
      this.setState({
        alert: "No questions left to answer",
      });
    }
  };

  restartGame = () => {
    this.setState({
      answerClicked: false,
      currentQuestionIndex: 0,
      score: 0,
      alert: "",
    });
  };

  render() {
    const currentQuestion =
      this.state.questions[this.state.currentQuestionIndex];

    return (
      <div className="image-quiz-container">
        <h5 className="score">Score: {this.state.score}</h5>
        <img src={currentQuestion.pic} alt="Question" className="quiz-image" />

        {!this.state.answerClicked && (
          <div className="answer-buttons">
            <button
              className="answer-button"
              onClick={this.handleAnswerClicking(currentQuestion.correctAnswer)}
            >
              {currentQuestion.correctAnswer}
            </button>

            <button
              className="answer-button"
              onClick={this.handleAnswerClicking(currentQuestion.wrongAnswer)}
            >
              {currentQuestion.wrongAnswer}
            </button>
          </div>
        )}

        {this.state.answerClicked && (
          <div className="answer-feedback">
            <h5 className={this.state.isCorrect ? "correct" : "wrong"}>
              {this.state.isCorrect ? "Correct!" : "Wrong!"}
            </h5>

            {this.state.alert && (
              <div>
                <h5 className="alert">{this.state.alert}</h5>
                <button onClick={this.restartGame} className="replay-button">
                  Replay
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ImageQuiz;
