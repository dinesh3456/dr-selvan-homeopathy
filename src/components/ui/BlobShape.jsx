// src/components/ui/BlobShape.jsx
import React from "react";
import { motion } from "framer-motion";

const BlobShape = ({
  children,
  className = "",
  color = "primary",
  size = "md",
  animated = true,
  position = "center",
  opacity = 0.15,
  zIndex = -1,
}) => {
  // Size mapping
  const sizeMap = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[30rem] h-[30rem]",
    "2xl": "w-[40rem] h-[40rem]",
  };

  // Position mapping
  const positionMap = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
    "left-center": "top-1/2 left-0 -translate-y-1/2",
    "right-center": "top-1/2 right-0 -translate-y-1/2",
  };

  // Animation variants
  const blobVariants = {
    animate: {
      scale: animated ? [1, 1.05, 0.95, 1] : 1,
      borderRadius: animated
        ? [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ]
        : "60% 40% 30% 70% / 60% 30% 70% 40%",
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  // Determine which blob shape to use (for non-animated)
  const staticBlobClass = animated ? "" : "blob-shape";

  return (
    <motion.div
      className={`absolute ${sizeMap[size]} ${positionMap[position]} bg-${color} ${staticBlobClass} ${className}`}
      style={{
        opacity,
        zIndex,
        filter: `blur(${size === "sm" ? "15px" : size === "md" ? "30px" : "50px"})`,
      }}
      variants={blobVariants}
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export default BlobShape;
