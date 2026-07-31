import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="container py-5 max-w-md mx-auto">
      <div className="card p-4 p-md-5">
        <div className="text-center mb-4">
          <i className="bi bi-hexagon-fill text-violet fs-1"></i>
          <h2 className="fw-bold mt-2 mb-1">Welcome Back</h2>
          <span className="text-muted-custom small">Sign in to manage your teams and hackathon projects</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="developer@forguild.app"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 rounded-pill py-3 fw-bold mb-3">
            Sign In
          </button>
        </form>

        <div className="text-center small text-muted-custom mt-3">
          Don't have an account? <Link to="/register" className="text-violet fw-bold text-decoration-none">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
