import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const WhyChooseSectionLight = () => {
  const features = [
    {
      title: "> 20 Years",
      description:
        "Two decades of expertise in providing effective homeopathic treatments for a wide range of conditions.",
    },
    {
      title: "2 Locations",
      description:
        "With clinics in Chennai, India and Dubai, UAE, we're committed to making homeopathic care accessible.",
    },
    {
      title: "> 10k Clients",
      description:
        "We've had the privilege of assisting over 10,000 clients in their natural healing journeys.",
    },
    {
      title: "100% Natural",
      description:
        "Our treatments utilize only natural remedies with no side effects, safe for patients of all ages.",
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
      {/* Light background with blue gradient instead of dark */}
      <div className="absolute inset-0 bg-blue-50 bg-opacity-70 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-12 max-w-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-blue-600 font-medium text-sm uppercase tracking-wider"
            variants={itemVariants}
          >
            OUR CLINIC
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6"
            variants={itemVariants}
          >
            Why we are chosen
          </motion.h2>

          {/* Decorative line - similar to the one in the design */}
          <motion.div
            className="h-0.5 w-3/4 bg-gradient-to-r from-blue-500/70 to-blue-100 rounded-full"
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg"
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
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
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
          <Link href="/appointment" className="group">
            <motion.div
              className="bg-blue-600 text-white w-full max-w-xl py-4 px-6 rounded-full flex items-center justify-center group-hover:bg-blue-700 cursor-pointer transition-colors"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium">Start Cure</span>
              <motion.div
                className="ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </Link>

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
                className="fill-none stroke-blue-500 transform scale-x-[-1]" // Added scale-x-[-1] to mirror the arrow
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
