import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { useNavigate } from 'react-router-dom';
import './HistoryPage.css';
import { History } from 'lucide-react';

const HistoryPage = () => {
  const { searchHistory, fetchWeatherData } = useContext(WeatherContext);
  const navigate = useNavigate();

  const handleView = async (city) => {
    await fetchWeatherData(city);
    navigate('/');
  };

  return (
    <div className="history">
      <h2 className="history__title">Istoric căutări</h2>
      {searchHistory.length === 0 ? (
        <div className="history__empty-state">
          <History size={64} color="#9ca3af" style={{margin: '0 auto 1rem'}} />
          <p>Nu ai căutat încă niciun oraș.</p>
        </div>
      ) : (
        <div className="history__grid">
          {searchHistory.map((city, index) => (
            <div key={index} className="history__card">
              <div className="history__card-content">
                <div>
                  <h3 className="history__card-title">{city}</h3>
                  <p className="history__card-subtitle">Căutare #{searchHistory.length - index}</p>
                </div>
                <button
                  onClick={() => handleView(city)}
                  className="history__card-button"
                >
                  Vezi
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage; 