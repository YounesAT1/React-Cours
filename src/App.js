import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, updateProduct, deleteProduct } from "./redux/CRUD/actions";

const App = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    label: "",
    price: 0,
    quantity: 0,
  });

  const handleAddProduct = () => {
    dispatch(addProduct({ ...newProduct, id: Date.now() }));
    setNewProduct({ label: "", price: 0, quantity: 0 });
  };

  const handleUpdateProduct = (id, updatedProduct) => {
    dispatch(updateProduct(id, updatedProduct));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <>
      <h1>Products List : </h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.label} - {product.price} - {product.quantity}
            <button
              onClick={() =>
                handleUpdateProduct(product.id, {
                  ...product,
                  quantity: product.quantity + 1,
                })
              }
            >
              Increment Quantity
            </button>
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2>Add a product :</h2>
      <label htmlFor="label">Label : </label>
      <input
        type="text"
        id="label"
        value={newProduct.label}
        onChange={(e) =>
          setNewProduct({ ...newProduct, label: e.target.value })
        }
      />
      <label htmlFor="price">Price : </label>
      <input
        type="number"
        id="price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <label htmlFor="quantity">Quantity : </label>
      <input
        type="number"
        id="quantity"
        value={newProduct.quantity}
        onChange={(e) =>
          setNewProduct({ ...newProduct, quantity: e.target.value })
        }
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </>
  );
};

export default App;

// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { CommentsList, AddComment, UpdateComment } from "./api/CRUD/Comments";
// import { PostsList, AddPost, UpdatePost } from "./api/CRUD/Posts";

// const App = () => {
//   const navStyle = {
//     background: "#007bff",
//     padding: "10px",
//   };

//   const linkStyle = {
//     marginRight: "20px",
//     color: "#fff",
//     textDecoration: "none",
//     fontSize: "16px",
//     fontWeight: "bold",
//   };

//   return (
//     <div>
//       <Router>
//         <nav style={navStyle}>
//           <ul
//             style={{
//               listStyle: "none",
//               margin: 0,
//               padding: 0,
//               display: "flex",
//               justifyContent: "space-between",
//             }}
//           >
//             <li style={{ display: "inline" }}>
//               <Link to="/Posts" style={linkStyle}>
//                 Posts List
//               </Link>
//             </li>
//             <li style={{ display: "inline" }}>
//               <Link to="/Posts/add" style={linkStyle}>
//                 Add a post
//               </Link>
//             </li>
//             <li style={{ display: "inline" }}>
//               <Link to="/Comments" style={linkStyle}>
//                 Comments List
//               </Link>
//             </li>
//             <li style={{ display: "inline" }}>
//               <Link to="/Comments/add" style={linkStyle}>
//                 Add a comment
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/Posts" element={<PostsList />} />
//           <Route path="/Posts/add" element={<AddPost />} />
//           <Route path="/Posts/update" element={<UpdatePost />} />

//           <Route path="/Comments" element={<CommentsList />} />
//           <Route path="/Comments/add" element={<AddComment />} />
//           <Route path="/Comments/update" element={<UpdateComment />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import About from "./routageComponents/Ex1/About";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useNavigate,
// } from "react-router-dom";

// const App = () => {
//   const navigate = useNavigate();

//   const backToHome = () => {
//     navigate("/");
//   };

//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/about/Jhon">Jhon</Link>
//             </li>
//             <li>
//               <Link to="/about/Jean">Jean</Link>
//             </li>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/about/:userName" element={<About />} />
//           <Route
//             path="/"
//             element={<button onClick={backToHome}>Home</button>}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

/* eslint-disable no-lone-blocks */
// import Crud from "./usestateExamples/Crud";
// import ExThree from "./usestateExamples/ExThree";
// import React, { Component } from "react";
// import PropsOne from "./ClassComponent/props/propsOne/PropsOne";
// import PropsTwo from "./ClassComponent/props/propsTwo/propsTwo";
// import "./App.css";
// import PropsThree from "./ClassComponent/props/propsThree/PropsThree";
// import PropsThreeTotal from "./ClassComponent/props/propsThree/PropsThreeTotal";
// import PlayersClass from "./ClassComponent/PlayersClass";
// import ImageQuiz from "./ClassComponent/ImageQuiz";
// import PillFass from "./ClassComponent/PillFass";
// import RandomNumber from "./ClassComponent/RandomNumber";
// import ExThree from "./ClassComponent/ExThree";
// import ExClassTwo from "./ClassComponent/ExClassTwo";
// import TpStagiaireNote from "./ClassComponent/ExClassTwo";
// import ExTwo from "./usestateExamples/ExTwo";
// import ExOne from "./usestateExamples/ExOne";
// import Student from "./ClassComponent/Student";
// import ClassComponent from "./ClassComponent/ClassComponent.jsx";
// import Leftside from "./facebookComponents/Leftside/Leftside";
// import Middleside from "./facebookComponents/Middleside/Middleside";
// import Navbar from "./facebookComponents/Navbar/Navbar";
// import Rightside from "./facebookComponents/Rightside/Rightside";

// import Cart from "./RemoteExercices/Cart/Cart";
// import MealTracker from "./RemoteExercices/Meal/MealTracker";

// import Expence from "./RemoteExercices/ExpenceTracker/Expence";

// import Crud from "./ClassComponent/Crud";

// import React from "react";
// import Posts from "./ExamPrep/Exam1/Posts";
// import Product from "./ExamPrep/Product";

// import React, { useState } from "react";
// import "./App.css";
// import MealForm from "./RemoteExercices/Meal/MealForm";
// import MealList from "./RemoteExercices/Meal/MealList";
// import DailyStats from "./RemoteExercices/Meal/DailyStats";

// const foodData = [
//   { name: "Pomme", calories: 52, protein: 0.3, carbs: 14, fat: 14, price: 2 },
//   { name: "Banana", calories: 89, protein: 1.1, carbs: 23, fat: 0.3, price: 2 },
//   {
//     name: "Poulet grille",
//     calories: 165,
//     protein: 31,
//     carbs: 0,
//     fat: 3.6,
//     price: 100,
//   },
// ];

// const App = () => {
//   const [meals, setMeals] = useState([]);
//   const [dailyStats, setDailyStats] = useState({
//     totalCalories: 0,
//     totalProtein: 0,
//     totalCarbs: 0,
//     totalFat: 0,
//     totalPrice: 0,
//   });

//   const addMeal = (meal) => {
//     setMeals([...meals, meal]);
//     updateDailyStats(meal, true);
//   };

//   const removeMeal = (index) => {
//     const removedMeal = meals[index];
//     setMeals(meals.filter((_, i) => i !== index));
//     updateDailyStats(removedMeal, false);
//   };

//   const updateDailyStats = (meal, isAddition) => {
//     const factor = isAddition ? 1 : -1;

//     setDailyStats((prevStats) => ({
//       totalCalories:
//         prevStats.totalCalories + factor * meal.calories * meal.quantity,
//       totalProtein:
//         prevStats.totalProtein + factor * meal.protein * meal.quantity,
//       totalCarbs: prevStats.totalCarbs + factor * meal.carbs * meal.quantity,
//       totalFat: prevStats.totalFat + factor * meal.fat * meal.quantity,
//       totalPrice: prevStats.totalPrice + factor * meal.totalPrice,
//     }));
//   };

//   return (
//     <div className="App">
//       <h1>Meal Calculator</h1>
//       <MealForm foodData={foodData} addMeal={addMeal} />
//       <MealList meals={meals} removeMeal={removeMeal} />
//       <DailyStats stats={dailyStats} />
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <div>
//       {/* <Cart /> */}
//       {/* <MealTracker /> */}
//       {/* <Expence /> */}

//       {/* <Crud /> */}
//       {/* <ExThree /> */}
//       {/* <Posts /> */}
//       {/* <TpStagiaireNote /> */}
//     </div>
//   );
// };

// export default App;

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
