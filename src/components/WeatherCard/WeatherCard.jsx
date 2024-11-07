import React, { useEffect, useState } from 'react';
import getWeatherData from '../../api/weatherApi';
import './WeatherCard.scss'; 

function WeatherCard() {
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
        <div className= "weather-card">
            <h3 className= "weather-card__title">Weather in Vancouver</h3>
            {weather ? (
                <div className= "weather-card__desc">
                    <img src={weather.current.condition.icon} alt="weather icon" />

                    <p>Temperature: {weather.current.temp_c}°C</p>
                    <p>Condition: {weather.current.condition.text}</p>
                </div>
            ) : (
                <p>No weather data available</p>
            )}
        </div>
    );
}

export default WeatherCard;
