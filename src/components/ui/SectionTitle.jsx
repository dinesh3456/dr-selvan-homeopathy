// src/components/ui/SectionTitle.jsx
import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({
  pretitle,
  title,
  subtitle,
  alignment = "left",
  withLine = true,
  lineColor = "primary",
  size = "default",
  className = "",
  containerClassName = "",
  delay = 0,
}) => {
  // Alignment styles
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  // Size variations
  const sizeClasses = {
    small: {
      pretitle: "text-sm",
      title: "text-2xl md:text-3xl",
      subtitle: "text-base md:text-lg",
      maxWidth: "max-w-2xl",
    },
    default: {
      pretitle: "text-sm md:text-base",
      title: "text-3xl md:text-4xl lg:text-5xl",
      subtitle: "text-lg md:text-xl",
      maxWidth: "max-w-3xl",
    },
    large: {
      pretitle: "text-base md:text-lg",
      title: "text-4xl md:text-5xl lg:text-6xl",
      subtitle: "text-xl md:text-2xl",
      maxWidth: "max-w-4xl",
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Line animation variants
  const lineVariants = {
    hidden: {
      scaleX: 0,
      transformOrigin: alignment === "right" ? "right" : "left",
    },
    visible: {
      scaleX: 1,
      transition: {
        delay: delay + 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`${sizeClasses[size].maxWidth} ${alignmentClasses[alignment]} ${containerClassName}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {pretitle && (
        <motion.div
          className={`inline-block py-1 px-3 rounded-full bg-primary/20 text-primary ${sizeClasses[size].pretitle} font-medium mb-3`}
          variants={childVariants}
        >
          {pretitle}
        </motion.div>
      )}

      <motion.h2
        className={`font-display font-bold ${sizeClasses[size].title} text-slate-900 mb-4 ${className}`}
        variants={childVariants}
      >
        {title}
      </motion.h2>

      {withLine && (
        <motion.div
          className={`h-1 w-24 bg-gradient-to-r from-${lineColor} to-${lineColor}/30 rounded-full mb-6 ${
            alignment === "center"
              ? "mx-auto"
              : alignment === "right"
                ? "ml-auto"
                : ""
          }`}
          variants={lineVariants}
        />
      )}

      {subtitle && (
        <motion.p
          className={`font-serif ${sizeClasses[size].subtitle} text-slate-600 max-w-prose ${
            alignment === "center"
              ? "mx-auto"
              : alignment === "right"
                ? "ml-auto"
                : ""
          }`}
          variants={childVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
