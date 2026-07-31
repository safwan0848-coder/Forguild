import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function CreateTeamPage() {
  const { events, createTeam } = useApp();
  const navigate = useNavigate();

  const [teamName, setTeamName] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(events[0]?.title || '');
  const [roles, setRoles] = useState(['Frontend Dev', 'UX Designer']);
  const [newRoleInput, setNewRoleInput] = useState('');
  const [description, setDescription] = useState('');

  const handleAddRole = () => {
    if (newRoleInput.trim() && !roles.includes(newRoleInput.trim())) {
      setRoles([...roles, newRoleInput.trim()]);
      setNewRoleInput('');
    }
  };

  const handleRemoveRole = (roleToRemove) => {
    setRoles(roles.filter(r => r !== roleToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!teamName.trim()) return;

    createTeam({
      name: teamName,
      event: selectedEvent,
      lookingFor: roles,
      description: description || 'Building an exciting hackathon submission.'
    });

    navigate('/teams');
  };

  return (
    <div className="container py-4 max-w-2xl mx-auto">
      <div className="card p-4 p-md-5">
        <h2 className="fw-bold mb-2">Create Hackathon Team</h2>
        <p className="text-muted-custom mb-4">Form a new team and recruit skilled developers across the platform.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label fw-bold">Team Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Quantum Creators"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Target Event</label>
            <select
              className="form-select"
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
            >
              {events.map(evt => (
                <option key={evt.id} value={evt.title}>
                  {evt.title} ({evt.date})
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Project Concept & Description</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Describe your project idea and goals..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Roles Needed</label>
            <div className="d-flex gap-2 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Smart Contract Dev"
                value={newRoleInput}
                onChange={(e) => setNewRoleInput(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-primary rounded-pill px-4"
                onClick={handleAddRole}
              >
                Add Role
              </button>
            </div>

            <div className="d-flex flex-wrap gap-2">
              {roles.map((role, idx) => (
                <span key={idx} className="badge badge-violet d-inline-flex align-items-center gap-2 fs-6">
                  {role}
                  <i
                    className="bi bi-x-circle-fill text-danger cursor-pointer"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleRemoveRole(role)}
                  ></i>
                </span>
              ))}
            </div>
          </div>

          <div className="d-flex gap-3 justify-content-end pt-3 border-top border-glass">
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill px-4"
              onClick={() => navigate('/teams')}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-gold rounded-pill px-5">
              Publish Team Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
