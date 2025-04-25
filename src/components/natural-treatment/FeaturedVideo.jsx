// src/components/natural-treatment/FeaturedVideo.jsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FeaturedVideo = () => {
  const featuredVideo = {
    id: "uliztx1_oLk",
    title: "Homeopathic Treatment Approach",
    description:
      "Learn about Dr. Selvan's approach to homeopathic treatment and how it differs from conventional medicine. In this comprehensive video, Dr. Selvan explains the principles behind our natural treatment methods and how they can help address a wide range of health conditions.",
  };

  return (
    <div className="mb-16">
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative overflow-hidden aspect-video md:aspect-auto">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${featuredVideo.id}?autoplay=0&rel=0`}
              title={featuredVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full mb-4">
                Featured Video
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {featuredVideo.title}
              </h2>
              <p className="text-gray-600 mb-6">{featuredVideo.description}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/natural-treatment/video/${featuredVideo.id}`}
                  passHref
                >
                  <motion.div
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Watch Full Video
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
                  </motion.div>
                </Link>
                <a
                  href="/appointment"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white font-medium rounded-full hover:bg-accent-dark transition"
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedVideo;
