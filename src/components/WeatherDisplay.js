import React from "react";
import { WiHumidity, WiStrongWind, WiSunrise, WiSunset } from "react-icons/wi";

const WeatherDisplay = ({ weather }) => {
  const temperature = Math.round(weather.main.temp - 273.15);
  const feelsLike = Math.round(weather.main.feels_like - 273.15);
  const sunriseTime = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="weather-info">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="temperature">
        <p>{temperature}°C</p>
        <p>Feels like: {feelsLike}°C</p>
      </div>
      <p className="weather-description">{weather.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />

      <div className="additional-info">
        <p>
          <WiHumidity /> Humidity: {weather.main.humidity}%
        </p>
        <p>
          <WiStrongWind /> Wind Speed: {weather.wind.speed} m/s
        </p>
        <p>Visibility: {weather.visibility / 1000} km</p>
        <p>
          <WiSunrise /> Sunrise: {sunriseTime}
        </p>
        <p>
          <WiSunset /> Sunset: {sunsetTime}
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
