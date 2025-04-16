import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TransformationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Testimonial data
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
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden bg-blue-50 bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-6">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">
            SUCCESS STORIES
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-0 max-w-xl">
            Transformations that <span className="text-blue-600">inspire</span>
            <span className="inline-block ml-1 animate-pulse">.</span>
          </h2>

          {/* Decorative line */}
          <div className="hidden md:block h-0.5 w-1/3 bg-gradient-to-r from-blue-500 to-blue-100 rounded-full"></div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={goToPrevious}
            className="p-3 rounded-full border border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
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
          </button>

          <button
            onClick={goToNext}
            className="p-3 rounded-full border border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
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
          </button>
        </div>

        {/* Testimonial slider */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-white font-bold text-xl">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {testimonials[activeIndex].title}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 text-blue-600 text-xs font-medium py-1 px-3 rounded-full">
                      {testimonials[activeIndex].condition}
                    </div>
                    <span className="ml-3 text-gray-500 text-xs">
                      {testimonials[activeIndex].duration}
                    </span>
                  </div>

                  <blockquote className="text-slate-700 text-lg italic mb-6 relative">
                    <span className="absolute -top-2 -left-2 text-6xl text-blue-100 font-serif">
                      "
                    </span>
                    <div className="relative z-10">
                      "{testimonials[activeIndex].quote}"
                    </div>
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative h-2 rounded-full bg-blue-200 overflow-hidden transition-all duration-300"
              style={{ width: index === activeIndex ? "2rem" : "0.5rem" }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === activeIndex && (
                <motion.div
                  className="absolute inset-0 bg-blue-600"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Annotation arrow */}
        <div className="absolute bottom-10 right-10">
          <div className="relative">
            <p className="absolute -top-12 right-0 text-primary font-handwritten text-lg transform -rotate-3">
              Real stories from real patients!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
