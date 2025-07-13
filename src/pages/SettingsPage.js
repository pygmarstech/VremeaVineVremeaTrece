import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import './SettingsPage.css';

const SettingsPage = () => {
  const { units, setUnits, favorites, setFavorites, searchCity, setSearchCity } = useContext(WeatherContext);

  return (
    <div className="settings">
      <h2 className="settings__title">Setări</h2>
      <div className="settings__card">
        <h3 className="settings__card-title">Unități de măsură</h3>
        <div className="settings__radio-group">
          <label className="settings__radio-label">
            <input
              type="radio"
              name="units"
              value="metric"
              checked={units === 'metric'}
              onChange={(e) => setUnits(e.target.value)}
            />
            Celsius (°C)
          </label>
          <label className="settings__radio-label">
            <input
              type="radio"
              name="units"
              value="imperial"
              checked={units === 'imperial'}
              onChange={(e) => setUnits(e.target.value)}
            />
            Fahrenheit (°F)
          </label>
        </div>
      </div>
      <div className="settings__card">
        <h3 className="settings__card-title">Orașe favorite</h3>
        <div>
          {favorites.map((city, index) => (
            <div key={index} className="settings__favorites-list-item">
              <span>{city}</span>
              <button
                onClick={() => setFavorites(prev => prev.filter((_, i) => i !== index))}
                className="settings__delete-button"
              >
                Șterge
              </button>
            </div>
          ))}
        </div>
        <div className="settings__favorites-add-container">
          <input
            type="text"
            placeholder="Adaugă oraș nou..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="settings__favorites-add-input"
          />
          <button
            onClick={() => {
              if (searchCity.trim() && !favorites.includes(searchCity)) {
                setFavorites(prev => [...prev, searchCity]);
                setSearchCity('');
              }
            }}
            className="settings__favorites-add-button"
          >
            Adaugă
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 