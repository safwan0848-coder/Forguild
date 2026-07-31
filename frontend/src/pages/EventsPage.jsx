import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import EventCard from '../components/EventCard';

export default function EventsPage() {
  const { events } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & ML', 'Web3 & Blockchain', 'Sustainability', 'Cybersecurity'];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesQuery = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="fw-bold mb-1">Explore Hackathons</h1>
          <p className="text-muted-custom mb-0">Discover upcoming global competitions, workshops, and high-prize jams.</p>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="card p-3 mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text bg-transparent border-end-0 text-violet">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                placeholder="Filter events by keyword or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex gap-2 flex-wrap justify-content-md-end">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`btn btn-sm ${
                    selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'
                  } rounded-pill`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Events */}
      {filteredEvents.length > 0 ? (
        <div className="row g-4">
          {filteredEvents.map(event => (
            <div key={event.id} className="col-md-6 col-lg-4">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="card p-5 text-center my-5">
          <i className="bi bi-emoji-frown fs-1 text-violet mb-3"></i>
          <h4>No hackathons found</h4>
          <p className="text-muted-custom">Try adjusting your category filter or search terms.</p>
          <div>
            <button
              className="btn btn-outline-primary rounded-pill"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
