import React, { useState } from 'react';
function FoodForm() {
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState('Delicious Food');
  const [maxDeliveryTime, setMaxDeliveryTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <form className="food form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="food-name">Food Name:</label>
        <input
          type="text"
          id="food-name"
          value={foodName}
          onChange={(event) => setFoodName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="food-type">Food Type:</label>
        <select
          id="food-type"
          value={foodType}
          onChange={(event) => setFoodType(event.target.value)}
        >
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
      </div>
      <div>
        <label htmlFor="max-delivery-time">Max Delivery Time (in minutes):</label>
        <input
          type="number"
          id="max-delivery-time"
          value={maxDeliveryTime}
          onChange={(event) => setMaxDeliveryTime(event.target.value)}
        />
      </div>
      <button type="submit">Post Food</button>
    </form>
  );
}

export default FoodForm;