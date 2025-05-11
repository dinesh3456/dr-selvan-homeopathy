// src/components/natural-treatment/VideoCategories.jsx
import React from "react";
import { motion } from "framer-motion";

const VideoCategories = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Video Categories</h3>
      <div className="flex flex-wrap items-center gap-3 border-b border-gray-200 pb-2">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-primary text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => onSelectCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default VideoCategories;
