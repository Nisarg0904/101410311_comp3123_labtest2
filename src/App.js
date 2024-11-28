import React, { useState } from "react";
import { getWeatherByCity } from "./service/WeatherService";
import WeatherDisplay from "./components/WeatherDisplay";
import Search from "./components/search";
import './styles/WeatherApp.css'; 

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await getWeatherByCity(city);
    setWeather(data);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search onSearch={handleSearch} />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default App;
