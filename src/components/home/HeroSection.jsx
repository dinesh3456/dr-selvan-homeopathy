// components/home/HeroSection.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
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
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-accent overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-0 w-64 h-64 rounded-full bg-secondary opacity-20 -z-10"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-primary opacity-10 -z-10"
        animate={{
          y: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6"
              variants={itemVariants}
            >
              Natural Healing for Modern Wellness
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8"
              variants={itemVariants}
            >
              Experience the power of homeopathy with Dr. Selvan's personalized
              approach to healing. Natural, effective treatments for chronic and
              acute conditions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  href="/appointment"
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition shadow-md inline-block"
                >
                  Book Appointment
                </Link>
              </motion.div>

              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  href="/about"
                  className="bg-white text-primary border border-primary px-8 py-3 rounded-full font-medium hover:bg-accent transition inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Fixed floating annotation with enhanced animation */}
            <motion.div
              className="relative mt-12 ml-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.2,
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <div className="relative">
                <motion.div className="flex items-center">
                  <motion.svg
                    width="45"
                    height="30"
                    viewBox="0 0 45 30"
                    className="fill-none stroke-primary mr-2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  >
                    <motion.path
                      d="M5,15 Q15,5 40,15"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 1.5 }}
                    />
                    <motion.path
                      d="M35,15 L42,18 L38,10"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 2.7 }}
                    />
                  </motion.svg>
                  <motion.p
                    className="font-handwritten text-lg text-primary"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Trusted by over 10,000+ patients worldwide!
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/hero-doctor.jpg"
                alt="Dr. Selvan consulting with a patient"
                width={600}
                height={450}
                className="w-full h-auto"
              />

              {/* Subtle overlay gradient on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60"></div>
            </motion.div>

            {/* Floating card with enhanced animation */}
            <motion.div
              className="absolute -bottom-10 -left-10 bg-white rounded-xl shadow-lg p-4 max-w-xs animate-float"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                      initial={{ scale: 0, x: -10 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{
                        delay: 1 + i * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <Image
                        src={`/images/avatar-${i}.jpg`}
                        alt="Patient"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <motion.div
                    className="text-sm font-semibold"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                  >
                    95% Success Rate
                  </motion.div>
                  <motion.div
                    className="text-xs text-gray-500"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    Based on patient feedback
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
