import React, { useState } from "react";
import "./MealTracker.css";

const foodData = [
  { name: "Pomme", calories: 52, protein: 0.3, carbs: 14, fat: 14, price: 2 },
  { name: "Banana", calories: 89, protein: 1.1, carbs: 23, fat: 0.3, price: 2 },
  {
    name: "Poulet grille",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    price: 100,
  },
];

const MealTracker = () => {
  const [meals, setMeals] = useState([]);
  const [dailyStats, setDailyStats] = useState({
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0,
    totalPrice: 0,
  });
  const [selectedMeal, setSelectedMeal] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddMeal = () => {
    const selectedFood = foodData.find((food) => food.name === selectedMeal);
    if (selectedFood) {
      const meal = {
        ...selectedFood,
        quantity: parseInt(quantity),
        totalPrice: parseInt(quantity) * selectedFood.price,
      };
      setMeals([...meals, meal]);
      updateDailyStats(meal);
      setSelectedMeal("");
      setQuantity(1);
    }
  };

  const updateDailyStats = (meal) => {
    setDailyStats((prevStats) => ({
      totalCalories: prevStats.totalCalories + meal.calories * meal.quantity,
      totalProtein: prevStats.totalProtein + meal.protein * meal.quantity,
      totalCarbs: prevStats.totalCarbs + meal.carbs * meal.quantity,
      totalFat: prevStats.totalFat + meal.fat * meal.quantity,
      totalPrice: prevStats.totalPrice + meal.totalPrice,
    }));
  };

  return (
    <div className="meal-tracker-container">
      <h1 className="header">Meal Calculator</h1>
      <div className="add-meal-section">
        <h2>Add a Meal</h2>
        <label>
          Select a Meal:
          <select
            value={selectedMeal}
            onChange={(e) => setSelectedMeal(e.target.value)}
          >
            <option value="" disabled>
              Select a meal
            </option>
            {foodData.map((food) => (
              <option key={food.name} value={food.name}>
                {food.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button onClick={handleAddMeal}>Add Meal</button>
      </div>

      <div className="meal-list-section">
        <h2>Meal List</h2>
        <ul>
          {meals.map((meal, index) => (
            <li key={index}>
              {meal.quantity}x {meal.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="daily-stats-section">
        <h2>Daily Statistics</h2>
        <p>Total Calories: {dailyStats.totalCalories}</p>
        <p>Total Protein: {dailyStats.totalProtein}</p>
        <p>Total Carbs: {dailyStats.totalCarbs}</p>
        <p>Total Fat: {dailyStats.totalFat}</p>
        <p>Total Price: {dailyStats.totalPrice}</p>
      </div>
    </div>
  );
};

export default MealTracker;
