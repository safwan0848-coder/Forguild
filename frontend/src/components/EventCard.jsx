import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function EventCard({ event }) {
  const { toggleSaveEvent } = useApp();

  return (
    <div className="card h-100">
      <div className="position-relative">
        <img
          src={event.image}
          className="card-img-top"
          alt={event.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <button
          className="btn btn-sm btn-light position-absolute top-0 end-0 m-3 shadow-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
          style={{ width: '38px', height: '38px' }}
          onClick={(e) => {
            e.preventDefault();
            toggleSaveEvent(event.id);
          }}
          title={event.isSaved ? "Remove Bookmark" : "Bookmark Event"}
        >
          <i
            className={`bi ${
              event.isSaved ? 'bi-bookmark-fill text-warning' : 'bi-bookmark text-dark'
            } fs-5`}
          ></i>
        </button>
      </div>

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge badge-violet">{event.tags[0]}</span>
          <span className="small text-muted-custom">
            <i className="bi bi-people-fill me-1 text-violet"></i> {event.participants} registered
          </span>
        </div>

        <h5 className="card-title text-truncate mb-2" title={event.title}>
          {event.title}
        </h5>

        <p className="card-text text-muted-custom small mb-1">
          <i className="bi bi-calendar3 me-1 text-violet"></i> {event.date}
        </p>

        <p className="card-text text-muted-custom small mb-3">
          <i className="bi bi-geo-alt-fill me-1 text-violet"></i> {event.location}
        </p>

        <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-glass">
          <span className="small fw-bold text-gold">
            <i className="bi bi-trophy-fill me-1"></i> {event.prize}
          </span>
          <Link to={`/events/${event.id}`} className="btn btn-sm btn-outline-primary rounded-pill">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
