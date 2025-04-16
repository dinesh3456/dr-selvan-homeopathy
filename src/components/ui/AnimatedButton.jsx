// src/components/ui/AnimatedButton.jsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedButton = ({
  href,
  children,
  className = "",
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  disabled = false,
  onClick,
  fullWidth = false,
  ariaLabel,
  type = "button",
  animate = true,
}) => {
  // Define button variants
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    teal: "btn-teal",
    glass: "glass-button",
  };

  // Define button sizes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  // Framer motion animation variants
  const buttonVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: animate
      ? {
          y: -5,
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        }
      : {},
    tap: animate ? { scale: 0.95 } : {},
    disabled: {
      opacity: 0.7,
      cursor: "not-allowed",
    },
  };

  // Icon animation variants
  const iconVariants = {
    hover: animate
      ? {
          x: iconPosition === "right" ? 5 : -5,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        }
      : {},
  };

  // Combine classes
  const combinedClasses = `
    ${variants[variant] || variants.primary} 
    ${sizeClasses[size]} 
    ${fullWidth ? "w-full" : ""} 
    ${disabled ? "opacity-70 cursor-not-allowed" : ""} 
    ${className}
  `;

  // Create button content with icon
  const buttonContent = (
    <>
      {icon && iconPosition === "left" && (
        <motion.span className="mr-2 inline-flex" variants={iconVariants}>
          {icon}
        </motion.span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <motion.span className="ml-2 inline-flex" variants={iconVariants}>
          {icon}
        </motion.span>
      )}
    </>
  );

  // If there's an href, render a Link, otherwise render a button
  if (href && !disabled) {
    return (
      <Link href={href} aria-label={ariaLabel}>
        <motion.span
          className={`inline-flex items-center justify-center ${combinedClasses}`}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
        >
          {buttonContent}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={`inline-flex items-center justify-center ${combinedClasses}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover={disabled ? "disabled" : "hover"}
      whileTap={disabled ? "disabled" : "tap"}
    >
      {buttonContent}
    </motion.button>
  );
};

export default AnimatedButton;
