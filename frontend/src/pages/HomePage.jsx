import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import EventCard from '../components/EventCard';
import TeamCard from '../components/TeamCard';

export default function HomePage() {
  const { events, teams } = useApp();

  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 text-center my-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-inline-flex align-items-center gap-2 badge badge-violet mb-4 px-3 py-2 fs-6">
                <i className="bi bi-stars text-warning"></i> Premier Hackathon & Team Platform
              </div>
              <h1 className="display-3 fw-extrabold mb-4">
                Build the future with <br />
                <span className="text-gradient">top developers worldwide.</span>
              </h1>
              <p className="lead text-muted-custom mb-5 px-md-5">
                Join high-stakes hackathons, assemble elite dream teams, and showcase your web, AI, and Web3 projects to top tech companies.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/events" className="btn btn-primary btn-lg px-4 py-3 rounded-pill fw-bold">
                  Explore Events <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link to="/teams" className="btn btn-gold btn-lg px-4 py-3 rounded-pill fw-bold">
                  Find Teammates <i className="bi bi-people-fill ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hackathons Preview */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h6 className="text-violet fw-bold text-uppercase tracking-wide mb-1">Upcoming</h6>
              <h2 className="mb-0">Featured Hackathons</h2>
            </div>
            <Link to="/events" className="btn btn-outline-primary rounded-pill">
              View All <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="row g-4">
            {events.slice(0, 3).map(event => (
              <div key={event.id} className="col-md-6 col-lg-4">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Teams Preview */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h6 className="text-gold fw-bold text-uppercase tracking-wide mb-1">Recruiting Now</h6>
              <h2 className="mb-0">Teams Seeking Teammates</h2>
            </div>
            <Link to="/teams" className="btn btn-outline-primary rounded-pill">
              Find Teams <i className="bi bi-people ms-1"></i>
            </Link>
          </div>

          <div className="row g-4">
            {teams.slice(0, 2).map(team => (
              <div key={team.id} className="col-md-6">
                <TeamCard team={team} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Forguild */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h2 className="display-5 fw-bold mb-3">
              Why Developers Choose <span className="text-violet">Forge</span><span className="text-gold">Guild</span>
            </h2>
            <p className="text-muted-custom lead">
              The end-to-end platform for tech events, team matching, and global recognition.
            </p>
          </div>

          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="bg-violet text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mx-auto shadow" style={{ width: '70px', height: '70px' }}>
                  <i className="bi bi-people fs-2"></i>
                </div>
                <h4>Instant Team Matching</h4>
                <p className="text-muted-custom">
                  Find teammates based on required skill sets, role gaps, and time zones with automated matchmaking.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mx-auto shadow" style={{ width: '70px', height: '70px' }}>
                  <i className="bi bi-trophy fs-2"></i>
                </div>
                <h4>Massive Prize Pools</h4>
                <p className="text-muted-custom">
                  Participate in verified hackathons with over $500,000+ in global cash prizes, grants, and venture support.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mx-auto shadow" style={{ width: '70px', height: '70px' }}>
                  <i className="bi bi-chat-dots fs-2"></i>
                </div>
                <h4>Real-time Team Workspace</h4>
                <p className="text-muted-custom">
                  Integrated real-time chat, task management, notification alerts, and direct submission pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-5">
        <div className="container">
          <div className="card p-5 text-center position-relative overflow-hidden border-2 border-warning" style={{ background: 'linear-gradient(135deg, var(--violet-glow) 0%, var(--gold-glow) 100%)' }}>
            <h2 className="display-6 fw-bold mb-3">Ready to build your next big project?</h2>
            <p className="lead text-muted-custom mb-4 max-w-xl mx-auto">
              Join thousands of engineers, designers, and innovators building groundbreaking solutions today.
            </p>
            <div>
              <Link to="/register" className="btn btn-gold btn-lg px-5 rounded-pill fw-bold">
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
