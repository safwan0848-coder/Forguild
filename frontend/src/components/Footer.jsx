import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-5 py-5 border-top border-glass" style={{ background: 'var(--bg-glass)' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <Link to="/" className="navbar-brand d-inline-block mb-3 fs-3 text-decoration-none">
              <i className="bi bi-hexagon-fill text-violet me-2"></i>
              Forge<span className="text-gold">Guild</span>
            </Link>
            <p className="text-muted-custom small pe-lg-4">
              Forguild is the premier collaboration platform connecting developers, designers, and innovators with top global hackathons and team-building opportunities.
            </p>
            <div className="d-flex gap-3 fs-5 text-violet">
              <a href="#" className="text-decoration-none text-violet"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="text-decoration-none text-violet"><i className="bi bi-github"></i></a>
              <a href="#" className="text-decoration-none text-violet"><i className="bi bi-discord"></i></a>
              <a href="#" className="text-decoration-none text-violet"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="text-gold fw-bold mb-3">Platform</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/events" className="text-muted-custom text-decoration-none">Explore Events</Link></li>
              <li><Link to="/teams" className="text-muted-custom text-decoration-none">Find a Team</Link></li>
              <li><Link to="/teams/create" className="text-muted-custom text-decoration-none">Create Team</Link></li>
              <li><Link to="/saved-events" className="text-muted-custom text-decoration-none">Saved Events</Link></li>
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="text-gold fw-bold mb-3">Account</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/dashboard" className="text-muted-custom text-decoration-none">Dashboard</Link></li>
              <li><Link to="/profile" className="text-muted-custom text-decoration-none">My Profile</Link></li>
              <li><Link to="/messages" className="text-muted-custom text-decoration-none">Messages</Link></li>
              <li><Link to="/notifications" className="text-muted-custom text-decoration-none">Notifications</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 className="text-gold fw-bold mb-3">Stay Updated</h6>
            <p className="text-muted-custom small">Subscribe to receive notifications for upcoming high-prize hackathons.</p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control rounded-start-pill"
                placeholder="Enter your email"
              />
              <button className="btn btn-gold rounded-end-pill px-4" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="my-4 border-glass" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-muted-custom">
          <p className="mb-0">© 2026 Forguild. All rights reserved.</p>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <a href="#" className="text-muted-custom text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-muted-custom text-decoration-none">Terms of Service</a>
            <a href="#" className="text-muted-custom text-decoration-none">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
