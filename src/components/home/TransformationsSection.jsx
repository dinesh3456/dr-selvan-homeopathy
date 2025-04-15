// components/home/TransformationsSection.jsx
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    title: "Chronic Migraine Patient",
    image: "/images/testimonial-1.jpg",
    quote:
      "After suffering from debilitating migraines for over 5 years, Dr. Selvan's homeopathic treatment gave me my life back within just 3 months.",
    condition: "Chronic Migraine",
    duration: "3 months treatment",
  },
  {
    name: "Mohammed Al-Farsi",
    title: "Father of Eczema Patient",
    image: "/images/testimonial-2.jpg",
    quote:
      "My son struggled with severe eczema for years. Within three months of Dr. Selvan's treatment, his skin cleared up completely. We're so grateful!",
    condition: "Severe Eczema",
    duration: "3 months treatment",
  },
  {
    name: "Rebecca Johnson",
    title: "IBS Recovery",
    image: "/images/testimonial-3.jpg",
    quote:
      "I had been dealing with IBS for over a decade. Dr. Selvan took the time to understand my symptoms and created a treatment plan that finally brought relief.",
    condition: "Irritable Bowel Syndrome",
    duration: "4 months treatment",
  },
];

const TransformationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Navigation handlers
  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden bg-blue-50 bg-opacity-50">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            SUCCESS STORIES
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-0 max-w-xl"
            variants={itemVariants}
          >
            Transformations that <span className="text-primary">inspire</span>
            <span className="inline-block ml-1 animate-pulse">.</span>
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            className="hidden md:block h-0.5 w-1/3 bg-gradient-to-r from-primary-light/50 to-primary-light/10 rounded-full"
            variants={itemVariants}
          />
        </motion.div>

        {/* Navigation arrows */}
        <div className="flex items-center space-x-4 mb-8">
          <motion.button
            onClick={goToPrevious}
            className="p-2 rounded-full border border-slate-300 hover:border-primary hover:bg-primary/5 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="p-2 rounded-full border border-slate-300 hover:border-primary hover:bg-primary/5 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-700"
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
          </motion.button>
        </div>

        {/* Testimonial slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex h-full"
            animate={{ x: `calc(-${activeIndex * 100}%)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${testimonials.length * 100}%` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full px-4"
                style={{ flex: `0 0 ${100 / testimonials.length}%` }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-white font-bold text-xl">
                          {testimonial.name}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-primary/10 text-primary text-xs font-medium py-1 px-3 rounded-full">
                          {testimonial.condition}
                        </div>
                        <span className="ml-3 text-slate-500 text-xs">
                          {testimonial.duration}
                        </span>
                      </div>

                      <blockquote className="text-slate-700 text-lg italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-primary w-6" : "bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow annotation */}
        <motion.div
          className="absolute bottom-10 right-10"
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
              Real stories from real patients!
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
      </div>
    </section>
  );
};

export default TransformationsSection;
