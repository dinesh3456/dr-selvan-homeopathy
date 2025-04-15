// components/home/FeaturedTreatments.jsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TreatmentCard from "../common/TreatmentCard";

const treatments = [
  {
    title: "Chronic Disease Management",
    description:
      "Long-term relief from conditions like arthritis, asthma, and allergies with natural remedies.",
    image: "/images/treatment-chronic.jpg",
    link: "/treatments/chronic-diseases",
  },
  {
    title: "Skin Disorders",
    description:
      "Effective solutions for eczema, psoriasis, acne, and other persistent skin conditions.",
    image: "/images/treatment-skin.jpg",
    link: "/treatments/skin-disorders",
  },
  {
    title: "Digestive Health",
    description:
      "Address IBS, acid reflux, and other digestive issues with targeted homeopathic treatments.",
    image: "/images/treatment-digestive.jpg",
    link: "/treatments/digestive-health",
  },
  {
    title: "Pediatric Care",
    description:
      "Gentle and effective treatments for children's health issues, from colic to behavioral problems.",
    image: "/images/treatment-pediatric.jpg",
    link: "/treatments/pediatric-care",
  },
];

const FeaturedTreatments = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-sand/50 z-0"></div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute top-40 left-20 w-64 h-64 rounded-full bg-primary/5"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary/10"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-16 max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4"
            variants={itemVariants}
          >
            Our Treatments
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            variants={itemVariants}
          >
            Art and science of homeopathic wellness
          </motion.h2>

          <motion.p className="text-lg text-slate-600" variants={itemVariants}>
            At Dr. Selvan's Homeopathy, we offer effective natural treatments
            for a wide range of health conditions.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mt-6 h-1 w-40 bg-gradient-to-r from-primary to-primary/30 rounded-full"
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={index}
              index={index}
              title={treatment.title}
              description={treatment.description}
              image={treatment.image}
              link={treatment.link}
            />
          ))}
        </div>

        {/* View all button with arrow */}
        <motion.div
          className="mt-16 flex justify-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/treatments"
              className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-8 py-3 rounded-full shadow-md hover:bg-primary-dark transition-all"
            >
              <span>View All Treatments</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Arrow annotation */}
          <motion.div
            className="absolute -bottom-16 -right-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.p
                className="absolute -top-8 right-16 text-primary font-handwritten text-lg transform -rotate-6"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Discover all our specialized treatments!
              </motion.p>
              <motion.svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                className="fill-none stroke-primary"
              >
                <motion.path
                  d="M10,20 Q40,40 100,20"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                />
                <motion.path
                  d="M95,20 L105,15 L100,30"
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

export default FeaturedTreatments;
