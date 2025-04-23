// src/components/common/AppointmentButton.jsx
import React from "react";
import { motion } from "framer-motion";
import { useAppointment } from "../../context/AppointmentContext";

const AppointmentButton = ({
  className = "",
  variant = "accent", // Changed default to accent
  size = "md",
  text = "Book Appointment",
}) => {
  const { openPopup } = useAppointment();

  // Button size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  // Button variant classes
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-md",
    accent: "bg-accent text-white hover:bg-accent-dark shadow-md", // New orange variant
    outline: "border-2 border-primary text-primary bg-white hover:bg-blue-50",
    "outline-accent":
      "border-2 border-accent text-accent bg-white hover:bg-orange-50", // New orange outline
    secondary: "bg-blue-100 text-primary hover:bg-blue-200",
  };

  // Animation variants with updated shadow for accent
  const buttonVariants = {
    hover: variant.includes("accent")
      ? {
          scale: 1.05,
          boxShadow: "0 10px 15px -3px rgba(255, 107, 53, 0.3)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        }
      : {
          scale: 1.05,
          boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        },
    tap: { scale: 0.95 },
  };

  return (
    <motion.button
      onClick={openPopup}
      className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-full font-medium transition inline-flex items-center justify-center ${className}`}
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      <span>{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </motion.button>
  );
};

export default AppointmentButton;
