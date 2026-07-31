import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function MessagesPage() {
  const { messages, addMessage } = useApp();
  const [inputText, setInputText] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      addMessage(inputText);
      setInputText('');
    }
  };

  return (
    <div className="container py-4">
      <div className="card p-0 overflow-hidden" style={{ minHeight: '650px' }}>
        <div className="row g-0 h-100">
          {/* Chat Channels Sidebar */}
          <div className="col-md-4 border-end border-glass p-3">
            <h5 className="fw-bold mb-3 px-2">Team Channels</h5>
            <div className="d-flex flex-column gap-1">
              <div className="p-3 rounded-4 bg-violet text-white d-flex align-items-center justify-content-between cursor-pointer">
                <div>
                  <h6 className="mb-0 fw-bold">Neural Ninjas</h6>
                  <span className="small text-white-50">Global AI Hackathon</span>
                </div>
                <span className="badge bg-warning text-dark rounded-pill">Active</span>
              </div>

              <div className="p-3 rounded-4 sidebar-link d-flex align-items-center justify-content-between cursor-pointer">
                <div>
                  <h6 className="mb-0 fw-bold">Block Builders</h6>
                  <span className="small text-muted-custom">FinTech Innovators</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Message Window */}
          <div className="col-md-8 d-flex flex-column justify-content-between p-4">
            {/* Header */}
            <div className="border-bottom border-glass pb-3 mb-3 d-flex align-items-center justify-content-between">
              <div>
                <h5 className="fw-bold mb-0"># Neural Ninjas Workspace</h5>
                <span className="small text-muted-custom">3 Members • Global AI Hackathon 2026</span>
              </div>
              <span className="badge badge-gold">Online Sync</span>
            </div>

            {/* Messages Feed */}
            <div className="flex-grow-1 overflow-auto d-flex flex-column gap-3 mb-4 pe-2" style={{ maxHeight: '420px' }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`d-flex gap-3 align-items-start ${
                    msg.isSelf ? 'flex-row-reverse align-self-end' : ''
                  }`}
                  style={{ maxWidth: '80%' }}
                >
                  <img
                    src={msg.avatar}
                    alt={msg.sender}
                    className="rounded-circle border border-warning"
                    style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  />
                  <div>
                    <div className={`d-flex align-items-center gap-2 mb-1 ${msg.isSelf ? 'justify-content-end' : ''}`}>
                      <span className="small fw-bold">{msg.sender}</span>
                      <span className="text-muted-custom" style={{ fontSize: '0.75rem' }}>{msg.time}</span>
                    </div>
                    <div
                      className={`p-3 rounded-4 ${
                        msg.isSelf
                          ? 'bg-violet text-white rounded-top-end-0'
                          : 'bg-surface border border-glass text-main rounded-top-start-0'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="d-flex gap-2">
              <input
                type="text"
                className="form-control rounded-pill px-4"
                placeholder="Type a message to your team..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button type="submit" className="btn btn-gold rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                <i className="bi bi-send-fill fs-5"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
