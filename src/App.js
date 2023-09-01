// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import CityInput from "./components/CityInput";
import WeatherDisplay from "./components/WeatherDisplay";
import Globe from "./components/Globe";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cityCoordinates, setCityCoordinates] = useState(null);
  const [apiRequests, setApiRequests] = useState(0); // Initialize with 0
  const MAX_API_REQUESTS = 10;

  const API_KEY = ""; // Replace with your API key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    setCityCoordinates(null);
    try {
      // Check if the user is approaching the API rate limit
      if (apiRequests >= MAX_API_REQUESTS) {
        throw new Error("API rate limit reached. Please try again later.");
      }

      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        const responseData = await response.json();
        if (response.status === 404) {
          throw new Error("City not found");
        } else {
          throw new Error(`API error: ${responseData.message}`);
        }
      }

      const data = await response.json();
      setWeatherData({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        weatherCondition: data.weather[0].description,
      });
      setCityCoordinates({
        lat: data.coord.lat,
        lon: data.coord.lon,
      });
      setApiRequests(apiRequests + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch initial weather data for a default city if needed
    // fetchWeatherData('DefaultCity');
  }, []);

  return (
    <div className="App">
      <Header />
      <CityInput onCitySubmit={fetchWeatherData} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
      {cityCoordinates && <Globe cityCoordinates={cityCoordinates} />}
    </div>
  );
}

export default App;
