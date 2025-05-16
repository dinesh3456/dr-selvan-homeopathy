import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import AppointmentButton from "../common/AppointmentButton";

// Generate the bubbles outside the component to prevent re-generation on render
const generateRandomSeed = () => {
  return 123456; // Use a fixed seed instead of Math.random()
};

// Use a seeded random function
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Generate the bubbles with seeded randomness
const generateBubbles = (count, seed = generateRandomSeed()) => {
  let currentSeed = seed;
  return Array.from({ length: count }, (_, i) => {
    currentSeed = seed + i;
    return {
      id: i,
      size: 20 + seededRandom(currentSeed) * 80,
      left: seededRandom(currentSeed + 1) * 100,
      top: seededRandom(currentSeed + 2) * 100,
      opacity: 0.4 + seededRandom(currentSeed + 3) * 0.3,
      delay: i * 0.2,
    };
  });
};

const HeroSection = () => {
  // Use state to control animation timing
  const [isLoaded, setIsLoaded] = useState(false);
  const backgroundControls = useAnimation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of doctor images
  const doctorImages = [
    "/images/doctor.jpg",
    "/images/doctor-2.jpg",
    "/images/doctor-conference-1.jpg",
    "/images/doctor-conference-2.jpg",
    "/images/doctor-3.jpg",
    "/images/doctor-4.jpg",
  ];

  // Generate decorative bubbles only once using useMemo
  const decorativeBubbles = useMemo(() => generateBubbles(6), []);

  // Slow background animation effect
  useEffect(() => {
    const animateBackground = async () => {
      await backgroundControls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
      });
    };

    animateBackground();

    // Simulate loading completion
    setTimeout(() => setIsLoaded(true), 500);
  }, [backgroundControls]);

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % doctorImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [doctorImages.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
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

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    enter: { opacity: 0, x: 20 },
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const bubbleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 0.7,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    }),
    float: (i) => ({
      y: [0, -15, 0],
      transition: {
        delay: i * 0.1,
        duration: 10 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  const glowVariants = {
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 12, // Increased from 6 for slower animation
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        {/* Primary background bubble */}
        <motion.div
          className="absolute top-30 right-10 rounded-full bg-blue-400 opacity-5"
          style={{ width: "40rem", height: "40rem" }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12, // Increased from 6 for slower animation
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary background bubble - hidden on mobile, shown on desktop */}
        <motion.div
          className="absolute -bottom-[-5%] -left-[-10%] hidden md:block"
          style={{ width: "35rem", height: "35rem" }}
          animate={{
            x: [0, 10, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Image
            src="/images/Dr. Selvan Logo-symbol.png"
            alt="Dr. Selvan Symbol"
            fill
            className="object-contain opacity-25"
            priority
          />
        </motion.div>

        {/* Floating bubbles with SLOW animation */}
        {decorativeBubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              opacity: 0,
            }}
            custom={bubble.id}
            variants={bubbleVariants}
            initial="hidden"
            animate={["visible", "float"]}
          />
        ))}
      </div>

      {/* Loading screen animation */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 bg-white z-50 flex items-center justify-center"
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl relative"
          >
            {/* Mobile-only logo overlay that appears behind the heading */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center md:hidden z-0">
              <div className="relative w-96 h-96">
                {" "}
                {/* Increased from w-64 h-64 to w-80 h-80 */}
                <Image
                  src="/images/Dr. Selvan Logo-symbol.png"
                  alt="Dr. Selvan Symbol"
                  fill
                  className="object-contain opacity-25"
                  priority
                />
              </div>
            </div>

            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4 relative z-10"
              variants={itemVariants}
            >
              Natural Healing Solutions
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 relative z-10"
              variants={itemVariants}
            >
              <span className="block">Gentle healing,</span>
              <span className="block text-blue-600">profound results</span>
              <span className="block">for your health</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl relative z-10"
              variants={itemVariants}
            >
              Experience the power of homeopathy with our personalized approach
              to healing. Natural, effective treatments for chronic and acute
              conditions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 relative z-10"
              variants={itemVariants}
            >
              <AppointmentButton
                text="Start Cure"
                variant="primary"
                size="md"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />

              <motion.button
                className="border-2 border-blue-500 text-blue-600 bg-white px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition inline-block cursor-pointer"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                onClick={() => {
                  const element = document.getElementById("learn-more");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center"
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white border-2 border-white overflow-hidden"
                    initial={{ scale: 0, x: -10 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{
                      delay: 1.3 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-500 text-xs font-bold">
                      {i}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-slate-700 font-medium">
                  <span className="text-blue-600 font-bold">10,000+</span>{" "}
                  satisfied patients
                </p>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 1.5 + 0.1 * i,
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-10"
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main image with geometric frame and animated effects */}
            <div className="relative">
              {/* Animated glow effect behind image */}
              <motion.div
                className="absolute -inset-4 border-2 border-blue-200 rounded-2xl bg-blue-50 opacity-60"
                variants={glowVariants}
                animate="animate"
              />

              {/* Geometric frame */}
              <motion.div
                className="absolute -inset-4 border-2 border-blue-300 rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />

              {/* Image carousel container */}
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="w-full h-72 md:h-96 lg:h-[450px] relative">
                  {/* Image carousel with AnimatePresence for smooth transitions */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      className="absolute inset-0"
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      <Image
                        src={doctorImages[currentImageIndex]}
                        alt={`Dr. Selvan - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent opacity-50"></div>

                  {/* Image navigation dots */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {doctorImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentImageIndex === index
                            ? "bg-white w-4"
                            : "bg-white/60"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Feature highlights with animation */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.9,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">
                      Natural & Safe
                    </h3>
                    <p className="text-sm text-slate-600">
                      No side effects, safe for all ages
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: 5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">
                      Long-lasting Results
                    </h3>
                    <p className="text-sm text-slate-600">
                      Not just temporary relief
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div id="learn-more"></div>
    </section>
  );
};

export default HeroSection;
