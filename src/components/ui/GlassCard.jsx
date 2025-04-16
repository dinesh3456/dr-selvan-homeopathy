// src/components/ui/GlassCard.jsx
import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  hoverEffect = true,
  animate = true,
  darkMode = false,
  delay = 0,
}) => {
  const baseClasses = `${darkMode ? "glass-dark" : "glass-card"} ${className}`;

  // Hover animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: delay,
      },
    },
    hover: hoverEffect
      ? {
          y: -5,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        }
      : {},
  };

  if (!animate) {
    return <div className={baseClasses}>{children}</div>;
  }

  return (
    <motion.div
      className={baseClasses}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
