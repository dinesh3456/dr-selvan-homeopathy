// components/home/TestimonialsSection.jsx
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    avatar: "/images/testimonial-1.jpg",
    condition: "Chronic Migraine",
    quote:
      "After years of suffering from debilitating migraines, Dr. Selvan's homeopathic treatment gave me my life back. The personalized approach made all the difference.",
    location: "Chennai, India",
  },
  {
    name: "Mohammed Al-Farsi",
    avatar: "/images/testimonial-2.jpg",
    condition: "Eczema",
    quote:
      "My son struggled with severe eczema for years. Within three months of Dr. Selvan's treatment, his skin cleared up completely. We're so grateful!",
    location: "Dubai, UAE",
  },
  {
    name: "Rebecca Johnson",
    avatar: "/images/testimonial-3.jpg",
    condition: "Digestive Issues",
    quote:
      "I had been dealing with IBS for over a decade. Dr. Selvan took the time to understand my symptoms and created a treatment plan that finally brought relief.",
    location: "London, UK",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Animation variants
  const cardVariants = {
    inactive: {
      scale: 0.95,
      opacity: 0.7,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    active: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.2,
      },
    },
  };

  // Animation for staggered children
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

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements with animation */}
        <motion.div
          className="absolute top-0 left-0 w-24 h-24 rounded-full bg-accent opacity-50 -z-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-secondary opacity-20 -z-10"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-dark mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Patient Success Stories
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hear from our patients who have experienced the healing power of Dr.
            Selvan's homeopathy.
          </motion.p>
        </div>

        <div className="relative">
          {/* Fixed Annotation with SVG path animation */}
          <motion.div
            className="absolute -top-16 right-0 md:right-20 z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <motion.p
                className="text-primary font-handwritten text-lg mr-2"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Real stories from real patients!
              </motion.p>
              <motion.svg
                width="40"
                height="30"
                viewBox="0 0 40 30"
                className="fill-none stroke-primary"
              >
                <motion.path
                  d="M5,15 Q15,5 35,15"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                <motion.path
                  d="M30,15 L37,18 L33,10"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                  viewport={{ once: true }}
                />
              </motion.svg>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`bg-accent rounded-xl p-6 shadow-md transition cursor-pointer
                    ${activeIndex === index ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  variants={cardVariants}
                  animate={activeIndex === index ? "active" : "inactive"}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div
                      className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.1 * index,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-dark">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                      <motion.div
                        className="mt-1 bg-primary bg-opacity-20 text-primary text-xs py-1 px-2 rounded-full inline-block"
                        animate={{
                          y: activeIndex === index ? [0, -2, 0] : 0,
                          scale: activeIndex === index ? [1, 1.05, 1] : 1,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: activeIndex === index ? Infinity : 0,
                          repeatDelay: 1,
                        }}
                      >
                        {testimonial.condition}
                      </motion.div>
                    </div>
                  </div>

                  <motion.blockquote
                    className="text-gray-600 italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + 0.1 * index }}
                  >
                    "{testimonial.quote}"
                  </motion.blockquote>

                  <div className="mt-4 flex justify-start">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.4 + 0.1 * i + 0.05 * index,
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
