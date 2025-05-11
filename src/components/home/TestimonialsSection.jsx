import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const testimonials = [
  {
    name: "Mrs. Chitra Roy",
    avatar: "/images/testimonial-1.jpg",
    condition: "Type 2 Diabetes",
    before: "HbA1c: 8.3% (Prediabetic)",
    after: "HbA1c: 6.9% (Good Control)",
    duration: "6 months treatment",
    quote:
      "I was devastated when diagnosed with diabetes. Dr. Selvan's homeopathic treatment not only improved my HbA1c levels from 8.3 to 6.9 within 6 months but also helped me avoid insulin dependency. I feel healthier than I have in years.",
    location: "Mumbai, India",
  },
  {
    name: "Mr. Sebastian",
    avatar: "/images/testimonial-2.jpg",
    condition: "Diabetic Management",
    before: "Blood Sugar (Fasting): 294 mg/dl",
    after: "Improved control with homeopathy",
    duration: "Under treatment",
    quote:
      "As a senior patient dealing with multiple health issues including diabetes and anemia, finding Dr. Selvan was a blessing. His holistic approach treats all my conditions without the side effects of conventional medicines.",
    location: "Dharavi, Mumbai",
  },
  {
    name: "Anonymous Patient",
    avatar: "/images/testimonial-3.jpg",
    condition: "Varicose Ulcer",
    before: "Infected varicose ulcer",
    after: "Complete healing",
    duration: "2 days treatment",
    quote:
      "I couldn't believe my eyes when my painful varicose ulcer completely healed in just two days after applying Dr. Selvan's homeopathic remedy. This was after suffering for months with conventional treatments.",
    location: "Mumbai, India",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Card animation variants
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Star animation
  const starVariants = {
    initial: { scale: 0 },
    animate: (i) => ({
      scale: 1,
      transition: {
        delay: 0.1 * i,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    }),
  };

  // Function to navigate to previous testimonial
  const goToPrev = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  // Function to navigate to next testimonial
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Decorative blob shapes */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent opacity-[0.05] -z-10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary opacity-[0.05] -z-10"></div>

      <div
        className="absolute inset-0 opacity-[0.02] -z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(59, 130, 246, 0.3) 2px, transparent 2px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-orange-50 text-accent text-sm font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SUCCESS STORIES
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transformations that <span className="text-accent">inspire</span>
            <span className="inline-block ml-1 animate-pulse">.</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from our patients who have experienced the healing power of Dr.
            Selvan's homeopathy treatments.
          </motion.p>
        </div>

        <div
          className="mt-16 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Handwritten annotation with arrow */}
          <motion.div
            className="absolute -top-16 right-0 md:right-20 z-10 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center">
              <motion.p
                className="absolute -top-12 right-0 text-primary font-handwritten text-lg transform -rotate-3"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Real stories with medical proof!
              </motion.p>
              <motion.svg
                width="40"
                height="30"
                viewBox="0 0 40 30"
                className="fill-none stroke-primary transform scale-x-[-1] -translate-x-12"
              >
                <motion.path
                  d="M5,15 Q15,5 35,15"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.path
                  d="M30,15 L37,18 L33,10"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                />
              </motion.svg>
            </div>
          </motion.div>

          {/* Testimonial cards */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl min-h-[600px] md:min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="absolute inset-0"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <GlassCard className="p-6 md:p-8 h-full" animate={false}>
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-2/5 mb-6 md:mb-0 md:pr-6">
                        <div className="relative rounded-2xl overflow-hidden mb-4 h-48 md:h-64 shadow-md border border-white/30">
                          <Image
                            src={testimonials[activeIndex].avatar}
                            alt={testimonials[activeIndex].name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-primary/20 opacity-50"></div>

                          <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h3 className="font-bold text-base md:text-lg">
                              {testimonials[activeIndex].name}
                            </h3>
                            <p className="text-sm text-white/80">
                              {testimonials[activeIndex].location}
                            </p>
                          </div>
                        </div>

                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="bg-orange-50 text-accent text-xs font-medium py-1 px-3 rounded-full inline-block">
                            {testimonials[activeIndex].condition}
                          </div>
                          <div className="text-sm text-slate-600">
                            <strong>Before:</strong>{" "}
                            {testimonials[activeIndex].before}
                          </div>
                          <div className="text-sm text-slate-600">
                            <strong>After:</strong>{" "}
                            {testimonials[activeIndex].after}
                          </div>
                          <div className="text-sm text-slate-600">
                            <strong>Duration:</strong>{" "}
                            {testimonials[activeIndex].duration}
                          </div>
                        </motion.div>
                      </div>

                      <div className="md:w-3/5 flex flex-col justify-between">
                        <motion.blockquote
                          className="text-lg md:text-xl italic text-slate-700 mb-6 leading-relaxed relative"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <span className="absolute -top-2 -left-2 text-4xl md:text-6xl text-orange-100 font-serif">
                            "
                          </span>
                          <div className="relative z-10 pl-2">
                            "{testimonials[activeIndex].quote}"
                          </div>
                        </motion.blockquote>

                        <div>
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <motion.svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 md:h-6 md:w-6 text-amber-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                custom={i}
                                variants={starVariants}
                                initial="initial"
                                animate="animate"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </motion.svg>
                            ))}
                          </div>

                          <p className="text-sm text-slate-500">
                            Treated for {testimonials[activeIndex].condition}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative rounded-full transition-all duration-300 focus:outline-none"
                style={{
                  width: index === activeIndex ? 24 : 8,
                  height: 8,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.span
                  className={`absolute inset-0 rounded-full ${
                    index === activeIndex ? "bg-accent" : "bg-primary/30"
                  }`}
                  layoutId="testimonialIndicator"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile-friendly navigation buttons */}
          <div className="flex justify-between mt-6 md:hidden">
            <motion.button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center focus:outline-none"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-accent"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center focus:outline-none"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-accent"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>

          {/* Desktop navigation buttons - now hidden on mobile */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 pointer-events-none">
            <motion.button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center pointer-events-auto focus:outline-none"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-accent"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center pointer-events-auto focus:outline-none"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-accent"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
