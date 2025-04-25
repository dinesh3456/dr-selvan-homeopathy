// src/components/natural-treatment/HowToUseGallery.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HowToUseGallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <div className="flex items-center">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            How to Use This Video Gallery
          </h3>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-gray-600 mb-4">
                Our video gallery contains a wealth of information about natural
                homeopathic treatments, demonstrations, and patient success
                stories. Here's how to get the most out of it:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-primary font-bold">
                      1
                    </div>
                    <h4 className="font-bold text-gray-900">
                      Browse By Category
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-11">
                    Use the category buttons above to filter videos by topic:
                    Educational, Treatment, Wellness, or Testimonials.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-primary font-bold">
                      2
                    </div>
                    <h4 className="font-bold text-gray-900">
                      Watch In Gallery
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-11">
                    Click on any video thumbnail to play it directly in our
                    gallery. Short videos are marked with a "Short" tag.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-primary font-bold">
                      3
                    </div>
                    <h4 className="font-bold text-gray-900">
                      View Full Details
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-11">
                    Click "View Details" to see a dedicated page with more
                    information about the video and related content.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-primary font-bold">
                      4
                    </div>
                    <h4 className="font-bold text-gray-900">Consultation</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-11">
                    After watching, book a consultation to discuss how these
                    natural treatment approaches can help with your specific
                    condition.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HowToUseGallery;
