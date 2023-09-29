/* eslint-disable no-lone-blocks */
// import React, { Component } from "react";
// import PropsOne from "./ClassComponent/props/propsOne/PropsOne";
// import PropsTwo from "./ClassComponent/props/propsTwo/propsTwo";
import "./App.css";
// import PropsThree from "./ClassComponent/props/propsThree/PropsThree";
// import PropsThreeTotal from "./ClassComponent/props/propsThree/PropsThreeTotal";
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

import React from "react";
import Product from "./ExamPrep/Product";

const App = () => {
  return (
    <div>
      <Product />
    </div>
  );
};

export default App;

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

// ###########################################################################

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       wordsList: ["something1", "something2", "something3", "something4"],
//       selectedWords: [],
//     };
//   }

//   handleWordClick = (word) => () => {
//     const updatedWordsList = this.state.wordsList.filter((wr) => wr !== word);
//     this.setState({
//       wordsList: updatedWordsList,
//       selectedWords: [...this.state.selectedWords, word],
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Word List</h1>
//         <ul>
//           {this.state.wordsList.map((word) => (
//             <li onClick={this.handleWordClick(word)}>{word}</li>
//           ))}
//         </ul>
//         <PropsTwo selectedWords={this.state.selectedWords} />
//       </div>
//     );
//   }
// }

// export default App;

// ##############################################################################

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: {
//         productName: "",
//         productPrice: 0,
//         productMark: "",
//         productQuantity: 0,
//       },
//       productsCart: [],
//       total: 0,
//     };
//   }

//   handleInputChange = (e) => {
//     this.setState({
//       product: {
//         ...this.state.product,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   handleAddProduct = () => {
//     if (
//       this.state.product.productName !== "" &&
//       this.state.product.productMark !== "" &&
//       this.state.product.productPrice > 0 &&
//       this.state.product.productQuantity > 0
//     ) {
//       const newProduct = {
//         productName: this.state.product.productName,
//         productMark: this.state.product.productMark,
//         productPrice: this.state.product.productPrice,
//         productQuantity: this.state.product.productQuantity,
//       };

//       this.setState({
//         productsCart: [...this.state.productsCart, newProduct],
//         product: {
//           productMark: "",
//           productQuantity: 0,
//           productName: "",
//           productPrice: 0,
//         },
//         total:
//           this.state.total +
//           this.state.product.productPrice * this.state.product.productQuantity,
//       });
//     } else {
//       alert("all field are required");
//     }
//   };

//   render() {
//     return (
//       <div style={{ padding: "20px 20px", backgroundColor: "lightblue" }}>
//         <label htmlFor="productName">Product Name : </label>
//         <input
//           type="text"
//           name="productName"
//           id="productName"
//           value={this.state.product.productName}
//           onChange={this.handleInputChange}
//         />
//         <label htmlFor="productMark">Product Mark : </label>
//         <input
//           type="text"
//           name="productMark"
//           id="productMark"
//           value={this.state.product.productMark}
//           onChange={this.handleInputChange}
//         />
//         <label htmlFor="productQuantity">Product Quantity : </label>
//         <input
//           type="number"
//           name="productQuantity"
//           id="productQuantity"
//           value={this.state.product.productQuantity}
//           onChange={this.handleInputChange}
//         />
//         <label htmlFor="productPrice">Product Price : </label>
//         <input
//           type="number"
//           name="productPrice"
//           id="productPrice"
//           value={this.state.product.productPrice}
//           onChange={this.handleInputChange}
//         />
//         <button onClick={this.handleAddProduct}>Add Product</button>
//         <div>
//           <PropsThree productsCart={this.state.productsCart} />
//         </div>
//         <div>
//           <PropsThreeTotal total={this.state.total} />
//         </div>
//       </div>
//     );
//   }
// }
// export default App;

// ###################################################

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       score: 0,
//       imageX: 0,
//       imageY: 0,
//     };
//   }

//   handleMoveImage = () => {
//     const maxX = window.innerWidth - 300;
//     const maxY = window.innerHeight - 200;

//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     this.setState(() => {
//       return {
//         imageX: randomX,
//         imageY: randomY,
//       };
//     });
//   };

//   handleAddScore = () => {
//     setInterval(() => {
//       this.handleMoveImage();
//     }, 1000);
//     this.setState({
//       score: this.state.score + 1,
//     });
//   };
//   render() {
//     return (
//       <div style={{ position: "relative" }}>
//         <div>
//           <h5 style={{ position: "absolute", right: "0", top: "0" }}>
//             Score: {this.state.score}
//           </h5>
//         </div>
//         <img
//           style={{
//             position: "absolute",
//             top: this.state.imageY,
//             left: this.state.imageX,
//           }}
//           src="cat.jpg"
//           alt="cat"
//           height={200}
//           width={300}
//           onClick={this.handleAddScore}
//         />
//       </div>
//     );
//   }
// }

// export default App;
