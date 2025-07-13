import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import { WeatherProvider } from './context/WeatherContext';

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '4rem', color: '#dc2626' }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 - Pagina nu a fost găsită</h2>
    <p>Ne pare rău, pagina pe care o cauți nu există.</p>
    </div>
  );

const App = () => {
  return (
    <WeatherProvider>
      <Router>
        <div className="app">
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </div>
      </Router>
    </WeatherProvider>
  );
};

export default App;