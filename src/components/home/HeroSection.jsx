import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  // Use state to control animation timing
  const [isLoaded, setIsLoaded] = useState(false);
  const backgroundControls = useAnimation();

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
        duration: 10 + i, // Increased from 3 + i for slower animation
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  const decorativeBubbles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 20 + Math.random() * 80,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: 0.4 + Math.random() * 0.3,
    delay: i * 0.2,
  }));

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
          className="absolute top-40 right-10 rounded-full bg-blue-400 opacity-5"
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

        {/* Secondary background bubble */}
        <motion.div
          className="absolute -bottom-20 -left-20 rounded-full bg-blue-200 opacity-10"
          style={{ width: "35rem", height: "35rem" }}
          animate={{
            x: [0, 10, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 14, // Increased from 7 for slower animation
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4"
              variants={itemVariants}
            >
              Natural Healing Solutions
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="block">Embark on your</span>
              <span className="block text-blue-600">wellness journey</span>
              <span className="block">with Dr. Selvan</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl"
              variants={itemVariants}
            >
              Experience the power of homeopathy with our personalized approach
              to healing. Natural, effective treatments for chronic and acute
              conditions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-md inline-flex items-center cursor-pointer"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                onClick={() => (window.location.href = "/appointment")}
              >
                Start Cure
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
              </motion.button>

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

              {/* Main image container */}
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="w-full h-72 md:h-96 lg:h-[450px] relative">
                  <Image
                    src="/images/doctor.jpg"
                    alt="Dr. Selvan"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent opacity-50"></div>
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
      {/* Add an id here for the learn-more section */}
      <div id="learn-more"></div>
    </section>
  );
};

export default HeroSection;
