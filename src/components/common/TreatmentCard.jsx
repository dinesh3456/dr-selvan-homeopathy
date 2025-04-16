import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const TreatmentCard = ({ title, description, image, link, index }) => {
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
          <div
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-6">{description}</p>

        <Link href={link}>
          <a className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
            <span>More details</span>
            <div className="ml-2 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
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
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

const FeaturedTreatments = () => {
  const treatments = [
    {
      title: "Chronic Disease Management",
      description:
        "Long-term relief from conditions like arthritis, asthma, and allergies with natural remedies.",
      image: "/images/treatment-chronic.jpg",
      link: "/treatments/chronic-diseases",
    },
    {
      title: "Skin Disorders",
      description:
        "Effective solutions for eczema, psoriasis, acne, and other persistent skin conditions.",
      image: "/images/treatment-skin.jpg",
      link: "/treatments/skin-disorders",
    },
    {
      title: "Digestive Health",
      description:
        "Address IBS, acid reflux, and other digestive issues with targeted homeopathic treatments.",
      image: "/images/treatment-digestive.jpg",
      link: "/treatments/digestive-health",
    },
    {
      title: "Pediatric Care",
      description:
        "Gentle and effective treatments for children's health issues, from colic to behavioral problems.",
      image: "/images/treatment-pediatric.jpg",
      link: "/treatments/pediatric-care",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Treatments
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Art and science of homeopathic wellness
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            At Dr. Selvan's Homeopathy, we offer effective natural treatments
            for a wide range of health conditions.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mt-6 h-1 w-40 bg-gradient-to-r from-blue-600 to-blue-200 rounded-full"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={index}
              index={index}
              title={treatment.title}
              description={treatment.description}
              image={treatment.image}
              link={treatment.link}
            />
          ))}
        </div>

        {/* View all button with arrow */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/treatments">
            <a className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all">
              <span>View All Treatments</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </motion.div>

        {/* Arrow annotation */}
        <div className="absolute bottom-10 right-10">
          <div className="relative">
            <p className="absolute -top-8 right-16 text-blue-600 font-serif italic text-lg transform -rotate-6">
              Discover all our specialized treatments!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;
