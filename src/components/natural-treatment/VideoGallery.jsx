// src/components/natural-treatment/VideoGallery.jsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const VideoGallery = ({ videos }) => {
  // Animation variants for the gallery
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

  const videoCardVariants = {
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
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {videos.length === 0 ? (
        <div className="col-span-full text-center py-12">
          <p className="text-lg text-gray-500">
            No videos found in this category.
          </p>
        </div>
      ) : (
        videos.map((video, index) => (
          <Link
            href={`/natural-treatment/video/${video.id}`}
            key={video.id}
            passHref
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow block"
              variants={videoCardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative overflow-hidden pt-[56.25%]">
                {/* 16:9 aspect ratio */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {video.title}
                  </h3>
                  {video.isShort && (
                    <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
                      Short
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm h-12 overflow-hidden">
                  {video.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    {video.category}
                  </span>
                  <div className="flex items-center">
                    <span className="text-sm text-primary mr-2">
                      View Details
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))
      )}
    </motion.div>
  );
};

export default VideoGallery;
