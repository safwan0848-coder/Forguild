import React, { createContext, useContext, useState } from 'react';
import {
  INITIAL_EVENTS,
  INITIAL_TEAMS,
  INITIAL_USER,
  INITIAL_NOTIFICATIONS,
  INITIAL_MESSAGES
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [teams, setTeams] = useState(INITIAL_TEAMS);
  const [user, setUser] = useState(INITIAL_USER);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const toggleSaveEvent = (eventId) => {
    setEvents(prev =>
      prev.map(event => {
        if (event.id === eventId) {
          const nextSaved = !event.isSaved;
          showToast(nextSaved ? `Saved "${event.title}"` : `Removed "${event.title}" from saved list`);
          return { ...event, isSaved: nextSaved };
        }
        return event;
      })
    );
  };

  const sendJoinRequest = (teamName) => {
    showToast(`Join request sent to ${teamName}!`);
  };

  const createTeam = (newTeam) => {
    const teamObj = {
      id: teams.length + 1,
      ...newTeam,
      size: 1,
      maxSize: 4,
      leader: user.name,
      leaderAvatar: user.avatar
    };
    setTeams([teamObj, ...teams]);
    showToast(`Team "${newTeam.name}" created successfully!`);
  };

  const addMessage = (text) => {
    if (!text.trim()) return;
    const msgObj = {
      id: messages.length + 1,
      sender: `${user.name} (You)`,
      avatar: user.avatar,
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSelf: true
    };
    setMessages(prev => [...prev, msgObj]);
  };

  const markNotificationRead = (id) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
    showToast("Notifications cleared!");
  };

  const updateUserProfile = (updatedData) => {
    setUser(prev => ({ ...prev, ...updatedData }));
    showToast("Profile updated successfully!");
  };

  return (
    <AppContext.Provider
      value={{
        events,
        teams,
        user,
        notifications,
        messages,
        toastMessage,
        toggleSaveEvent,
        sendJoinRequest,
        createTeam,
        addMessage,
        markNotificationRead,
        clearNotifications,
        updateUserProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
