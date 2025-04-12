// components/home/TestimonialsSection.jsx
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    avatar: "/images/testimonial-1.jpg",
    condition: "Chronic Migraine",
    quote:
      "After years of suffering from debilitating migraines, Dr. Selvans homeopathic treatment gave me my life back. The personalized approach made all the difference.",
    location: "Chennai, India",
  },
  {
    name: "Mohammed Al-Farsi",
    avatar: "/images/testimonial-2.jpg",
    condition: "Eczema",
    quote:
      "My son struggled with severe eczema for years. Within three months of Dr. Selvans treatment, his skin cleared up completely. Were so grateful!",
    location: "Dubai, UAE",
  },
  {
    name: "Rebecca Johnson",
    avatar: "/images/testimonial-3.jpg",
    condition: "Digestive Issues",
    quote:
      "I had been dealing with IBS for over a decade. Dr. Selvan took the time to understand my symptoms and created a treatment plan that finally brought relief.",
    location: "London, UK",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-accent opacity-50 -z-10" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-secondary opacity-20 -z-10" />

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Patient Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our patients who have experienced the healing power of Dr.
            Selvan's homeopathy.
          </p>
        </div>

        <div className="relative">
          {/* Annotation */}
          <motion.div
            className="absolute -top-16 right-0 md:right-20 z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <svg
                width="100"
                height="60"
                viewBox="0 0 100 60"
                className="fill-none stroke-primary"
              >
                <path
                  d="M0,30 Q30,0 70,20"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M65,20 L75,25 L70,15"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute top-0 left-2 text-primary font-handwritten text-lg transform -rotate-6">
                Real stories from real patients!
              </span>
            </div>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`bg-accent rounded-xl p-6 shadow-md hover:shadow-lg transition cursor-pointer
                    ${activeIndex === index ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                      <div className="mt-1 bg-primary bg-opacity-20 text-primary text-xs py-1 px-2 rounded-full inline-block">
                        {testimonial.condition}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-gray-600 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="mt-4 flex justify-start">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
