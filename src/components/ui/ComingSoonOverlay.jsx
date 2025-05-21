// src/components/ui/ComingSoonOverlay.jsx
import React from "react";
import { motion } from "framer-motion";

const ComingSoonOverlay = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 z-20 flex items-center justify-center ${className}`}
    >
      {/* Blur background */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/10"></div>

      {/* Badge with shadow and animation */}
      <motion.div
        className="bg-white px-4 py-2 rounded-lg shadow-lg z-30 transform rotate-[-10deg]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: 0.1,
          },
        }}
        whileHover={{
          scale: 1.05,
          rotate: ["-10deg", "0deg", "-10deg"],
          transition: { duration: 0.8 },
        }}
      >
        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          COMING SOON
        </span>
      </motion.div>
    </div>
  );
};

export default ComingSoonOverlay;
