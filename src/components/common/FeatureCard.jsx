import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FeatureCard = ({ title, description, icon, image, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
      },
    },
    hover: {
      y: -5,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 },
    },
  };

  // Icon animation
  const iconVariants = {
    hover: {
      y: -3,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  // Shine effect
  const shineVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 0.3,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="w-full"
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer relative">
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/images/feature-default.jpg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>

          {/* Shine effect overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
            variants={shineVariants}
            initial="hidden"
            animate={isHovered ? "hover" : "hidden"}
            style={{
              backgroundSize: "200% 200%",
              backgroundPosition: isHovered ? "100% 100%" : "0% 0%",
            }}
          />

          {/* Title on image */}
          <div className="absolute bottom-0 left-0 p-5 w-full">
            <motion.h3
              className="text-xl font-bold text-white mb-1"
              initial={{ y: 0 }}
              animate={isHovered ? { y: -5 } : { y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <div className="flex items-start mb-3">
            <motion.div
              className="mr-4 p-2 bg-blue-100 rounded-full text-blue-600"
              variants={iconVariants}
            >
              {icon || (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              )}
            </motion.div>
            <motion.p
              className="text-gray-600 text-sm"
              animate={isHovered ? { opacity: 1 } : { opacity: 0.9 }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            className="mt-4 flex items-center text-blue-600 font-medium"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <span>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Featured Services component that uses the FeatureCard
const FeaturedServices = () => {
  const services = [
    {
      title: "Online Consultation",
      description:
        "Connect with Dr. Selvan from anywhere in the world for personalized homeopathic advice and treatment plans.",
      image: "/images/service-online.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Personalized Treatment Plans",
      description:
        "Custom homeopathic remedies tailored to your specific symptoms, constitution, and health history.",
      image: "/images/service-personalized.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Homeopathic Products",
      description:
        "High-quality homeopathic remedies and supplements formulated by Dr. Selvan for various health conditions.",
      image: "/images/service-products.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "Health Workshops",
      description:
        "Educational sessions on homeopathic principles and natural approaches to common health challenges.",
      image: "/images/service-workshops.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive Homeopathic Care
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the full spectrum of homeopathic treatments and services
            designed to address your health concerns naturally.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
