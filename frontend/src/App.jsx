import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider, useApp } from './context/AppContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import FindTeamPage from './pages/FindTeamPage';
import TeamDetailsPage from './pages/TeamDetailsPage';
import CreateTeamPage from './pages/CreateTeamPage';
import TeamRequestsPage from './pages/TeamRequestsPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import SavedEventsPage from './pages/SavedEventsPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import SupportPage from './pages/SupportPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function GlobalToast() {
  const { toastMessage } = useApp();
  if (!toastMessage) return null;

  return (
    <div
      className="position-fixed bottom-0 end-0 m-4 p-3 rounded-4 bg-violet text-white shadow-lg z-3 border border-warning animate__animated animate__fadeInUp"
      style={{ zIndex: 1090, minWidth: '280px' }}
    >
      <div className="d-flex align-items-center gap-2">
        <i className="bi bi-info-circle-fill fs-5 text-warning"></i>
        <span className="fw-semibold small">{toastMessage}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <ScrollToTop />
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/events/:id" element={<EventDetailsPage />} />
                <Route path="/teams" element={<FindTeamPage />} />
                <Route path="/teams/:id" element={<TeamDetailsPage />} />
                <Route path="/teams/create" element={<CreateTeamPage />} />
                <Route path="/teams/requests" element={<TeamRequestsPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/edit" element={<EditProfilePage />} />
                <Route path="/saved-events" element={<SavedEventsPage />} />
                <Route path="/messages" element={<MessagesPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/support" element={<SupportPage />} />
              </Routes>
            </main>
            <Footer />
            <GlobalToast />
          </div>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}
