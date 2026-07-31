import React from 'react';
import { useApp } from '../context/AppContext';

export default function NotificationsPage() {
  const { notifications, markNotificationRead, clearNotifications } = useApp();

  return (
    <div className="container py-4 max-w-2xl mx-auto">
      <div className="card p-4 p-md-5">
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-glass pb-3">
          <div>
            <h2 className="fw-bold mb-0">Notifications Feed</h2>
            <span className="small text-muted-custom">Stay updated on team invites, event start dates, and messages.</span>
          </div>
          {notifications.length > 0 && (
            <button className="btn btn-sm btn-outline-primary rounded-pill" onClick={clearNotifications}>
              Clear All
            </button>
          )}
        </div>

        {notifications.length > 0 ? (
          <div className="d-flex flex-column gap-3">
            {notifications.map(notif => (
              <div
                key={notif.id}
                className={`p-3 rounded-4 border ${
                  notif.read ? 'border-glass opacity-75' : 'border-violet'
                } d-flex align-items-start justify-content-between gap-3`}
                style={{ background: notif.read ? 'transparent' : 'var(--violet-glow)' }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-violet text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-bell-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{notif.title}</h6>
                    <p className="small text-muted-custom mb-1">{notif.message}</p>
                    <span className="text-muted-custom" style={{ fontSize: '0.75rem' }}>{notif.time}</span>
                  </div>
                </div>

                {!notif.read && (
                  <button
                    className="btn btn-sm btn-link text-violet p-0"
                    onClick={() => markNotificationRead(notif.id)}
                    title="Mark as read"
                  >
                    <i className="bi bi-check2-all fs-4"></i>
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <i className="bi bi-bell-slash fs-1 text-violet mb-3 d-block"></i>
            <h5>All clear! No new notifications.</h5>
          </div>
        )}
      </div>
    </div>
  );
}
