import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherData({ cityName, countryName }) {
  const APIKEY = 'Your API Key';
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!cityName || !countryName) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${APIKEY}&units=metric`
        );
        setWeatherData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('API Error:', error);
        setWeatherData(null);
      }
    };

    fetchData();
  }, [cityName, countryName]);

  return (
    <div className='mt-6 text-center'>
      {weatherData ? (
        <div className='bg-white p-6 rounded-lg shadow-md inline-block'>
          <h2 className='text-2xl font-bold mb-2'>
            {weatherData.name}, {weatherData.sys?.country}
          </h2>
          <p>🌡 Temperature: {weatherData.main?.temp}°C</p>
          <p>💧 Humidity: {weatherData.main?.humidity}%</p>
          <p>🌬 Wind Speed: {weatherData.wind?.speed} m/s</p>
          <p>🌤 Condition: {weatherData.weather?.[0]?.description}</p>
        </div>
      ) : (
        <p className='text-gray-500'>Enter city and country to get weather data.</p>
      )}
    </div>
  );
}

export default WeatherData;
