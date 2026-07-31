import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import EventCard from '../components/EventCard';

export default function DashboardPage() {
  const { user, events, teams, notifications } = useApp();
  const savedEvents = events.filter(e => e.isSaved);

  return (
    <div className="container py-4">
      {/* Dashboard Top Banner */}
      <div className="card p-4 p-md-5 mb-4 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--violet-glow) 0%, var(--gold-glow) 100%)' }}>
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="rounded-circle border border-2 border-warning shadow"
                style={{ width: '64px', height: '64px', objectFit: 'cover' }}
              />
              <div>
                <h2 className="fw-bold mb-0">Welcome back, {user.name}!</h2>
                <span className="text-muted-custom small">{user.title}</span>
              </div>
            </div>
            <p className="text-muted-custom mb-0">
              You are currently registered for <strong>Global AI Hackathon 2026</strong> and active in 2 teams.
            </p>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <Link to="/teams/create" className="btn btn-gold rounded-pill px-4">
              <i className="bi bi-plus-lg me-1"></i> Form New Team
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="row g-4 mb-4">
        <div className="col-6 col-lg-3">
          <div className="card p-4 text-center">
            <h3 className="fw-bold text-violet mb-1">{user.stats.eventsParticipated}</h3>
            <span className="small text-muted-custom">Events Joined</span>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card p-4 text-center">
            <h3 className="fw-bold text-gold mb-1">{user.stats.teamsJoined}</h3>
            <span className="small text-muted-custom">Active Teams</span>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card p-4 text-center">
            <h3 className="fw-bold text-success mb-1">{user.stats.prizesWon}</h3>
            <span className="small text-muted-custom">Prizes Awarded</span>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card p-4 text-center">
            <h3 className="fw-bold text-info mb-1">{savedEvents.length}</h3>
            <span className="small text-muted-custom">Saved Hackathons</span>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Main Column */}
        <div className="col-lg-8">
          <div className="card p-4 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold mb-0">Active Team Submissions</h4>
              <Link to="/teams" className="btn btn-sm btn-outline-primary rounded-pill">Find More Teams</Link>
            </div>

            <div className="d-flex flex-column gap-3">
              {teams.slice(0, 2).map(team => (
                <div key={team.id} className="p-3 border border-glass rounded-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                  <div>
                    <h5 className="fw-bold mb-1">{team.name}</h5>
                    <p className="small text-muted-custom mb-0">Event: {team.event}</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge badge-gold">{team.size}/{team.maxSize} Members</span>
                    <Link to={`/teams/${team.id}`} className="btn btn-sm btn-primary rounded-pill">Team Workspace</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bookmarked Hackathons Preview */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold mb-0">Bookmarked Events</h4>
              <Link to="/saved-events" className="btn btn-sm btn-outline-primary rounded-pill">View All Saved</Link>
            </div>

            <div className="row g-3">
              {savedEvents.slice(0, 2).map(event => (
                <div key={event.id} className="col-md-6">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Activity & Notifications */}
        <div className="col-lg-4">
          <div className="card p-4 mb-4">
            <h5 className="fw-bold mb-3">Recent Notifications</h5>
            <div className="d-flex flex-column gap-3 mb-3">
              {notifications.slice(0, 3).map(notif => (
                <div key={notif.id} className="d-flex gap-3 align-items-start border-bottom border-glass pb-2">
                  <i className="bi bi-bell-fill text-violet fs-5 mt-1"></i>
                  <div>
                    <h6 className="mb-0 fw-bold small">{notif.title}</h6>
                    <p className="small text-muted-custom mb-0" style={{ fontSize: '0.85rem' }}>{notif.message}</p>
                    <span className="text-muted-custom" style={{ fontSize: '0.75rem' }}>{notif.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/notifications" className="btn btn-sm btn-outline-primary w-100 rounded-pill">
              Notification Center
            </Link>
          </div>

          <div className="card p-4">
            <h5 className="fw-bold mb-3">Quick Navigation</h5>
            <div className="d-flex flex-column gap-2">
              <Link to="/messages" className="sidebar-link">
                <i className="bi bi-chat-dots-fill text-violet"></i> Team Chat Room
              </Link>
              <Link to="/profile" className="sidebar-link">
                <i className="bi bi-person-fill text-violet"></i> Edit Public Profile
              </Link>
              <Link to="/teams/requests" className="sidebar-link">
                <i className="bi bi-person-plus-fill text-violet"></i> Team Join Requests
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
