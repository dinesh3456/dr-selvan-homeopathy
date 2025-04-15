// components/home/BenefitsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-primary"
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
    ),
    title: "Natural & Safe",
    description:
      "Our homeopathic treatments have no side effects and are safe for patients of all ages.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
        />
      </svg>
    ),
    title: "Personalized Care",
    description:
      "We develop customized treatment plans based on your unique symptoms and constitution.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-primary"
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
    ),
    title: "Root Cause Treatment",
    description:
      "Instead of just alleviating symptoms, we address the underlying causes of your health issues.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-primary"
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
    ),
    title: "Long-lasting Results",
    description:
      "Our treatments provide sustained relief and improvement, not just temporary fixes.",
  },
];

const BenefitsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.98 },
  };

  // Animated SVG stroke and fill
  const iconVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Why Choose Homeopathy?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dr. Selvan's homeopathic approach offers numerous advantages over
            conventional medicine.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-accent rounded-xl p-6 shadow-md transition cursor-pointer relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Background decorative shape */}
              <motion.div
                className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-primary opacity-5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              />

              {/* Icon with animation */}
              <motion.div
                className="mb-4 relative z-10"
                initial={{ rotateY: 0 }}
                whileHover={{
                  rotateY: 180,
                  transition: { duration: 0.6 },
                }}
              >
                {benefit.icon}
              </motion.div>

              <motion.h3
                className="text-xl font-bold text-dark mb-2 relative z-10"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
              >
                {benefit.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
              >
                {benefit.description}
              </motion.p>

              {/* Highlight effect on hover */}
              <motion.div
                className="absolute inset-0 bg-primary opacity-0"
                whileHover={{
                  opacity: 0.05,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Fixed Annotation with path animation */}
        <motion.div
          className="relative mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center">
            <motion.p
              className="font-handwritten text-lg text-primary mr-2"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Healing that treats you as a whole person, not just symptoms!
            </motion.p>
            <motion.svg
              width="40"
              height="25"
              viewBox="0 0 40 25"
              className="fill-none stroke-primary"
            >
              <motion.path
                d="M5,12 Q15,5 35,12"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M30,12 L37,15 L33,7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                viewport={{ once: true }}
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
