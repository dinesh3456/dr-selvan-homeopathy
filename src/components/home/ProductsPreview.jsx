// components/home/ProductsPreview.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "Immunity Booster",
    image: "/images/product-1.jpg",
    price: "₹599",
    description:
      "Natural homeopathic formula to strengthen your immune system.",
  },
  {
    name: "Stress Relief Drops",
    image: "/images/product-2.jpg",
    price: "₹499",
    description: "Calming remedy to help manage anxiety and daily stress.",
  },
  {
    name: "Joint Care Formula",
    image: "/images/product-3.jpg",
    price: "₹649",
    description:
      "Support for joint health and mobility with natural ingredients.",
  },
  {
    name: "Digestive Wellness",
    image: "/images/product-4.jpg",
    price: "₹549",
    description: "Relief from digestive issues and improved gut health.",
  },
];

const ProductsPreview = () => {
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
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3"
              variants={itemVariants}
            >
              OUR PRODUCTS
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-2"
              variants={itemVariants}
            >
              Natural remedies for balanced health
            </motion.h2>

            <motion.p
              className="text-lg text-slate-600 max-w-2xl"
              variants={itemVariants}
            >
              Discover our range of homeopathic remedies carefully formulated by
              Dr. Selvan.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="mt-4 md:mt-0">
            <Link
              href="/products"
              className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
            >
              <span>View all products</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                {/* Tab indicator */}
                <div className="absolute top-0 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-b-lg z-10 shadow-sm">
                  <span className="text-xs text-slate-500 font-medium">
                    / {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Image section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {product.name}
                  </h3>
                  <span className="text-primary font-bold">
                    {product.price}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                >
                  <span>View Details</span>
                  <div className="ml-2 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
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
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow annotation */}
        <motion.div
          className="mt-12 relative flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-primary font-handwritten text-xl">
              <motion.span
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
              </motion.span>
            </motion.div>
            <motion.svg
              width="180"
              height="80"
              viewBox="0 0 180 80"
              className="fill-none stroke-primary"
            >
              <motion.path
                d="M90,10 Q60,40 40,65"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
              />
              <motion.path
                d="M45,60 L35,70 L30,55"
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

export default ProductsPreview;
