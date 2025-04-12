// components/home/HeroSection.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-accent overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-secondary opacity-20 -z-10" />
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-primary opacity-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              Natural Healing for Modern Wellness
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Experience the power of homeopathy with Dr. Selvan's personalized
              approach to healing. Natural, effective treatments for chronic and
              acute conditions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition shadow-md"
              >
                Book Appointment
              </Link>
              <Link
                href="/about"
                className="bg-white text-primary border border-primary px-8 py-3 rounded-full font-medium hover:bg-accent transition"
              >
                Learn More
              </Link>
            </div>

            {/* Annotation */}
            <motion.div
              className="relative mt-12 ml-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <svg
                width="120"
                height="70"
                viewBox="0 0 120 70"
                className="absolute -top-16 -left-20 fill-none stroke-primary"
              >
                <path
                  d="M10,10 Q60,80 110,30"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M105,30 L115,35 L110,25"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-handwritten text-lg text-primary transform -rotate-3">
                Trusted by over 10,000+ patients worldwide!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-doctor.jpg"
                alt="Dr. Selvan consulting with a patient"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-10 -left-10 bg-white rounded-xl shadow-lg p-4 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                    >
                      <Image
                        src={`/images/avatar-${i}.jpg`}
                        alt="Patient"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold">95% Success Rate</div>
                  <div className="text-xs text-gray-500">
                    Based on patient feedback
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
