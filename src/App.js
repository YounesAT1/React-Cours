/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
// import PropsOne from "./ClassComponent/props/propsOne/PropsOne";
import PropsTwo from "./ClassComponent/props/propsTwo/propsTwo";
import "./App.css";
// import PlayersClass from "./ClassComponent/PlayersClass";
// import ImageQuiz from "./ClassComponent/ImageQuiz";
// import PillFass from "./ClassComponent/PillFass";
// import RandomNumber from "./ClassComponent/RandomNumber";
// import ExThree from "./ClassComponent/ExThree";
// import ExClassTwo from "./ClassComponent/ExClassTwo";
// import ExClass from "./ClassComponent/ExClass";
// import ExTwo from "./usestateExamples/ExTwo";
// import ExOne from "./usestateExamples/ExOne";
// import Student from "./ClassComponent/Student";
// import ClassComponent from "./ClassComponent/ClassComponent.jsx";
// import Leftside from "./facebookComponents/Leftside/Leftside";
// import Middleside from "./facebookComponents/Middleside/Middleside";
// import Navbar from "./facebookComponents/Navbar/Navbar";
// import Rightside from "./facebookComponents/Rightside/Rightside";

// import Crud from "./ClassComponent/Crud";

// const App = () => {
//   return (
//     <div>
{
  /* <Crud /> */
}
{
  /* previouseComponents */
}

{
  /* <input type="text" /> */
}
{
  /* <PlayersClass /> */
}
{
  /* <ImageQuiz /> */
}
{
  /* <PillFass /> */
}
{
  /* <ExThree /> */
}
{
  /* <ExClassTwo /> */
}
{
  /* <ExClass /> */
}
{
  /* <ExTwo /> */
}
{
  /* <ExOne /> */
}
{
  /* <Student /> */
}
{
  /* <ClassComponent /> */
}
{
  /* <Navbar />
      <div className="main">
        <Leftside />
        <Middleside />
        <Rightside />
      </div> */
}
{
  /* </div>
  );
}; */
}

// export default App;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsList: ["Word1", "Word2", "Word3", "Word4"],
      selectedWords: [],
    };
  }

  handleWordClick = (word) => {
    const { wordsList, selectedWords } = this.state;
    const updatedWordsList = wordsList.filter((w) => w !== word);
    this.setState({
      wordsList: updatedWordsList,
      selectedWords: [...selectedWords, word],
    });
  };

  render() {
    const { wordsList, selectedWords } = this.state;
    return (
      <div>
        <h1>Word List</h1>
        <ul>
          {wordsList.map((word) => (
            <li key={word} onClick={() => this.handleWordClick(word)}>
              {word}
            </li>
          ))}
        </ul>
        <PropsTwo selectedWords={selectedWords} />
      </div>
    );
  }
}

export default App;
