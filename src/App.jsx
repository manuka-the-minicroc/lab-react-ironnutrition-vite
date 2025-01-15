import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox"


function App() {
  const [food, setFood] = useState(foodsJson);
   

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {food.map ( (el) => <FoodBox food = {el} />)}
    </div>
  );
}

export default App;
