import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import TeamCard from '../components/TeamCard';

export default function EventDetailsPage() {
  const { id } = useParams();
  const { events, teams, toggleSaveEvent, sendJoinRequest } = useApp();
  const [registered, setRegistered] = useState(false);

  const event = events.find(e => e.id === Number(id)) || events[0];
  const eventTeams = teams.filter(t => t.event.includes(event.title.split(' ')[0]));

  return (
    <div className="container py-4">
      {/* Banner / Header */}
      <div className="card overflow-hidden mb-4">
        <div className="position-relative" style={{ height: '320px' }}>
          <img
            src={event.image}
            alt={event.title}
            className="w-100 h-100"
            style={{ objectFit: 'cover', filter: 'brightness(0.65)' }}
          />
          <div className="position-absolute bottom-0 start-0 p-4 p-md-5 text-white">
            <div className="d-flex gap-2 mb-2">
              <span className="badge badge-gold fs-6">{event.category}</span>
              <span className="badge badge-violet fs-6">{event.prize} Prize Pool</span>
            </div>
            <h1 className="display-4 fw-bold text-white mb-2">{event.title}</h1>
            <p className="lead mb-0 text-white-50">Organized by {event.organizer}</p>
          </div>
        </div>

        <div className="card-body p-4 d-flex flex-wrap align-items-center justify-content-between gap-3 border-top border-glass">
          <div className="d-flex gap-4 flex-wrap">
            <div>
              <span className="text-muted-custom small d-block">Date</span>
              <strong><i className="bi bi-calendar3 text-violet me-1"></i> {event.date}</strong>
            </div>
            <div>
              <span className="text-muted-custom small d-block">Location</span>
              <strong><i className="bi bi-geo-alt text-violet me-1"></i> {event.location}</strong>
            </div>
            <div>
              <span className="text-muted-custom small d-block">Participants</span>
              <strong><i className="bi bi-people text-violet me-1"></i> {event.participants} Devs</strong>
            </div>
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-outline-primary rounded-pill"
              onClick={() => toggleSaveEvent(event.id)}
            >
              <i className={`bi ${event.isSaved ? 'bi-bookmark-fill text-warning' : 'bi-bookmark'} me-2`}></i>
              {event.isSaved ? 'Saved' : 'Save Event'}
            </button>
            <button
              className={`btn ${registered ? 'btn-success' : 'btn-primary'} rounded-pill px-4`}
              onClick={() => {
                setRegistered(true);
                alert(`Successfully registered for ${event.title}!`);
              }}
            >
              {registered ? (
                <>
                  <i className="bi bi-check-circle-fill me-2"></i> Registered
                </>
              ) : (
                'Register Now'
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Main Overview */}
        <div className="col-lg-8">
          <div className="card p-4 mb-4">
            <h3 className="fw-bold mb-3">About the Hackathon</h3>
            <p className="text-muted-custom leading-relaxed mb-4">
              {event.description} Participants will have 48 hours to design, prototype, and pitch their projects to a panel of expert tech judges and venture capitalists.
            </p>

            <h4 className="fw-bold mb-3">Prizes & Awards</h4>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="p-3 rounded-4 border border-warning text-center" style={{ background: 'var(--gold-glow)' }}>
                  <i className="bi bi-trophy-fill fs-2 text-warning mb-2 d-block"></i>
                  <h5 className="fw-bold mb-1">1st Place</h5>
                  <span className="fw-extrabold fs-4 text-gold">$30,000</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 rounded-4 border border-violet text-center" style={{ background: 'var(--violet-glow)' }}>
                  <i className="bi bi-award-fill fs-2 text-violet mb-2 d-block"></i>
                  <h5 className="fw-bold mb-1">2nd Place</h5>
                  <span className="fw-extrabold fs-4 text-violet">$15,000</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 rounded-4 border border-glass text-center">
                  <i className="bi bi-star-fill fs-2 text-secondary mb-2 d-block"></i>
                  <h5 className="fw-bold mb-1">3rd Place</h5>
                  <span className="fw-extrabold fs-4 text-muted-custom">$5,000</span>
                </div>
              </div>
            </div>

            <h4 className="fw-bold mb-3">Rules & Tracks</h4>
            <ul className="text-muted-custom mb-0 ps-3">
              <li className="mb-2">Teams can consist of 1 to 4 members.</li>
              <li className="mb-2">All code must be written during the official hackathon window.</li>
              <li className="mb-2">Projects must include a GitHub repository link and a 2-minute demo video.</li>
              <li>Open source frameworks and public APIs are fully permitted.</li>
            </ul>
          </div>

          {/* Teams for this Event */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="fw-bold mb-0">Teams Recruiting for this Event</h3>
              <Link to="/teams/create" className="btn btn-sm btn-gold rounded-pill">
                <i className="bi bi-plus-lg me-1"></i> Form a Team
              </Link>
            </div>

            <div className="row g-3">
              {eventTeams.length > 0 ? (
                eventTeams.map(t => (
                  <div key={t.id} className="col-md-6">
                    <TeamCard team={t} />
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <div className="card p-4 text-center">
                    <p className="text-muted-custom mb-2">No public teams posted yet.</p>
                    <div>
                      <Link to="/teams/create" className="btn btn-outline-primary btn-sm rounded-pill">
                        Be the first to post a team
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="col-lg-4">
          <div className="card p-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-4">Event Schedule</h4>
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="d-flex gap-3 align-items-start">
                <div className="badge badge-violet p-2"><i className="bi bi-flag-fill fs-5"></i></div>
                <div>
                  <h6 className="mb-0 fw-bold">Opening Ceremony & Keynote</h6>
                  <span className="small text-muted-custom">Day 1 • 9:00 AM EST</span>
                </div>
              </div>

              <div className="d-flex gap-3 align-items-start">
                <div className="badge badge-gold p-2"><i className="bi bi-code-slash fs-5"></i></div>
                <div>
                  <h6 className="mb-0 fw-bold">Hacking Period Begins</h6>
                  <span className="small text-muted-custom">Day 1 • 10:00 AM EST</span>
                </div>
              </div>

              <div className="d-flex gap-3 align-items-start">
                <div className="badge badge-violet p-2"><i className="bi bi-send-fill fs-5"></i></div>
                <div>
                  <h6 className="mb-0 fw-bold">Project Submission Deadline</h6>
                  <span className="small text-muted-custom">Day 3 • 4:00 PM EST</span>
                </div>
              </div>
            </div>

            <hr className="border-glass mb-4" />

            <h5 className="fw-bold mb-3">Organizers & Mentors</h5>
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80"
                alt="Mentor"
                className="rounded-circle border border-warning"
                style={{ width: '45px', height: '45px', objectFit: 'cover' }}
              />
              <div>
                <h6 className="mb-0 fw-bold">Dr. Marcus Vance</h6>
                <span className="small text-muted-custom">Head of AI Research</span>
              </div>
            </div>

            <button className="btn btn-outline-primary w-100 rounded-pill mt-2">
              <i className="bi bi-discord me-2"></i> Join Event Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
