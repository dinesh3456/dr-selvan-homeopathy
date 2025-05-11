// src/components/natural-treatment/VideoGallery.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import VideoCard from "./VideoCard";

const VideoGallery = ({ videos }) => {
  const [visibleVideos, setVisibleVideos] = useState(6);

  // Load more videos
  const loadMore = () => {
    setVisibleVideos((prev) => Math.min(prev + 6, videos.length));
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Videos ({videos.length})
        </h2>
        <p className="text-gray-600">
          Explore our collection of informative videos about homeopathic
          treatments and health topics
        </p>
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {videos.slice(0, visibleVideos).map((video, index) => (
          <VideoCard key={video.id} video={video} index={index} />
        ))}
      </div>

      {/* Load more button - only show if there are more videos to load */}
      {visibleVideos < videos.length && (
        <div className="flex justify-center">
          <motion.button
            onClick={loadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Videos
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        </div>
      )}

      {/* Empty state */}
      {videos.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
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
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            No videos found
          </h3>
          <p className="text-gray-600">
            There are no videos available in this category yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
