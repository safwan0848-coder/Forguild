import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function ProfilePage() {
  const { user } = useApp();

  return (
    <div className="container py-4">
      <div className="card p-4 p-md-5 mb-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 border-bottom border-glass pb-4 mb-4">
          <div className="d-flex align-items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-circle border border-3 border-warning shadow"
              style={{ width: '90px', height: '90px', objectFit: 'cover' }}
            />
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <h2 className="fw-bold mb-0">{user.name}</h2>
                <span className="badge badge-gold">Verified Hacker</span>
              </div>
              <p className="text-violet fw-semibold mb-1">@{user.username} • {user.title}</p>
              <p className="text-muted-custom small mb-0"><i className="bi bi-geo-alt-fill me-1"></i> {user.location}</p>
            </div>
          </div>

          <div>
            <Link to="/profile/edit" className="btn btn-outline-primary rounded-pill px-4">
              <i className="bi bi-pencil-square me-2"></i> Edit Profile
            </Link>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <h4 className="fw-bold mb-3">About Developer</h4>
            <p className="text-muted-custom leading-relaxed mb-4">{user.bio}</p>

            <h4 className="fw-bold mb-3">Skills & Technologies</h4>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {user.skills.map((skill, idx) => (
                <span key={idx} className="badge badge-violet fs-6 px-3 py-2">
                  {skill}
                </span>
              ))}
            </div>

            <h4 className="fw-bold mb-3">Featured Portfolio Projects</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="card p-3 h-100">
                  <h5 className="fw-bold mb-1">Agentic AI Copilot</h5>
                  <p className="small text-muted-custom mb-2">Automated pair programmer with zero-shot web app synthesis.</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="badge badge-gold">1st Prize Winner</span>
                    <a href="#" className="btn btn-sm btn-outline-primary rounded-pill">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card p-3 h-100">
                  <h5 className="fw-bold mb-1">DeFi Settlement Layer</h5>
                  <p className="small text-muted-custom mb-2">Zero-knowledge proof rollup for sub-second settlement.</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="badge badge-violet">FinTech Hackathon</span>
                    <a href="#" className="btn btn-sm btn-outline-primary rounded-pill">Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card p-4">
              <h5 className="fw-bold mb-3">Hackathon Statistics</h5>
              <div className="d-flex justify-content-between align-items-center border-bottom border-glass pb-2 mb-2">
                <span className="text-muted-custom">Events Joined</span>
                <strong className="text-violet">{user.stats.eventsParticipated}</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom border-glass pb-2 mb-2">
                <span className="text-muted-custom">Teams Formed</span>
                <strong className="text-gold">{user.stats.teamsJoined}</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="text-muted-custom">Prizes Awarded</span>
                <strong className="text-success">{user.stats.prizesWon}</strong>
              </div>

              <h5 className="fw-bold mb-3">Social Profiles</h5>
              <div className="d-flex flex-column gap-2">
                <a href={user.github} target="_blank" rel="noreferrer" className="btn btn-outline-primary rounded-pill text-start">
                  <i className="bi bi-github me-2"></i> GitHub Profile
                </a>
                <a href={user.twitter} target="_blank" rel="noreferrer" className="btn btn-outline-primary rounded-pill text-start">
                  <i className="bi bi-twitter-x me-2"></i> Twitter / X
                </a>
                <a href={user.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-primary rounded-pill text-start">
                  <i className="bi bi-linkedin me-2"></i> LinkedIn Network
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
