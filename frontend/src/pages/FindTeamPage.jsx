import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import TeamCard from '../components/TeamCard';

export default function FindTeamPage() {
  const { teams } = useApp();
  const [roleFilter, setRoleFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const roles = ['All', 'Frontend', 'UX Designer', 'Smart Contract Dev', 'Fullstack Engineer', 'IoT Specialist'];

  const filteredTeams = teams.filter(team => {
    const matchesRole = roleFilter === 'All' || team.lookingFor.some(r => r.toLowerCase().includes(roleFilter.toLowerCase()));
    const matchesQuery = team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesQuery;
  });

  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="fw-bold mb-1">Find Your Hackathon Team</h1>
          <p className="text-muted-custom mb-0">Connect with leaders recruiting specialized talent for upcoming competitions.</p>
        </div>
        <Link to="/teams/create" className="btn btn-gold rounded-pill px-4">
          <i className="bi bi-plus-circle me-2"></i> Create a Team
        </Link>
      </div>

      {/* Filter Toolbar */}
      <div className="card p-3 mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-5">
            <div className="input-group">
              <span className="input-group-text bg-transparent border-end-0 text-violet">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                placeholder="Search team by name or event..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-7">
            <div className="d-flex gap-2 flex-wrap justify-content-md-end align-items-center">
              <span className="small text-muted-custom me-2 fw-bold">Required Role:</span>
              {roles.map(role => (
                <button
                  key={role}
                  className={`btn btn-sm ${
                    roleFilter === role ? 'btn-primary' : 'btn-outline-primary'
                  } rounded-pill`}
                  onClick={() => setRoleFilter(role)}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Teams Grid */}
      {filteredTeams.length > 0 ? (
        <div className="row g-4">
          {filteredTeams.map(team => (
            <div key={team.id} className="col-md-6 col-lg-4">
              <TeamCard team={team} />
            </div>
          ))}
        </div>
      ) : (
        <div className="card p-5 text-center my-5">
          <i className="bi bi-people fs-1 text-violet mb-3"></i>
          <h4>No recruiting teams found</h4>
          <p className="text-muted-custom">Try selecting a different role or resetting search keywords.</p>
          <div>
            <button
              className="btn btn-outline-primary rounded-pill"
              onClick={() => {
                setRoleFilter('All');
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
