import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import './HomePage.css';
import { Search, Loader, MapPin, Sun, Cloud, CloudRain, CloudSnow, Droplets, Wind, Thermometer, Eye } from 'lucide-react';

const getWeatherIcon = (weather) => {
  switch (weather) {
    case 'clear':
      return <Sun size={64} color="#eab308" />;
    case 'clouds':
      return <Cloud size={64} color="#6b7280" />;
    case 'rain':
      return <CloudRain size={64} color="#3b82f6" />;
    case 'snow':
      return <CloudSnow size={64} color="#93c5fd" />;
    default:
      return <Sun size={64} color="#eab308" />;
  }
};

const HomePage = () => {
  const {
    weatherData,
    loading,
    units,
    favorites,
    fetchWeatherData,
    searchCity,
    setSearchCity,
    handleSearch
  } = useContext(WeatherContext);

  return (
    <div className="home">
      {/* Search Bar */}
      <div className="home__search-container">
        <div className="home__search-input-container">
          <div className="home__search-icon">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Caută un oraș..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
            className="home__search-input"
          />
        </div>
        <button
          onClick={handleSearch}
          className="home__search-button"
        >
          Caută
        </button>
      </div>

      {/* Favorite Cities */}
      <div className="home__favorites">
        <h2 className="home__favorites-title">Orașe favorite</h2>
        <div className="home__favorites-buttons">
          {favorites.map(city => (
            <button
              key={city}
              onClick={() => fetchWeatherData(city)}
              className="home__favorite-button"
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="home__loading-container">
          <Loader size={32} color="#2563eb" style={{animation: 'spin 1s linear infinite'}} />
          <span>Se încarcă datele meteo...</span>
        </div>
      )}

      {/* Main Weather Display */}
      {weatherData && !loading && (
        <div className="home__weather-grid">
          {/* Current Weather */}
          <div className="home__weather-main">
            <div className="home__weather-main-header">
              <div>
                <h2 className="home__weather-main-title">
                  <MapPin size={24} />
                  {weatherData.name}, {weatherData.country}
                </h2>
                <p className="home__weather-main-description">{weatherData.description}</p>
              </div>
              {getWeatherIcon(weatherData.weather)}
            </div>
            <div className="home__weather-temp">
              <span className="home__weather-temp-main">{Math.round(weatherData.temp)}°</span>
              <span className="home__weather-temp-unit">
                {units === 'metric' ? 'C' : 'F'}
              </span>
            </div>
            <div className="home__weather-feels-like">
              Se simte ca {Math.round(weatherData.feels_like)}°{units === 'metric' ? 'C' : 'F'}
            </div>
          </div>
          {/* Weather Details */}
          <div className="home__weather-details">
            <h3 className="home__weather-details-title">Detalii meteo</h3>
            <div className="home__weather-details-grid">
              <div className="home__weather-detail-item">
                <Droplets size={20} color="#3b82f6" />
                <div>
                  <p className="home__weather-detail-label">Umiditate</p>
                  <p className="home__weather-detail-value">{weatherData.humidity}%</p>
                </div>
              </div>
              <div className="home__weather-detail-item">
                <Wind size={20} color="#3b82f6" />
                <div>
                  <p className="home__weather-detail-label">Vânt</p>
                  <p className="home__weather-detail-value">{weatherData.wind_speed} km/h</p>
                </div>
              </div>
              <div className="home__weather-detail-item">
                <Thermometer size={20} color="#3b82f6" />
                <div>
                  <p className="home__weather-detail-label">Presiune</p>
                  <p className="home__weather-detail-value">{weatherData.pressure} hPa</p>
                </div>
              </div>
              <div className="home__weather-detail-item">
                <Eye size={20} color="#3b82f6" />
                <div>
                  <p className="home__weather-detail-label">Vizibilitate</p>
                  <p className="home__weather-detail-value">{weatherData.visibility} km</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage; 