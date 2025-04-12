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
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our range of homeopathic remedies carefully formulated by
              Dr. Selvan.
            </p>
          </div>
          <Link
            href="/products"
            className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:text-primary-dark"
          >
            View all products
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
        </div>

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
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark">{product.name}</h3>
                <p className="text-primary font-bold mt-1">{product.price}</p>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block mt-3 w-full bg-primary text-white text-center py-2 rounded-md hover:bg-primary-dark transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Annotation */}
        <motion.div
          className="relative mt-12 ml-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <svg
              width="100"
              height="60"
              viewBox="0 0 100 60"
              className="absolute -top-16 -left-20 fill-none stroke-primary"
            >
              <path
                d="M10,40 Q40,10 90,30"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M85,30 L95,35 L90,25"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-handwritten text-lg text-primary transform -rotate-3">
              Nature's remedies, curated by Dr. Selvan!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsPreview;
