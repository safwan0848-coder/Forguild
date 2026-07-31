import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function TeamDetailsPage() {
  const { id } = useParams();
  const { teams, sendJoinRequest } = useApp();
  const [requested, setRequested] = useState(false);

  const team = teams.find(t => t.id === Number(id)) || teams[0];

  return (
    <div className="container py-4">
      <div className="card p-4 p-md-5 mb-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 border-bottom border-glass pb-4 mb-4">
          <div className="d-flex align-items-center gap-3">
            <img
              src={team.leaderAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
              alt={team.leader}
              className="rounded-circle border border-warning shadow"
              style={{ width: '70px', height: '70px', objectFit: 'cover' }}
            />
            <div>
              <span className="badge badge-gold mb-1">{team.event}</span>
              <h1 className="fw-bold mb-0">{team.name}</h1>
              <p className="text-muted-custom mb-0 small">Team Leader: <strong>{team.leader}</strong></p>
            </div>
          </div>

          <div>
            <button
              className={`btn ${requested ? 'btn-success' : 'btn-gold'} rounded-pill px-4 py-2`}
              onClick={() => {
                sendJoinRequest(team.name);
                setRequested(true);
              }}
            >
              {requested ? (
                <>
                  <i className="bi bi-check-lg me-2"></i> Application Sent
                </>
              ) : (
                <>
                  <i className="bi bi-person-plus-fill me-2"></i> Apply to Join Team
                </>
              )}
            </button>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <h4 className="fw-bold mb-3">Project Concept</h4>
            <p className="text-muted-custom leading-relaxed mb-4">
              {team.description} We are leveraging high-performance API services, modern UI design, and scalable backend infrastructure to deliver an award-winning submission.
            </p>

            <h4 className="fw-bold mb-3">Open Positions ({team.lookingFor.length})</h4>
            <div className="d-flex flex-column gap-3 mb-4">
              {team.lookingFor.map((role, idx) => (
                <div key={idx} className="card p-3 d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-violet text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-laptop"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{role}</h6>
                      <span className="small text-muted-custom">Required for core feature development</span>
                    </div>
                  </div>
                  <button
                    className="btn btn-sm btn-outline-primary rounded-pill"
                    onClick={() => sendJoinRequest(`${team.name} (${role})`)}
                  >
                    Apply for Role
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card p-4">
              <h5 className="fw-bold mb-3">Current Members ({team.size}/{team.maxSize})</h5>
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={team.leaderAvatar}
                    alt={team.leader}
                    className="rounded-circle border border-warning"
                    style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{team.leader}</h6>
                    <span className="badge badge-violet p-1 px-2 small">Leader / Fullstack</span>
                  </div>
                </div>
              </div>

              <hr className="border-glass my-3" />

              <h6 className="fw-bold mb-2">Target Event Details</h6>
              <p className="small text-muted-custom mb-3">{team.event}</p>
              <Link to="/events" className="btn btn-sm btn-outline-primary w-100 rounded-pill">
                View Event Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
