// components/common/LoadingSpinner.jsx
import React from "react";
import { motion } from "framer-motion";

// Modern animated loading spinner with customizable colors
const LoadingSpinner = ({
  size = "md",
  color = "primary",
  secondaryColor = "secondary",
  thickness = "normal",
  text = "",
}) => {
  // Size mapping
  const sizeMap = {
    xs: "h-4 w-4",
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  // Color mapping to Tailwind classes or custom colors
  const colorMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    white: "text-white",
  };

  // Thickness mapping
  const thicknessMap = {
    thin: "border-2",
    normal: "border-3",
    thick: "border-4",
  };

  // Animation variants
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1.5,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const dotVariants = {
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        {/* Main spinning circle */}
        <motion.div
          className={`${sizeMap[size]} ${thicknessMap[thickness]} rounded-full border-t-transparent border-solid ${colorMap[color]}`}
          style={{ borderColor: "currentColor", borderTopColor: "transparent" }}
          variants={spinnerVariants}
          animate="animate"
        />

        {/* Secondary spinner (opposite direction) */}
        <motion.div
          className={`absolute inset-0 ${sizeMap[size]} ${thicknessMap[thickness]} rounded-full border-b-transparent border-l-transparent border-solid ${colorMap[secondaryColor]}`}
          style={{
            borderColor: "currentColor",
            borderBottomColor: "transparent",
            borderLeftColor: "transparent",
            opacity: 0.5,
          }}
          variants={spinnerVariants}
          animate={{
            rotate: -360,
            transition: {
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        />

        {/* Center dot */}
        <motion.div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${colorMap[color]}`}
          style={{
            backgroundColor: "currentColor",
            width:
              size === "xs"
                ? "4px"
                : size === "sm"
                  ? "6px"
                  : size === "md"
                    ? "8px"
                    : size === "lg"
                      ? "12px"
                      : "16px",
            height:
              size === "xs"
                ? "4px"
                : size === "sm"
                  ? "6px"
                  : size === "md"
                    ? "8px"
                    : size === "lg"
                      ? "12px"
                      : "16px",
          }}
          variants={dotVariants}
          animate="animate"
        />
      </div>

      {/* Optional loading text */}
      {text && (
        <motion.p
          className={`mt-3 text-sm font-medium ${colorMap[color]}`}
          variants={pulseVariants}
          animate="animate"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Loading overlay that covers the full screen or container
export const LoadingOverlay = ({
  isLoading,
  children,
  fullScreen = false,
  backgroundColor = "rgba(255, 255, 255, 0.8)",
  spinnerProps = {},
}) => {
  return (
    <div className="relative">
      {children}

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className={`${fullScreen ? "fixed inset-0 z-50" : "absolute inset-0 z-10"} flex items-center justify-center`}
            style={{ backgroundColor }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LoadingSpinner {...spinnerProps} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingSpinner;
