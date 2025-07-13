import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cloud, Home, History, Settings } from 'lucide-react';

const Navigation = () => (
  <nav className="nav">
    <div className="nav__container">
      <h1 className="nav__title">
        <Cloud size={32} />
        VremeaVineVremeaTrece
      </h1>
      <div className="nav__buttons">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            'nav__button' + (isActive ? ' nav__button--active' : '')
          }
        >
          <Home size={20} />
          Acasă
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            'nav__button' + (isActive ? ' nav__button--active' : '')
          }
        >
          <History size={20} />
          Istoric
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            'nav__button' + (isActive ? ' nav__button--active' : '')
          }
        >
          <Settings size={20} />
          Setări
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Navigation; 