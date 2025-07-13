import React, { createContext, useState, useEffect } from 'react';
import { fetchWeatherData as fetchWeatherDataService } from '../services/weatherService';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchCity, setSearchCity] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [favorites, setFavorites] = useState(['București', 'Timișoara']);
  const [units, setUnits] = useState('metric');

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      const weatherData = await fetchWeatherDataService(city, units);
      setWeatherData(weatherData);
      if (!searchHistory.includes(city)) {
        setSearchHistory(prev => [city, ...prev.slice(0, 4)]);
      }
    } catch (error) {
      console.error('Eroare la încărcarea datelor meteo:', error);
      alert(`Nu s-au putut încărca datele meteo pentru ${city}. Verifică dacă numele orașului este corect.`);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData('București');
    // eslint-disable-next-line
  }, [units]);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (searchCity.trim()) {
      fetchWeatherData(searchCity);
      setSearchCity('');
    }
  };

  return (
    <WeatherContext.Provider value={{
      weatherData,
      loading,
      searchCity,
      setSearchCity,
      searchHistory,
      favorites,
      setFavorites,
      units,
      setUnits,
      fetchWeatherData,
      handleSearch
    }}>
      {children}
    </WeatherContext.Provider>
  );
}; 