import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./V1_AIT-TALB_YOUNES/components/Nav";
import AjouterIng from "./V1_AIT-TALB_YOUNES/components/AjouterIng";
import ListRecette from "./V1_AIT-TALB_YOUNES/components/ListRecette";
import AficherIng from "./V1_AIT-TALB_YOUNES/components/AficherIng";
import SupprimerIng from "./V1_AIT-TALB_YOUNES/components/SupprimerIng";
import AjouterRecette from "./V1_AIT-TALB_YOUNES/components/AjouterRecette";
import SupprimerRecette from "./V1_AIT-TALB_YOUNES/components/SupprimerRecette";
import ModifierIng from "./V1_AIT-TALB_YOUNES/components/ModifierIng";
import ModifierRecette from "./V1_AIT-TALB_YOUNES/components/ModifierRecette";
const App = () => (
  <div>
    <Router>
      <Nav />
      <Routes>
        <Route path="/AjouterIngredient/:idRecette" element={<AjouterIng />} />
        <Route
          path="/recette/:idRecette/listIngredient"
          element={<AficherIng />}
        />
        <Route
          path="/recette/:idRecette/listIngredient/supprimer"
          element={<SupprimerIng />}
        />
        <Route
          path="/recette/:idRecette/ingredients/:ingNom/modifer"
          element={<ModifierIng />}
        />
        <Route path="/recette/supprimer" element={<SupprimerRecette />} />
        <Route path="/" element={<ListRecette />} />
        <Route path="/recette/ajouter" element={<AjouterRecette />} />
        <Route
          path="/recette/:idRecette/modifier"
          element={<ModifierRecette />}
        />
      </Routes>
    </Router>
  </div>
);

export default App;

// import Exam from "./Exam/Exam";

// const App = () => {
//   return (
//     <>
//       <Exam />
//     </>
//   );
// };

// export default App;

// //! EXAM 2 REACT

// import { useSelector } from "react-redux";
// import ListRopas from "./V2_AIT-TALB_YOUNES/components/ListRopas";
// import RopaAvecIngredientChercher from "./V2_AIT-TALB_YOUNES/components/RopaAvecIngredientChercher";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import DetailRopas from "./V2_AIT-TALB_YOUNES/components/DetailRopas";
// import AjouterRopa from "./V2_AIT-TALB_YOUNES/components/AjouterRopa";
// import AjouterCommentaire from "./V2_AIT-TALB_YOUNES/components/AjouterCommentaire";
// import ListPromotion from "./V2_AIT-TALB_YOUNES/components/ListPromotion";
// import FilterAvecCuisine from "./V2_AIT-TALB_YOUNES/components/FilterAvecCuisine";
// import ChercherAvecNom from "./V2_AIT-TALB_YOUNES/components/ChercherAvecNom";

// const App = () => {
//   const Ropas = useSelector((state) => state.listeRepas);
//   const filteredListeRepas = useSelector((state) => state.filteredListeRepas);
//   const filteredListeRepasAvecCuisine = useSelector(
//     (state) => state.filteredListeRepasAvecCuisine
//   );
//   const filteredListeRepasAvecNom = useSelector(
//     (state) => state.filteredListeRepasAvecNom
//   );

//   return (
//     <div>
//       <BrowserRouter>
//         <Link to="/ropa/ajouter">
//           <h1>Ajouter Ropa</h1>
//         </Link>
//         <Link to="/ropas">
//           <h1>List de ropas</h1>
//         </Link>
//         <Link to="/chercherAverIngredient">
//           <h1>chercher ropa avec ingredient</h1>
//         </Link>
//         <Link to="/filterRopaParTypeCuisine">
//           <h1>filter ropa avec type cuisine </h1>
//         </Link>
//         <Link to="/chercherAvecNom">
//           <h1>chercher ropa avec nom </h1>
//         </Link>

//         <Routes>
//           <Route path="/ropas" element={<ListRopas Ropas={Ropas} />} />
//           <Route
//             path="/chercherAverIngredient"
//             element={
//               <RopaAvecIngredientChercher
//                 filteredListeRepas={filteredListeRepas}
//               />
//             }
//           />
//           <Route
//             path="/filterRopaParTypeCuisine"
//             element={
//               <FilterAvecCuisine filters={filteredListeRepasAvecCuisine} />
//             }
//           />
//           <Route
//             path="/chercherAvecNom"
//             element={<ChercherAvecNom results={filteredListeRepasAvecNom} />}
//           />
//           <Route path="/:id/details" element={<DetailRopas Ropas={Ropas} />} />
//           <Route
//             path="/ropas/:ropaId/ajouterCommentaire"
//             element={<AjouterCommentaire />}
//           />
//           <Route
//             path="/ropas/:ropaId/listPromotion"
//             element={<ListPromotion />}
//           />
//           <Route path="/ropa/ajouter" element={<AjouterRopa />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import {
//   AddClient,
//   ClientList,
//   Header,
//   UpdateClient,
// } from "./ExamTwoPrep/components";
// import { Toaster } from "react-hot-toast";

// const App = () => {
//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={false} />

//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<ClientList />} />
//           <Route path="/clients/add" element={<AddClient />} />
//           <Route path="/clients/update/:clientId" element={<UpdateClient />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;

//! wahtsApp app with redux

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AddContact from "./redux/WhatsApp/components/AddContact";
// import ContactList from "./redux/WhatsApp/components/ContactList";
// import Messages from "./redux/WhatsApp/components/Messages";
// import Login from "./redux/WhatsApp/components/LogIn";
// import NavBar from "./redux/WhatsApp/components/NavBar";
// import { useSelector } from "react-redux";

// const App = () => {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const contacts = useSelector((state) => state.contactsAndMessages.contacts);

//   const mainContainerStyle = {
//     maxWidth: "800px",
//     margin: "0 auto",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "#f4f4f4",
//     minHeight: "100vh",
//   };

//   return (
//     <Router>
//       <div style={mainContainerStyle}>
//         {isLoggedIn ? <NavBar /> : <Login />}
//         <Routes>
//           <Route path="/addContact" element={<AddContact />} />
//           <Route
//             path="/contactsList"
//             element={<ContactList contacts={contacts} />}
//           />
//           <Route
//             path="/messages/:contactId/:contactName"
//             element={<Messages />}
//           />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

//! social app

// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";

// import { AddComment, addLike, fetchPosts } from "./redux/Social/actions";
// import { AddFriend, AddMessage, AddPost } from "./redux/Social/components";

// const API_URL = "http://localhost:3004/PostsList";

// const App = () => {
//   const posts = useSelector((state) => state.Posts);
//   const dispatch = useDispatch();
//   const [comment, setComment] = useState({});

//   useEffect(() => {
//     axios.get(API_URL).then((res) => dispatch(fetchPosts(res.data)));
//   }, [dispatch]);

//   const handleAddComment = (postId) => {
//     const commentToAdd = comment[postId];
//     dispatch(AddComment(postId, commentToAdd));
//     setComment({ ...comment, [postId]: "" });
//   };

//   const handleAddLike = (idPost, post) => {
//     dispatch(addLike(idPost, post));
//   };

//   const handleCommentInputChange = (postId, value) => {
//     setComment({
//       ...comment,
//       [postId]: value,
//     });
//   };

//   return (
//     <div>
//       <h1>Social App</h1>
//       <Router>
//         <ul>
//           <li>
//             <Link to="/addPost">Add Post</Link>
//           </li>
//           <li>
//             <Link to="/addFriend">Friends 0</Link>
//           </li>
//           <li>
//             <Link to="/addMessage">Messages 0</Link>
//           </li>
//         </ul>
//         <Routes>
//           <Route path="/addPost" element={<AddPost />} />
//           <Route path="/addFriend" element={<AddFriend />} />
//           <Route path="/addMessage" element={<AddMessage />} />
//         </Routes>
//       </Router>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <p>{post.content}</p>
//           <button onClick={() => handleAddLike(post.id, post)}>
//             Likes {post.likes}
//           </button>
//           <input
//             type="text"
//             value={comment[post.id]}
//             onChange={(e) => handleCommentInputChange(post.id, e.target.value)}
//           />
//           <button onClick={() => handleAddComment(post.id)}>
//             Add a Comment
//           </button>
//           <ul>
//             {post.commentsList.map((commentText, index) => (
//               <li key={index}>{commentText}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

//! Redux ex 2

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchTasks,
//   addTask,
//   deleteTask,
//   updateTask,
// } from "./redux/Tasks/actions";
// import axios from "axios";

// const apiUrl = "http://localhost:3004/tasks";

// const App = () => {
//   const tasks = useSelector((state) => state.tasks);
//   const dispatch = useDispatch();
//   const [newTask, setNewTask] = useState("");
//   const [selectedTask, setSelectedTask] = useState(null);

//   useEffect(() => {
//     axios.get(apiUrl).then((res) => dispatch(fetchTasks(res.data)));
//   }, [dispatch]);

//   const handleAddTask = () => {
//     axios.post(apiUrl, { title: newTask }).then((res) => {
//       dispatch(addTask(res.data));
//       setNewTask("");
//     });
//   };

//   const handleDeleteTask = (id) => {
//     axios.delete(`${apiUrl}/${id}`).then(() => dispatch(deleteTask(id)));
//   };

//   const handleSelectedTask = (task) => {
//     setSelectedTask(task);
//     setNewTask(task.title);
//   };

//   const handleUpdateTask = () => {
//     if (selectedTask) {
//       dispatch(updateTask(selectedTask.id, { title: newTask }));
//       setSelectedTask(null);
//       setNewTask("");
//     }
//   };

//   const inputStyle = {
//     padding: "8px",
//     marginBottom: "10px",
//     width: "300px",
//   };

//   const buttonStyle = {
//     padding: "8px 16px",
//     margin: "0 5px",
//     borderRadius: "5px",
//     border: "none",
//     cursor: "pointer",
//   };

//   return (
//     <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ color: "#3498db" }}>Tasks List</h1>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {tasks.map((task) => (
//           <li
//             key={task.id}
//             style={{
//               backgroundColor: "#f5f5f5",
//               padding: "10px",
//               margin: "10px 0",
//               borderRadius: "5px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <span>{task.title}</span>
//             <div>
//               <button
//                 onClick={() => handleDeleteTask(task.id)}
//                 style={{
//                   ...buttonStyle,
//                   backgroundColor: "#e74c3c",
//                   color: "white",
//                 }}
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => handleSelectedTask(task)}
//                 style={{
//                   ...buttonStyle,
//                   backgroundColor: "#3498db",
//                   color: "white",
//                 }}
//               >
//                 Update
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <h1 style={{ color: "#3498db" }}>
//         {selectedTask ? "Update a task" : "Add a task"}
//       </h1>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Task Title"
//           style={{ ...inputStyle }}
//         />
//         <button
//           onClick={selectedTask ? handleUpdateTask : handleAddTask}
//           style={{
//             ...buttonStyle,
//             backgroundColor: selectedTask ? "#3498db" : "#2ecc71",
//             color: "white",
//             marginBottom: "10px",
//           }}
//         >
//           {selectedTask ? "Update" : "Add"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

//! Redux ex 1
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addProduct, updateProduct, deleteProduct } from "./redux/CRUD/actions";

// const App = () => {
//   const products = useSelector((state) => state.products);
//   const dispatch = useDispatch();
//   const [newProduct, setNewProduct] = useState({
//     label: "",
//     price: 0,
//     quantity: 0,
//   });

//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleAddProduct = () => {
//     dispatch(addProduct({ ...newProduct, id: Date.now() }));
//     setNewProduct({ label: "", price: 0, quantity: 0 });
//   };

//   const handleUpdateProduct = () => {
//     if (selectedProduct) {
//       dispatch(updateProduct(selectedProduct.id, newProduct));
//       setSelectedProduct(null);
//       setNewProduct({ label: "", price: 0, quantity: 0 });
//     }
//   };

//   const handleDeleteProduct = (id) => {
//     dispatch(deleteProduct(id));
//   };

//   const handleSelectProduct = (product) => {
//     setSelectedProduct(product);
//     setNewProduct(product);
//   };

//   const inputStyle = {
//     padding: "8px",
//     marginBottom: "10px",
//     width: "200px",
//   };

//   const buttonStyle = {
//     padding: "8px 16px",
//     margin: "0 5px",
//     borderRadius: "5px",
//     border: "none",
//     cursor: "pointer",
//   };

//   return (
//     <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ color: "#3498db" }}>Products List</h1>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {products.map((product) => (
//           <li
//             key={product.id}
//             style={{
//               backgroundColor: "#f5f5f5",
//               padding: "10px",
//               margin: "10px 0",
//               borderRadius: "5px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <div>
//               <strong>{product.label}</strong> - ${product.price} -{" "}
//               {product.quantity} in stock
//             </div>
//             <div>
//               <button
//                 onClick={() => handleSelectProduct(product)}
//                 style={{
//                   ...buttonStyle,
//                   backgroundColor: "#2ecc71",
//                   color: "white",
//                 }}
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDeleteProduct(product.id)}
//                 style={{
//                   ...buttonStyle,
//                   backgroundColor: "#e74c3c",
//                   color: "white",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <h2 style={{ color: "#3498db" }}>
//         {selectedProduct ? "Update Product" : "Add Product"}
//       </h2>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <input
//           type="text"
//           value={newProduct.label}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, label: e.target.value })
//           }
//           placeholder="Product Name"
//           style={{ ...inputStyle }}
//         />
//         <input
//           type="number"
//           value={newProduct.price}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, price: e.target.value })
//           }
//           placeholder="Price"
//           style={{ ...inputStyle }}
//         />
//         <input
//           type="number"
//           value={newProduct.quantity}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, quantity: e.target.value })
//           }
//           placeholder="Quantity"
//           style={{ ...inputStyle }}
//         />
//         <button
//           onClick={selectedProduct ? handleUpdateProduct : handleAddProduct}
//           style={{
//             ...buttonStyle,
//             backgroundColor: selectedProduct ? "#3498db" : "#2ecc71",
//             color: "white",
//             marginBottom: "8px",
//           }}
//         >
//           {selectedProduct ? "Update" : "Add"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

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
