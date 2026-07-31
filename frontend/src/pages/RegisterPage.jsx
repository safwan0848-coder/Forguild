import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Fullstack Developer');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful! Welcome to Forguild.');
    navigate('/dashboard');
  };

  return (
    <div className="container py-5 max-w-md mx-auto">
      <div className="card p-4 p-md-5">
        <div className="text-center mb-4">
          <i className="bi bi-hexagon-fill text-gold fs-1"></i>
          <h2 className="fw-bold mt-2 mb-1">Create Account</h2>
          <span className="text-muted-custom small">Join the premiere global hackathon developer community</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Alex Rivera"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Primary Specialization</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Fullstack Developer">Fullstack Developer</option>
              <option value="Frontend Specialist">Frontend Specialist</option>
              <option value="Backend & Cloud Engineer">Backend & Cloud Engineer</option>
              <option value="AI / ML Researcher">AI / ML Researcher</option>
              <option value="Smart Contract Dev">Smart Contract Dev</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>
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

          <button type="submit" className="btn btn-gold w-100 rounded-pill py-3 fw-bold mb-3">
            Create Free Account
          </button>
        </form>

        <div className="text-center small text-muted-custom mt-3">
          Already have an account? <Link to="/login" className="text-violet fw-bold text-decoration-none">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
