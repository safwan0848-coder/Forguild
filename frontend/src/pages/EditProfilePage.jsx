import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function EditProfilePage() {
  const { user, updateUserProfile } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [title, setTitle] = useState(user.title);
  const [bio, setBio] = useState(user.bio);
  const [location, setLocation] = useState(user.location);
  const [skills, setSkills] = useState(user.skills.join(', '));
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile({
      name,
      title,
      bio,
      location,
      avatar,
      skills: skills.split(',').map(s => s.trim()).filter(Boolean)
    });
    navigate('/profile');
  };

  return (
    <div className="container py-4 max-w-2xl mx-auto">
      <div className="card p-4 p-md-5">
        <h2 className="fw-bold mb-2">Edit Developer Profile</h2>
        <p className="text-muted-custom mb-4">Update your skills, bio, and social links to attract top teammates.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-center">
            <img
              src={avatar}
              alt="Avatar Preview"
              className="rounded-circle border border-3 border-warning shadow mb-3"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <div>
              <label className="form-label fw-bold">Avatar Image URL</label>
              <input
                type="text"
                className="form-control"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </div>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label fw-bold">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-bold">Professional Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Location</label>
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Bio</label>
            <textarea
              className="form-control"
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Skills (comma-separated)</label>
            <input
              type="text"
              className="form-control"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="React, Python, TensorFlow, TypeScript..."
            />
          </div>

          <div className="d-flex gap-3 justify-content-end pt-3 border-top border-glass">
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill px-4"
              onClick={() => navigate('/profile')}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-gold rounded-pill px-5">
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
