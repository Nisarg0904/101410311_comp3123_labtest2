import axios from "axios";

const API_KEY = "0b5875aa89baa0ec9bf726a60beea7e4";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
  }
};
