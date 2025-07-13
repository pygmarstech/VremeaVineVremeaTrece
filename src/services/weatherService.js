import { translateWeatherDescription } from '../assets/i18n/translations';

const API_KEY = 'fe9b69cd168a4e74e77ebd24bdde97d1';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function getWeatherType(weatherMain) {
  const weatherMap = {
    'Clear': 'clear',
    'Clouds': 'clouds',
    'Rain': 'rain',
    'Drizzle': 'rain',
    'Thunderstorm': 'rain',
    'Snow': 'snow',
    'Mist': 'clouds',
    'Fog': 'clouds',
    'Haze': 'clouds'
  };
  return weatherMap[weatherMain] || 'clear';
}

export async function fetchWeatherData(city, units = 'metric') {
  const url = `${API_BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${units}&lang=ro`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return {
    name: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp),
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    visibility: Math.round(data.visibility / 1000),
    wind_speed: Math.round(data.wind.speed * 3.6),
    wind_deg: data.wind.deg,
    weather: getWeatherType(data.weather[0].main),
    description: translateWeatherDescription(data.weather[0].description),
    icon: data.weather[0].icon
  };
} 