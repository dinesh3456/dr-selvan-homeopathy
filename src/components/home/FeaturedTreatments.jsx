// components/home/FeaturedTreatments.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
];

const FeaturedTreatments = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-accent to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our Specialized Treatments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Dr. Selvan's Homeopathy, we offer effective treatments for a wide
            range of health conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <Link
                  href={treatment.link}
                  className="text-primary font-medium hover:text-primary-dark flex items-center"
                >
                  Learn more
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
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/treatments"
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition shadow-md"
          >
            View All Treatments
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;
