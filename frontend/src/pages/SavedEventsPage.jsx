import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import EventCard from '../components/EventCard';

export default function SavedEventsPage() {
  const { events } = useApp();
  const savedEvents = events.filter(e => e.isSaved);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold mb-1">Saved Hackathons ({savedEvents.length})</h1>
          <p className="text-muted-custom mb-0">Events you bookmarked to review or join teams for.</p>
        </div>
        <Link to="/events" className="btn btn-outline-primary rounded-pill">
          Explore All Events
        </Link>
      </div>

      {savedEvents.length > 0 ? (
        <div className="row g-4">
          {savedEvents.map(event => (
            <div key={event.id} className="col-md-6 col-lg-4">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="card p-5 text-center my-5">
          <i className="bi bi-bookmark-x fs-1 text-violet mb-3"></i>
          <h4>No saved hackathons yet</h4>
          <p className="text-muted-custom">Click the bookmark icon on any event card to save it for later.</p>
          <div>
            <Link to="/events" className="btn btn-gold rounded-pill px-4">
              Browse Events
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
