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
      boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-sand via-blue-50 to-white z-0"></div>

      {/* Decorative elements */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 rounded-full bg-primary opacity-10"
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
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary-light opacity-15"
          animate={{
            x: [0, 10, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6"
              variants={itemVariants}
            >
              Natural Healing Solutions
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight mb-6"
              variants={itemVariants}
            >
              Embark on your wellness journey with Dr. Selvan
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
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  href="/appointment"
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition shadow-md inline-flex items-center"
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
                </Link>
              </motion.div>

              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  href="/homeopathy"
                  className="border border-primary text-primary bg-white px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
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
                    <Image
                      src={`/images/avatar-${i}.jpg`}
                      alt="Patient"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-slate-700 font-medium">
                  <span className="text-primary font-bold">10,000+</span>{" "}
                  satisfied patients
                </p>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
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
            <div className="relative z-10">
              {/* Main image with geometric frame */}
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 border-2 border-primary/30 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
                <motion.div
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/images/hero-doctor.jpg"
                    alt="Dr. Selvan consulting with a patient"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-70"></div>
                </motion.div>
              </div>

              {/* Feature highlights */}
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
                  <div className="p-2 bg-primary/20 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
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
                  <div className="p-2 bg-primary/20 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
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
    </section>
  );
};

export default HeroSection;
