import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { notifications, user } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg app-navbar sticky-top mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center me-4" to="/">
          <i className="bi bi-hexagon-fill text-violet me-2"></i>
          <span>Event</span>Hub
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2 text-violet"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Quick Search */}
          <form className="d-flex me-auto my-2 my-lg-0 position-relative" onSubmit={handleSearchSubmit}>
            <input
              className="form-control rounded-pill px-4 pe-5"
              type="search"
              placeholder="Search hackathons, teams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ minWidth: '240px' }}
            />
            <button
              type="submit"
              className="btn btn-link text-violet position-absolute end-0 top-50 translate-middle-y me-2 p-0"
            >
              <i className="bi bi-search fs-5"></i>
            </button>
          </form>

          {/* Navigation Links */}
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/events">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/teams">
                Find Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>

            {/* Notification Bell */}
            <li className="nav-item">
              <Link className="nav-link position-relative p-2" to="/notifications" title="Notifications">
                <i className="bi bi-bell fs-5"></i>
                {unreadCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {unreadCount}
                  </span>
                )}
              </Link>
            </li>

            {/* Theme Toggle Button */}
            <li className="nav-item ms-lg-2">
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={toggleTheme}
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              >
                {theme === 'dark' ? (
                  <>
                    <i className="bi bi-sun-fill text-warning fs-5"></i>
                    <span className="d-none d-xl-inline text-gold">Light</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-moon-stars-fill text-violet fs-5"></i>
                    <span className="d-none d-xl-inline text-violet">Dark</span>
                  </>
                )}
              </button>
            </li>

            {/* User Profile Avatar / Login */}
            <li className="nav-item ms-lg-3">
              <div className="d-flex align-items-center gap-2">
                <Link to="/profile" className="d-flex align-items-center text-decoration-none">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="rounded-circle border border-2 border-warning"
                    style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  />
                </Link>
                <Link to="/login" className="btn btn-sm btn-outline-primary rounded-pill">
                  Login
                </Link>
                <Link to="/register" className="btn btn-sm btn-gold rounded-pill">
                  Sign Up
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
