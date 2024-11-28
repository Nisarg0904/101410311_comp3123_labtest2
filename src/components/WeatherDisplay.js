import React from "react";
import {
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometer,
} from "react-icons/wi";

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
      <p className="temperature">{temperature}°C</p>
      <p className="weather-description">{weather.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />

      <div className="additional-info">
        <p>
          <WiThermometer size={24} /> Feels Like: {feelsLike}°C
        </p>
        <p>
          <WiHumidity size={24} /> Humidity: {weather.main.humidity}%
        </p>
        <p>
          <WiStrongWind size={24} /> Wind Speed: {weather.wind.speed} m/s
        </p>
        <p>
          <WiSunrise size={24} /> Sunrise: {sunriseTime}
        </p>
        <p>
          <WiSunset size={24} /> Sunset: {sunsetTime}
        </p>
      </div>

      <div className="forecast-container">
        <h3>Weekly Forecast</h3>
        {/* Example hardcoded forecast, replace with API data */}
        <div className="forecast-item">
          <p>Monday</p>
          <p>27°C</p>
        </div>
        <div className="forecast-item">
          <p>Tuesday</p>
          <p>23°C</p>
        </div>
        <div className="forecast-item">
          <p>Wednesday</p>
          <p>27°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
