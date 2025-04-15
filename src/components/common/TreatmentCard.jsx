// components/common/TreatmentCard.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TreatmentCard = ({ index, title, description, image, link }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
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
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: "scale(1)",
              transition: "transform 0.5s ease",
            }}
          />
        </div>
      </div>

      {/* Content section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-6">{description}</p>

        <Link
          href={link}
          className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
        >
          <span>More details</span>
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
  );
};

export default TreatmentCard;
