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
  },
  {
    title: "Unlock Your Potential",
    description:
      "Discover the power within as we blend evidence-based techniques with creative self-expression.",
    image: "/images/benefit-potential.jpg",
  },
  {
    title: "Natural & Safe",
    description:
      "Our homeopathic treatments have no side effects and are safe for patients of all ages.",
    image: "/images/benefit-safe.jpg",
  },
  {
    title: "Personalized Care",
    description:
      "We develop customized treatment plans based on your unique symptoms and constitution.",
    image: "/images/benefit-personalized.jpg",
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
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-white z-0"></div>

      <div className="absolute inset-0 z-0">
        {/* Decorative element - similar to the robotic hand in the design */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-20">
          <Image
            src="/images/decorative-element.png"
            alt="Decorative element"
            fill
            className="object-contain object-right-top"
          />
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
          {/* Blue tag similar to the design */}
          <motion.div
            className="inline-block bg-primary text-white py-1 px-3 text-sm mb-6"
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
            Art and science of homeopathic wellness
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            className="h-0.5 w-64 md:w-96 bg-gradient-to-r from-primary to-transparent rounded-full"
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
                </div>

                {/* Content */}
                <div className="p-6 sm:w-2/3">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {benefit.description}
                  </p>

                  <div className="mt-6 flex items-center">
                    <span className="text-primary text-sm font-medium">
                      More details
                    </span>
                    <div className="ml-2 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
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

        {/* Arrow annotation */}
        <motion.div
          className="mt-12 relative flex justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.span
              className="absolute bottom-12 right-[10px] text-primary font-handwritten text-lg" // Changed from right-[-20px] to right-[-10px]
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
              className="fill-none stroke-primary transform scale-x-[-1] -translate-x-4" // Changed from -translate-x-8 to -translate-x-4
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
