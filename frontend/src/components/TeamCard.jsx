import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function TeamCard({ team }) {
  const { sendJoinRequest } = useApp();

  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start border-bottom border-glass pb-3 mb-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src={team.leaderAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
              alt={team.leader}
              className="rounded-circle border border-warning"
              style={{ width: '46px', height: '46px', objectFit: 'cover' }}
            />
            <div>
              <h5 className="card-title mb-0">{team.name}</h5>
              <p className="small text-muted-custom mb-0">For: {team.event}</p>
            </div>
          </div>
          <span className="badge badge-gold">
            {team.size}/{team.maxSize} Members
          </span>
        </div>

        <p className="small text-muted-custom mb-3">
          {team.description || "Building an exciting hackathon submission and looking for passionate teammates."}
        </p>

        <p className="small fw-bold text-violet mb-2">Looking for Roles:</p>
        <div className="d-flex flex-wrap gap-1 mb-4">
          {team.lookingFor.map((role, idx) => (
            <span key={idx} className="badge badge-violet">
              {role}
            </span>
          ))}
        </div>

        <div className="d-flex gap-2 mt-auto">
          <button
            className="btn btn-primary btn-sm flex-grow-1 rounded-pill"
            onClick={() => sendJoinRequest(team.name)}
          >
            Ask to Join
          </button>
          <Link to={`/teams/${team.id}`} className="btn btn-outline-primary btn-sm rounded-pill">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
