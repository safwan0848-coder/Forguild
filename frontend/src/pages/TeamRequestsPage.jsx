import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function TeamRequestsPage() {
  const { user } = useApp();
  const [requests, setRequests] = useState([
    {
      id: 1,
      applicant: "Michael Scott",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      role: "Frontend Developer",
      team: "Neural Ninjas",
      status: "pending",
      date: "Today at 9:30 AM"
    },
    {
      id: 2,
      applicant: "Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      role: "UX Designer",
      team: "Neural Ninjas",
      status: "pending",
      date: "Yesterday"
    }
  ]);

  const handleAction = (id, newStatus) => {
    setRequests(prev =>
      prev.map(r => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-1">Incoming Team Requests</h2>
      <p className="text-muted-custom mb-4">Manage developers applying to join your hackathon teams.</p>

      <div className="row g-4">
        {requests.map(req => (
          <div key={req.id} className="col-md-6">
            <div className="card p-4">
              <div className="d-flex align-items-center justify-content-between mb-3 border-bottom border-glass pb-3">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={req.avatar}
                    alt={req.applicant}
                    className="rounded-circle border border-warning"
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  <div>
                    <h5 className="mb-0 fw-bold">{req.applicant}</h5>
                    <span className="small text-muted-custom">Applied for <strong>{req.role}</strong></span>
                  </div>
                </div>
                <span className="small text-muted-custom">{req.date}</span>
              </div>

              <p className="small text-muted-custom mb-3">
                Target Team: <strong className="text-violet">{req.team}</strong>
              </p>

              <div className="d-flex gap-2 justify-content-end">
                {req.status === 'pending' ? (
                  <>
                    <button
                      className="btn btn-sm btn-outline-primary rounded-pill px-3"
                      onClick={() => handleAction(req.id, 'rejected')}
                    >
                      Decline
                    </button>
                    <button
                      className="btn btn-sm btn-gold rounded-pill px-4"
                      onClick={() => handleAction(req.id, 'accepted')}
                    >
                      Accept Member
                    </button>
                  </>
                ) : (
                  <span
                    className={`badge ${
                      req.status === 'accepted' ? 'bg-success text-white' : 'bg-secondary text-white'
                    } rounded-pill fs-6 px-3 py-2`}
                  >
                    {req.status === 'accepted' ? 'Member Accepted' : 'Declined'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
