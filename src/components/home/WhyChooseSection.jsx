import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AppointmentButton from "../common/AppointmentButton";

const WhyChooseSectionLight = () => {
  const features = [
    {
      title: "> 20 Years",
      description:
        "Two decades of expertise in providing effective homeopathic treatments for a wide range of conditions.",
      color: "primary",
    },
    {
      title: "2 Locations",
      description:
        "With clinics in Chennai, India and Dubai, UAE, we're committed to making homeopathic care accessible.",
      color: "primary",
    },
    {
      title: "> 10k Clients",
      description:
        "We've had the privilege of assisting over 10,000 clients in their natural healing journeys.",
      color: "primary",
    },
    {
      title: "100% Natural",
      description:
        "Our treatments utilize only natural remedies with no side effects, safe for patients of all ages.",
      color: "primary",
    },
  ];

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
    <section className="py-20 bg-white relative">
      {/* Light background with blue-orange gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent opacity-[0.03] transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary opacity-[0.03] transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-12 max-w-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-accent font-medium text-sm uppercase tracking-wider"
            variants={itemVariants}
          >
            OUR CLINIC
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6"
            variants={itemVariants}
          >
            Why <span className="text-primary">we are</span>{" "}
            <span className="text-accent">chosen</span>
          </motion.h2>

          {/* Decorative line - blue to orange gradient */}
          <motion.div
            className="h-0.5 w-3/4 bg-gradient-to-r from-primary to-accent rounded-full"
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white shadow-md p-6 rounded-lg border-t-4 ${
                feature.color === "primary" ? "border-primary" : "border-accent"
              }`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
            >
              <h3
                className={`text-2xl font-bold ${
                  feature.color === "primary" ? "text-primary" : "text-accent"
                } mb-3`}
              >
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Start Cure Button with arrow annotation */}
        <motion.div
          className="mt-16 flex justify-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <AppointmentButton text="Start Cure" variant="primary" size="lg" />

          <motion.div
            className="absolute top-[10px] left-0 md:left-[700px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="relative">
              <motion.p
                className="absolute -top-12 left-0 text-primary font-handwritten text-lg transform rotate-3"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Begin your healing journey here!
              </motion.p>
              <motion.svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                className="fill-none stroke-primary transform scale-x-[-1]" // Added scale-x-[-1] to mirror the arrow
              >
                <motion.path
                  d="M10,30 Q40,10 100,30"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                />
                <motion.path
                  d="M95,35 L105,35 L100,20"
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
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSectionLight;
