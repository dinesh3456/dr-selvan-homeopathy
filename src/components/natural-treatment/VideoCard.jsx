// src/components/natural-treatment/VideoCard.jsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LazyYouTubeVideo from "../common/LazyYouTubeVideo";

const VideoCard = ({ video, index }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover="hover"
    >
      <div className="group">
        {/* Video Thumbnail with Lazy Loading */}
        <div className="relative w-full h-44">
          <LazyYouTubeVideo
            videoId={video.id}
            title={video.title}
            aspectRatio={false}
            showTitle={false}
            className="h-full"
          />

          {/* Short video badge if applicable */}
          {video.isShort && (
            <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md shadow-sm z-10">
              Short
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
              {video.category}
            </span>
          </div>
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 h-12">
            {video.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 h-14">
            {video.description}
          </p>

          <div className="mt-4 flex justify-between items-center">
            <Link href={`/natural-treatment/video/${video.id}`} passHref>
              <motion.div
                className="text-blue-600 font-medium flex items-center group-hover:text-blue-700 transition-colors cursor-pointer"
                whileHover={{ x: 3 }}
              >
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
