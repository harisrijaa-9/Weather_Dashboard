// src/components/WeatherDisplay.js
import React from "react";

function WeatherDisplay({ weatherData }) {
  const { temperature, humidity, windSpeed, weatherCondition } = weatherData;

  return (
    <div className="weather-display">
      <h2>Weather Details</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} km/h</p>
      <p>Condition: {weatherCondition}</p>
    </div>
  );
}

export default WeatherDisplay;
