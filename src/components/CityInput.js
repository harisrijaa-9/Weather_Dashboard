// src/components/CityInput.js
import React, { useState } from "react";

function CityInput({ onCitySubmit }) {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCitySubmit(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={handleInputChange}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default CityInput;
