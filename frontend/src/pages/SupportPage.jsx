import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    question: 'How do I find a hackathon?',
    answer: 'Open Explore Events. You can browse listings, then open an event for the date, location, prize, and the organizer’s official site.'
  },
  {
    question: 'Does Forguild register me for an event?',
    answer: 'No. Forguild is for discovery and team building. The registration link on an event sends you to the organizer’s website. That organizer handles signup, fees, and event rules.'
  },
  {
    question: 'How do I join a team?',
    answer: 'Open Find a Team, choose a team, and use Apply to Join Team or apply for a listed role. The team leader reviews the request and decides.'
  },
  {
    question: 'How do I start a team?',
    answer: 'Use Create Team. Describe the project and the roles you still need. Other members can then apply from your team page.'
  },
  {
    question: 'How do I save an event?',
    answer: 'Save an event from its page. It stays on Saved Events so you can return before the deadline.'
  },
  {
    question: 'Who can see my profile?',
    answer: 'Members can see the name, title, bio, location, skills, and avatar you publish. That is how people decide who to invite. Your password is never shown. Details are in the Privacy Policy.'
  },
  {
    question: 'I cannot sign in.',
    answer: 'Use the email and password from registration. If that still fails, email support@forguild.app from the address on the account and describe what you see on screen.'
  },
  {
    question: 'How do I delete my account?',
    answer: 'Email support@forguild.app from your account email with the subject “Delete my account”. We will remove the account and the profile tied to it, except a limited record required for safety or legal reasons. You can also send that request with the form on this page.'
  }
];

const TOPICS = [
  'Account access',
  'Teams and applications',
  'Events and listings',
  'Privacy or data request',
  'Report a member',
  'Something else'
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Forguild Support] ${topic}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`);
    window.location.href = `mailto:support@forguild.app?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <div className="d-inline-flex align-items-center gap-2 badge badge-violet mb-3 px-3 py-2">
          <i className="bi bi-life-preserver"></i> Help center
        </div>
        <h1 className="fw-bold mb-2">Support</h1>
        <p className="text-muted-custom mb-0 mx-auto" style={{ maxWidth: '640px' }}>
          Answers for events, teams, and accounts. We reply to support@forguild.app within two business days.
        </p>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <a href="mailto:support@forguild.app" className="card card-static p-4 h-100 text-decoration-none">
            <i className="bi bi-envelope-fill text-violet fs-3"></i>
            <h2 className="h5 fw-bold mt-3 mb-2">Email</h2>
            <p className="text-muted-custom mb-0">support@forguild.app for account, privacy, and safety issues.</p>
          </a>
        </div>
        <div className="col-md-4">
          <Link to="/events" className="card card-static p-4 h-100 text-decoration-none">
            <i className="bi bi-calendar-event text-gold fs-3"></i>
            <h2 className="h5 fw-bold mt-3 mb-2">Events</h2>
            <p className="text-muted-custom mb-0">Browse hackathons, save one, and open the organizer’s registration site.</p>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/teams" className="card card-static p-4 h-100 text-decoration-none">
            <i className="bi bi-people-fill text-violet fs-3"></i>
            <h2 className="h5 fw-bold mt-3 mb-2">Teams</h2>
            <p className="text-muted-custom mb-0">Find a team, apply for an open role, or create your own.</p>
          </Link>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <h2 className="h4 fw-bold mb-3">Common questions</h2>
          <div className="d-flex flex-column gap-3">
            {FAQS.map((item, index) => {
              const open = openIndex === index;
              return (
                <div key={item.question} className="card card-static">
                  <button
                    type="button"
                    className="bg-transparent border-0 text-start w-100 p-4 d-flex justify-content-between align-items-center gap-3"
                    style={{ color: 'inherit' }}
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                  >
                    <span className="fw-bold">{item.question}</span>
                    <i className={`bi ${open ? 'bi-dash-lg' : 'bi-plus-lg'} text-violet`}></i>
                  </button>
                  {open && (
                    <div className="px-4 pb-4 text-muted-custom">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card card-static p-4 p-md-5">
            <h2 className="h4 fw-bold mb-2">Contact support</h2>
            <p className="text-muted-custom small mb-4">
              This opens your email app with the message addressed to Forguild. Include the account email if the request is about access or deletion.
            </p>

            {sent && (
              <div className="alert alert-success rounded-4 small" role="status">
                Your email app should be open with this message. If it did not open, write to support@forguild.app and include the same details.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="support-name" className="form-label fw-bold">Name</label>
                <input
                  id="support-name"
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="support-email" className="form-label fw-bold">Email</label>
                <input
                  id="support-email"
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="support-topic" className="form-label fw-bold">Topic</label>
                <select
                  id="support-topic"
                  className="form-select"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  {TOPICS.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="support-message" className="form-label fw-bold">Message</label>
                <textarea
                  id="support-message"
                  className="form-control"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 rounded-pill py-3 fw-bold">
                Email support
              </button>
            </form>
          </div>

          <p className="small text-muted-custom mt-3 mb-0 text-center">
            <Link to="/privacy" className="text-muted-custom">Privacy Policy</Link>
            <span className="mx-2">·</span>
            <Link to="/terms" className="text-muted-custom">Terms of Service</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
