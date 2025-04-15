// components/common/FeatureCard.jsx
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const FeatureCard = ({ title, description, icon, image, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth animation values
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [10, -10]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
    springConfig
  );
  const translateZ = useSpring(
    useTransform(mouseY, [0, 1], [0, 50]),
    springConfig
  );

  // Track mouse position for 3D card effect
  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Calculate relative position
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 },
    },
  };

  // Icon animation
  const iconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  // Shine effect
  const shineVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 0.2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="relative w-full"
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="w-full bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer relative z-10"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/images/feature-default.jpg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>

          {/* Shine effect overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
            variants={shineVariants}
            initial="hidden"
            animate={isHovered ? "hover" : "hidden"}
            style={{
              backgroundSize: "200% 200%",
              backgroundPosition: isHovered ? "100% 100%" : "0% 0%",
            }}
          />

          {/* Title on image */}
          <div className="absolute bottom-0 left-0 p-5 w-full">
            <motion.h3
              className="text-xl font-bold text-white mb-1"
              initial={{ y: 0 }}
              animate={isHovered ? { y: -5 } : { y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <div className="flex items-start mb-3">
            <motion.div
              className="mr-4 p-2 bg-primary/10 rounded-full text-primary"
              variants={iconVariants}
            >
              {icon || (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              )}
            </motion.div>
            <motion.p
              className="text-gray-600 text-sm"
              animate={isHovered ? { opacity: 1 } : { opacity: 0.9 }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            className="mt-4 flex items-center text-primary font-medium"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <span>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Card shadow effect */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 -z-10"
        animate={{
          opacity: isHovered ? 0.7 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default FeatureCard;
