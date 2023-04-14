import React, { useState } from "react";

function FoodList({ foods }) {
  const [filterFoodType, setFilterFoodType] = useState("All");
  const [filterMaxDeliveryTime, setFilterMaxDeliveryTime] = useState("");

  const handleFoodTypeChange = (event) => {
    setFilterFoodType(event.target.value);
  };

  const handleMaxDeliveryTimeChange = (event) => {
    setFilterMaxDeliveryTime(event.target.value);
  };

  const filteredFoods = foods.filter((food) => {
    if (filterFoodType !== "All" && food.foodType !== filterFoodType) {
      return false;
    }
    if (
      filterMaxDeliveryTime &&
      food.maxDeliveryTime > parseInt(filterMaxDeliveryTime)
    ) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <div>
        <label htmlFor="food-type-filter">Filter by Food Type:</label>
        <select
          id="food-type-filter"
          value={filterFoodType}
          onChange={handleFoodTypeChange}
        >
          <option value="All">All</option>
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
      </div>
      <div>
        <label htmlFor="max-delivery-time-filter">
          Filter by Max Delivery Time:
        </label>
        <input
          type="number"
          id="max-delivery-time-filter"
          value={filterMaxDeliveryTime}
          onChange={handleMaxDeliveryTimeChange}
        />
      </div>
      <ul>
        {filteredFoods.map((food) => (
          <li key={food.id}>
            <div>Food Name: {food.foodName}</div>
            <div>Food Type: {food.foodType}</div>
            <div>Max Delivery Time: {food.maxDeliveryTime} minutes</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
