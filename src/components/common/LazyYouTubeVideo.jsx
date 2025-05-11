// src/components/common/LazyYouTubeVideo.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * LazyYouTubeVideo - A component that only loads the YouTube iframe when clicked
 * @param {string} videoId - YouTube video ID
 * @param {string} title - Video title for accessibility
 * @param {boolean} aspectRatio - Whether to maintain 16:9 aspect ratio (default: true)
 * @param {string} thumbnailQuality - Quality of YouTube thumbnail (default: maxresdefault)
 * @param {boolean} showTitle - Whether to show the title overlay on thumbnail (default: false)
 * @param {Function} onPlay - Callback function when video is played (optional)
 */
const LazyYouTubeVideo = ({
  videoId,
  title,
  aspectRatio = true,
  thumbnailQuality = "maxresdefault",
  showTitle = false,
  onPlay,
  className = "",
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const loadVideo = () => {
    setIsVideoLoaded(true);
    if (onPlay && typeof onPlay === "function") {
      onPlay(videoId);
    }
  };

  // Animation variants
  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const containerClasses = `relative overflow-hidden ${
    aspectRatio ? "pb-[56.25%]" : ""
  } bg-gray-200 rounded-lg ${className}`;

  return (
    <div className={containerClasses}>
      <AnimatePresence mode="wait">
        {!isVideoLoaded ? (
          <motion.div
            className="absolute inset-0 cursor-pointer"
            onClick={loadVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover="hover"
          >
            {/* Thumbnail Image */}
            <div className="relative w-full h-full">
              {/* YouTube thumbnail */}
              <Image
                src={`https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  // Fallback to lower quality if high quality not available
                  e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }}
              />

              {/* Dark overlay with title for hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4"
                variants={overlayVariants}
                initial="initial"
              >
                {showTitle && (
                  <h3 className="text-white font-bold text-lg md:text-xl">
                    {title}
                  </h3>
                )}
              </motion.div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-accent fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LazyYouTubeVideo;
