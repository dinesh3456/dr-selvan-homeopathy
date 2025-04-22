// src/context/AppointmentContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import AutoAppointmentPopup from "../components/common/AutoAppointmentPopup";

// Create context
const AppointmentContext = createContext();

// Provider component
export const AppointmentProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Auto-show popup when site loads
  useEffect(() => {
    // Check if the popup has been shown before in this session
    const hasBeenShown = sessionStorage.getItem("appointmentPopupShown");

    if (!hasBeenShown) {
      // Short delay before showing popup to ensure page is fully loaded
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
        // Mark that we've shown the popup in this session
        sessionStorage.setItem("appointmentPopupShown", "true");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <AppointmentContext.Provider
      value={{
        isPopupOpen,
        openPopup,
        closePopup,
      }}
    >
      {children}
      <AutoAppointmentPopup isOpen={isPopupOpen} onClose={closePopup} />
    </AppointmentContext.Provider>
  );
};

// Custom hook for using the appointment context
export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error(
      "useAppointment must be used within an AppointmentProvider"
    );
  }
  return context;
};
