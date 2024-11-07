import React, { useEffect, useState } from 'react';
import getWeatherData from '../api/weatherApi';

function WeatherComponent() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const data = await getWeatherData();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch weather data.");
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Weather in Vancouver</h1>
      {weather ? (
        <div>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="weather icon" />
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
}

export default WeatherComponent;
