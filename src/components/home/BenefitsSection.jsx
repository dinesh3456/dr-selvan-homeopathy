// components/home/BenefitsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "Holistic Approach",
    description:
      "Our holistic approach embraces your mind, body, and spirit, fostering a balanced and thriving you.",
    image: "/images/benefit-holistic.jpg",
    color: "primary",
  },
  {
    title: "Unlock Your Potential",
    description:
      "Discover the power within as we blend evidence-based techniques with creative self-expression.",
    image: "/images/benefit-potential.jpg",
    color: "primary",
  },
  {
    title: "Natural & Safe",
    description:
      "Our homeopathic treatments have no side effects and are safe for patients of all ages.",
    image: "/images/benefit-safe.jpg",
    color: "primary",
  },
  {
    title: "Personalized Care",
    description:
      "We develop customized treatment plans based on your unique symptoms and constitution.",
    image: "/images/benefit-personalized.jpg",
    color: "primary",
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

  const itemVariants = {
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

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-white to-orange-50/50 z-0"></div>

      <div className="absolute inset-0 z-0">
        {/* Decorative element - blue circle */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-20">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-primary"
          >
            <path
              fill="currentColor"
              d="M46.5,-71.2C59.2,-62.3,68.4,-47.6,74.5,-31.5C80.7,-15.5,84,2,80.5,17.8C77.1,33.6,67,47.8,53.9,57.4C40.8,67,24.7,72.1,8.3,76.1C-8.1,80.1,-24.8,82.9,-39.6,77.9C-54.3,72.8,-67.1,59.9,-74.8,44.3C-82.5,28.7,-84.9,10.4,-82.1,-6.9C-79.3,-24.2,-71.2,-40.5,-59.3,-50.7C-47.3,-61,-31.6,-65.2,-16.1,-69.3C-0.6,-73.4,14.8,-77.4,29.4,-76.7C44,-76,57.9,-70.6,46.5,-71.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Decorative element - orange asymmetric shape */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-20">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-accent"
          >
            <path
              fill="currentColor"
              d="M35.9,-59.6C45.7,-51.9,52.3,-40.2,59.3,-28.2C66.3,-16.2,73.7,-3.9,71.8,7.1C69.8,18.1,58.5,27.9,48.4,38.5C38.3,49.1,29.3,60.6,17.8,65.8C6.3,71,-7.8,69.8,-22.6,67.2C-37.4,64.5,-53,60.3,-60.2,49.7C-67.4,39.1,-66.2,22.1,-69.4,4.6C-72.6,-13,-80.2,-31.1,-75.8,-43.6C-71.4,-56.1,-55,-63,-39.7,-68.8C-24.5,-74.7,-10.3,-79.5,1.8,-82.3C13.8,-85.2,26.1,-67.3,35.9,-59.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Blue tag with orange accent */}
          <motion.div
            className="inline-block bg-gradient-to-r from-primary to-accent text-white py-1 px-3 text-sm mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            / OUR APPROACH
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Art and science of <span className="text-primary">homeopathic</span>{" "}
            <span className="text-accent">wellness</span>
          </motion.h2>

          {/* Decorative line - now with gradient */}
          <motion.div
            className="h-0.5 w-64 md:w-96 bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                x: index % 2 === 0 ? -5 : 5,
                rotate: index % 2 === 0 ? -1 : 1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  duration: 0.3,
                },
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="relative h-48 sm:h-auto sm:w-1/3">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient overlay using the benefit's color */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr from-${benefit.color}/40 to-transparent`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6 sm:w-2/3">
                  <h3
                    className={`text-xl font-bold text-${benefit.color} mb-2`}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {benefit.description}
                  </p>

                  <div className="mt-6 flex items-center">
                    <span
                      className={`text-${benefit.color} text-sm font-medium`}
                    >
                      More details
                    </span>
                    <div
                      className={`ml-2 w-6 h-6 rounded-full bg-${benefit.color}/10 flex items-center justify-center`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 text-${benefit.color}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow annotation with orange accent */}
        <motion.div
          className="mt-12 relative flex justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.span
              className="absolute bottom-12 right-[10px] text-primary font-handwritten text-lg"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Discover our unique approach!
            </motion.span>
            <motion.svg
              width="120"
              height="60"
              viewBox="0 0 120 60"
              className="fill-none stroke-primary transform scale-x-[-1] -translate-x-4"
            >
              <motion.path
                d="M10,30 Q80,50 100,30"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
              />
              <motion.path
                d="M95,30 L105,25 L100,35"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 1.9 }}
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
