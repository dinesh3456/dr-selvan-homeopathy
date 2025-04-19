import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ProductsPreview = () => {
  // State for hover effects
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Sample product data - using the same data shown in the screenshot
  const products = [
    {
      name: "Immunity Booster",
      image: "/images/product-1.jpg", // Replace with actual image path
      price: "₹599",
      description:
        "Natural homeopathic formula to strengthen your immune system.",
      attributes: ["100% Natural", "No Side Effects", "Clinically Tested"],
      badges: ["Bestseller"],
      id: "01",
    },
    {
      name: "Stress Relief Drops",
      image: "/images/product-2.jpg", // Replace with actual image path
      price: "₹499",
      description: "Calming remedy to help manage anxiety and daily stress.",
      attributes: ["Alcohol-Free", "Safe for Children", "Regular Use"],
      badges: ["New"],
      id: "02",
    },
    {
      name: "Joint Care Formula",
      image: "/images/product-3.jpg", // Replace with actual image path
      price: "₹649",
      description:
        "Support for joint health and mobility with natural ingredients.",
      attributes: ["Anti-inflammatory", "Pain Relief", "Improved Mobility"],
      badges: [],
      id: "03",
    },
    {
      name: "Digestive Wellness",
      image: "/images/product-4.jpg", // Replace with actual image path
      price: "₹549",
      description: "Relief from digestive issues and improved gut health.",
      attributes: ["Gut Health", "Acid Reflux Relief", "IBS Support"],
      badges: ["Popular"],
      id: "04",
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
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8"
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
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            variants={itemVariants}
          >
            Homeopathic Remedies
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl"
            variants={itemVariants}
          >
            Discover our range of homeopathic remedies carefully formulated by
            Dr. Selvan.
          </motion.p>
        </motion.div>

        {/* Products grid - Matching the design in the screenshot */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
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
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-gray-500 font-medium">
                  / {product.id}
                </div>

                {/* Product badges */}
                {product.badges.map((badge, i) => (
                  <div
                    key={i}
                    className={`absolute top-3 ${i === 0 ? "ml-16" : "ml-24"} ${
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
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-blue-600 font-bold text-sm">
                  {product.price}
                </div>

                {/* Image section */}
                <div
                  className="h-48 w-full bg-gray-100 flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Image placeholder if needed */}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                {/* Product attributes */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.attributes.map((attr, i) => (
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
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {attr}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={`#product-${product.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                  >
                    <span>View Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1 group-hover:transform group-hover:translate-x-1 transition-transform"
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
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      product.id === "01"
                        ? "bg-blue-100 text-blue-600"
                        : product.id === "02"
                          ? "bg-purple-100 text-purple-600"
                          : product.id === "03"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-green-100 text-green-600"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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

        {/* View all products button */}
        <motion.div
          className="mt-12 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center border border-blue-500 text-blue-600 bg-white px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition"
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

          {/* Arrow annotation - moved more to the right */}
          <motion.div
            className="absolute -top--1 left-1/4 hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
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
                Nature's remedies, curated by Dr. Selvan!
              </motion.p>
              <motion.svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                className="fill-none stroke-primary"
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
