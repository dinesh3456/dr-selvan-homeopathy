// src/pages/products/index.js
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";

// Product data with updated image paths
const products = [
  {
    name: "Vitamin D Plus",
    image: "/images/vitamin-d-plus.jpg",
    price: "₹599",
    description:
      "Multivitamin, Multimineral & Calcium Tablets for all age groups. Helps with healthy bones, immunity boost and increased strength.",
    attributes: ["All Age Groups", "Dietary Supplement", "No Side Effects"],
    badges: ["Bestseller"],
    id: "01",
    category: "Dietary Supplement",
  },
  {
    name: "Ortho Grade",
    image: "/images/ortho-grade.jpg",
    price: "₹499",
    description:
      "Ayurvedic Pain Relief Oil with powerful muscle relaxant and anti-inflammatory properties. Provides quick pain relief.",
    attributes: ["External Use Only", "Ayurvedic", "Natural Ingredients"],
    badges: ["New"],
    id: "02",
    category: "Ayurvedic Oil",
  },
  {
    name: "Home Remedy Cough Syrup",
    image: "/images/cough-syrup.jpg",
    price: "₹349",
    description:
      "Natural cough syrup effective for all kinds of cough (dry, wet, spasmodic). Provides quick relief with immune support.",
    attributes: ["Non-Drowsy", "Natural Ingredients", "All Ages"],
    badges: ["Popular"],
    id: "03",
    category: "Cough Syrup",
  },
];

// Categories derived from products
const categories = [
  { name: "All Products", value: "all" },
  { name: "Homeopathic", value: "Homeopathic" },
  { name: "Dietary Supplement", value: "Dietary Supplement" },
  { name: "Ayurvedic Oil", value: "Ayurvedic Oil" },
  { name: "Cough Syrup", value: "Cough Syrup" },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on category and search term
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <Layout title="Products | Dr. Selvan's Homeopathy">
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="text-accent">Products</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our comprehensive range of homeopathic and natural
              products formulated by Dr. Selvan for various health conditions.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and search section - centered on mobile */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-4 mb-8">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category.value
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition-colors`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="w-full md:w-auto">
            <div className="relative max-w-md mx-auto md:mx-0">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-primary focus:border-primary"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Products grid - centered with flexbox */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 w-full md:w-[300px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative">
                    {/* Product badges */}
                    {product.badges &&
                      product.badges.map((badge, i) => (
                        <div
                          key={i}
                          className={`absolute top-3 ${
                            i === 0 ? "left-3" : "left-24"
                          } z-10 ${
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
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        priority={index < 2}
                        onError={(e) => {
                          console.error(
                            `Error loading image for ${product.name}`
                          );
                          e.target.src = "/images/placeholder-product.jpg"; // Fallback image
                        }}
                      />
                    </div>
                  </div>

                  <div className="p-5 text-left">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {product.name}
                    </h3>

                    <p className="text-slate-600 text-sm mb-6 h-12 overflow-hidden">
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
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {attr}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium hover:text-primary-dark hover:underline transition-colors">
                        View Details
                      </span>

                      <button
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          product.id === "01" || product.id === "04"
                            ? "bg-blue-100 text-blue-600"
                            : product.id === "02"
                            ? "bg-purple-100 text-purple-600"
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
                </Link>
              </motion.div>
            ))
          ) : (
            // Empty state - centered
            <div className="w-full py-12 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any products matching your criteria. Please try
                a different search or category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none"
              >
                View All Products
              </button>
            </div>
          )}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 shadow-sm text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Help Choosing The Right Product?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our experts can help you find the perfect remedy for your specific
              health concerns. Book a consultation with Dr. Selvan for
              personalized guidance.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition shadow-md"
            >
              <span>Book a Consultation</span>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
