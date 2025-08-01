// src/components/home/ProductsPreview.jsx
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import ComingSoonOverlay from "../ui/ComingSoonOverlay";

const ProductsPreview = () => {
  // State for hover effects
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Product data with updated categories
  const products = [
    {
      name: "Vitamin D Plus",
      image: "/images/vitamin-d-plus.jpg",
      price: "₹599",
      description:
        "Multivitamin, Multimineral & Calcium Tablets for all age groups. Helps with healthy bones, immunity boost and increased strength.",
      attributes: ["All Age Groups", "Nutraceutical", "No Side Effects"],
      badges: ["Bestseller"],
      id: "01",
      category: "Nutraceutical", // Updated category
    },
    {
      name: "Ortho Grade",
      image: "/images/ortho-grade.jpg",
      price: "₹499",
      description:
        "Ayurvedic Pain Relief Oil with powerful muscle relaxant and anti-inflammatory properties. Provides quick pain relief.",
      attributes: ["External Use Only", "Ayurvedic Oil", "Natural Ingredients"],
      badges: ["New"],
      id: "02",
      category: "Ayurvedic Oil", // Updated category
    },
    {
      name: "Home Remedy Cough Syrup",
      image: "/images/cough-syrup.jpg",
      price: "₹349",
      description:
        "Natural cough syrup effective for all kinds of cough (dry, wet, spasmodic). Provides quick relief with immune support.",
      attributes: ["Non-Drowsy", "Herbal", "All Ages"],
      badges: ["Popular"],
      id: "03",
      category: "Herbal", // Updated category
    },
    {
      name: "Gastrodigx Acidity Syrup",
      image: "/images/gastrodigx-acidity-syrup.jpg",
      price: "₹399",
      description:
        "Herbal Homeopathic Acidity Syrup formulated with natural ingredients to relieve gastric acidity, indigestion and acid reflux.",
      attributes: ["Herbal", "Natural Ingredients", "All Ages"],
      badges: ["New"],
      id: "04",
      category: "Herbal", // Updated category
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        damping: 20,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="py-16 bg-white text-center" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title - Centered */}
        <motion.div
          className="mb-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3"
            variants={itemVariants}
          >
            OUR PRODUCTS
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="text-primary">Homeopathic</span>{" "}
            <span className="text-accent">Remedies</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Discover our range of homeopathic remedies carefully formulated by
            Dr. Selvan.
          </motion.p>
        </motion.div>

        {/* Products grid - Fixed responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full max-w-sm mx-auto flex flex-col"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative">
                {/* ID tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-gray-500 font-medium z-10">
                  / {product.id}
                </div>

                {/* Product badges */}
                {product.badges &&
                  product.badges.map((badge, i) => (
                    <div
                      key={i}
                      className={`absolute top-3 right-16 z-10 ${
                        badge === "Bestseller"
                          ? "bg-blue-100 text-blue-600"
                          : badge === "New"
                          ? "bg-purple-100 text-purple-600"
                          : badge === "Popular"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-600"
                      } px-2 py-1 rounded-lg text-xs font-medium`}
                    >
                      {badge}
                    </div>
                  ))}

                {/* Price tag */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-blue-600 font-bold text-sm z-10">
                  {product.price}
                </div>

                {/* Image section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      console.error(`Error loading image for ${product.name}`);
                      e.target.src = "/images/placeholder-product.jpg"; // Fallback image
                    }}
                  />
                  <ComingSoonOverlay />
                </div>
              </div>

              <div className="p-4 text-left flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Product attributes */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.attributes.slice(0, 2).map((attr, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {attr}
                    </span>
                  ))}
                  {product.attributes.length > 2 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{product.attributes.length - 2} more
                    </span>
                  )}
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group text-sm"
                  >
                    <span>View Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:transform group-hover:translate-x-1 transition-transform"
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
                  </Link>

                  <button
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      product.id === "01"
                        ? "bg-blue-100 text-blue-600"
                        : product.id === "02"
                        ? "bg-purple-100 text-purple-600"
                        : product.id === "03"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow annotation with improved positioning */}
        <motion.div
          className="mt-12 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition"
          >
            <span>View All Products</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
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
          </Link>

          {/* Arrow annotation - now responsive */}
          <motion.div
            className="absolute -top-21 left-[35%] sm:left-[45%] md:left-[23%] hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.p
                className="absolute -top-12 left-[-10%] text-primary font-handwritten text-lg transform rotate-3"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Nature's remedies, curated by Dr. Selvan!
              </motion.p>

              {/* Modified SVG with translated position */}
              <motion.svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                className="fill-none stroke-primary transform translate-x-20"
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
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsPreview;
