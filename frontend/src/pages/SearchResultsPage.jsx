import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import EventCard from '../components/EventCard';
import TeamCard from '../components/TeamCard';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { events, teams } = useApp();

  const matchingEvents = events.filter(e =>
    e.title.toLowerCase().includes(query.toLowerCase()) ||
    e.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
    e.category.toLowerCase().includes(query.toLowerCase())
  );

  const matchingTeams = teams.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.event.toLowerCase().includes(query.toLowerCase()) ||
    t.lookingFor.some(r => r.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h1 className="fw-bold mb-1">Search Results for "{query}"</h1>
        <p className="text-muted-custom mb-0">Found {matchingEvents.length} events and {matchingTeams.length} teams.</p>
      </div>

      <h3 className="fw-bold mb-3">Hackathons</h3>
      {matchingEvents.length > 0 ? (
        <div className="row g-4 mb-5">
          {matchingEvents.map(evt => (
            <div key={evt.id} className="col-md-6 col-lg-4">
              <EventCard event={evt} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-custom mb-5">No hackathons matched your search.</p>
      )}

      <h3 className="fw-bold mb-3">Recruiting Teams</h3>
      {matchingTeams.length > 0 ? (
        <div className="row g-4">
          {matchingTeams.map(t => (
            <div key={t.id} className="col-md-6">
              <TeamCard team={t} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-custom">No teams matched your search.</p>
      )}
    </div>
  );
}
