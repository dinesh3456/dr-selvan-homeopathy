import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const AboutDoctor = () => {
  // Add state for managing the image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Array of doctor images including the new ones
  const doctorImages = [
    "/images/doctor-selvan.jpg",
    "/images/doctor-speaking-1.jpg",
    "/images/doctor-speaking-2.jpg",
    "/images/doctor-clinic-1.jpg",
    "/images/doctor-clinic-2.jpg",
  ];

  // Auto-advance the slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % doctorImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [doctorImages.length]);

  const ImageCarousel = () => (
    <div className="relative mb-10 mx-auto max-w-2xl">
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
        <div className="relative h-80 md:h-96 w-full bg-gray-100">
          {/* Decorative gradient overlay for enhanced visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent z-10"></div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0"
              custom={direction}
              variants={doctorImages}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Image
                src={doctorImages[currentImageIndex]}
                alt={`Dr. Selvan - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority={currentImageIndex === 0}
              />

              {/* Subtle vignette effect to enhance depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.1)] z-10"></div>
            </motion.div>
          </AnimatePresence>

          {/* Improved navigation dots with animation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
            {doctorImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentImageIndex ? 1 : -1);
                  setCurrentImageIndex(index);
                }}
                className="group relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span
                  className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index
                      ? "bg-white shadow-[0_0_6px_rgba(255,255,255,0.5)] w-5"
                      : "bg-white/60 group-hover:bg-white/90"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Caption area with subtle text animation */}
      <motion.div
        className="mt-4 text-center"
        key={`caption-${currentImageIndex}`}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <p className="text-sm text-gray-600">
          {currentImageIndex === 0
            ? "Dr. Selvan S. - Homeopathic Physician & Researcher"
            : currentImageIndex === 1 || currentImageIndex === 2
            ? "Dr. Selvan delivering educational presentations on homeopathic medicine"
            : "Dr. Selvan with patients during consultations at his clinic"}
        </p>
      </motion.div>
    </div>
  );
  return (
    <Layout
      title="About Dr. Selvan | Dr. Selvan's Homeopathy"
      hideFooter={false}
    >
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-accent">Dr. Selvan</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Dedicated Homeopathy practitioner, Researcher of Natural
              Medicines and Author"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Replace the existing Featured Image with the new Image Carousel */}
          <ImageCarousel />

          {/* Arrow Annotation - Adjusted positioning */}
          <motion.div
            className="mt-8 relative flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.span
                className="absolute bottom-8 right-[-40px] text-primary font-handwritten text-lg"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                A pioneer in homeopathic medicine!
              </motion.span>
              <motion.svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                className="fill-none stroke-primary transform scale-x-[-1] translate-x-10"
              >
                <motion.path
                  d="M10,30 Q80,50 100,30"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                />
                <motion.path
                  d="M95,30 L105,25 L100,35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                />
              </motion.svg>
            </div>
          </motion.div>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              A Young and <span className="text-accent">Accomplished</span>{" "}
              Pioneer
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Dr. Selvan S. is a young and accomplished practitioner,
              researcher, and author in the field of Homeopathic medicine. He is
              based in Dharavi which is Asia's largest slum and holds a BHMS
              degree from Vinayaka Missions Homeopathic Medical College and
              Hospital in Salem, Tamil Nadu. He has also obtained a PG-Hom
              (London) from Hahnemann College of Homeopathy in London and
              certification from the National Examination Board in Occupational
              Safety and Health (NEBOSH).
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              He completed his MD (Paediatrics) in Homeopathy at Guru Mishri
              Homeopathic Medical College and Hospital in Jalna, Maharashtra.
              Currently, He also works as a DG Approved Medical Examiner for
              Seafarers. With his extensive experience and knowledge, he has
              worked in various hospitals across different states in India.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Education and Qualifications
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong>BHMS</strong> - Vinayaka Missions Homeopathic
                    Medical College and Hospital, Salem, Tamil Nadu
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong>PG-Hom (London)</strong> - Hahnemann College of
                    Homeopathy, London
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong>MD (Paediatrics) in Homeopathy</strong> - Guru
                    Mishri Homeopathic Medical College and Hospital, Jalna,
                    Maharashtra
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong>NEBOSH Certification</strong> - National Examination
                    Board in Occupational Safety and Health
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Research and Professional Experience */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Research and{" "}
              <span className="text-accent">Professional Experience</span>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Dr. Selvan is one of the youngest leading Homeopathic researchers
              in Mumbai who has undertaken numerous Government projects and
              private studies in the field of Homeopathy. His expertise and
              dedication have allowed him to make significant contributions to
              the advancement of homeopathic medicine.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              As a DG Approved Medical Examiner for Seafarers, Dr. Selvan brings
              his homeopathic expertise to yet another specialized field. His
              work across various hospitals in different Indian states has
              enriched his understanding of diverse health challenges and
              regional health patterns.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">
                    Free Medical Camps
                  </h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Organizing free Homeopathic medical camps throughout
                  Maharashtra, bringing healthcare to underserved communities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">Pandemic Response</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Recognized for dedicated efforts during the COVID-19 pandemic,
                  particularly in Dharavi, Asia's largest slum.
                </p>
              </div>
            </div>
          </section>

          {/* Homeopathy Research Unit */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Dr. Selvan's{" "}
              <span className="text-accent">Homeopathy Research Unit</span>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Dr. Selvan is an emerging researcher with active involvement in
              various clinical trials, particularly in the field of Herbal
              Medicines and Homeopathy. He has contributed to studies such as
              the Homeopathic SARS-CoV-2 Nosode (BioSimCovex) trial conducted on
              healthy individuals during the COVID-19 pandemic.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              His portfolio also includes foundational research studies on
              anemia, gastro syrup formulations, and other homeopathic
              interventions, with several of his works published in reputed
              homeopathy journals. In addition, Dr. Selvan is currently engaged
              in nutraceutical research and is collaborating with Schwabe India
              on a drug-proving study.
            </p>

            <div className="bg-blue-50 p-6 md:p-8 rounded-xl mb-8 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Research Team Members
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        <strong>Dr. Selvan</strong> — Principal Investigator
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        <strong>Dr. Vishnu Priya A</strong> — Co-Principal
                        Investigator
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        <strong>Dr. Nazia Shaikh</strong> — Clinical Research
                        Co-ordinator
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        <strong>Laxmi Murugan</strong> — Clinical Research
                        Co-ordinator
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        <strong>Hemant Kumar</strong> — Clinical Trial Assistant
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        <strong>Aman Pal</strong> — Clinical Research
                        Co-ordinator
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        <strong>Anjali Yadav</strong> — Clinical Research
                        Co-ordinator
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Specialist Doctors Associated with the Research Unit
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    name: "Dr. Aaquib Khan",
                    qualification: "MBBS, DCH",
                    specialty: "Pediatrician",
                  },
                  {
                    name: "Dr. Kavita Shirkende",
                    qualification: "MBBS, DNB, DGO",
                    specialty: "Gynecologist",
                  },
                  {
                    name: "Dr. Uddhaos Zembare",
                    qualification: "MBBS, DNB, MD",
                    specialty: "Dermatologist",
                  },
                  {
                    name: "Dr. Maya Shankar Vishwakarma",
                    qualification: "MBBS, MS",
                    specialty: "ENT",
                  },
                  {
                    name: "Dr. Ashvini Kumar Pound",
                    qualification: "MBBS, MS",
                    specialty: "Ophthalmologist",
                  },
                  {
                    name: "Dr. Dinesh Vikram Chandra",
                    qualification: "MBBS, MD",
                    specialty: "Psychiatrist",
                  },
                  {
                    name: "Dr. Abinaya Kamaraj",
                    qualification: "BHMS, MD",
                    specialty: "Medicine",
                  },
                  {
                    name: "Dr. P.T. Poovai",
                    qualification: "BHMS, MD",
                    specialty: "Psychiatrist",
                  },
                ].map((doctor, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-bold text-gray-900 text-sm">
                      {doctor.name}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {doctor.qualification}{" "}
                      <span className="text-primary">({doctor.specialty})</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Academic Role */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Assistant Professor
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Dr. Selvan currently serves as an Assistant Professor in the
                    Department of Medicine at Sharad Chandra Pawar Homeopathic
                    Medical College and Hospital, Shrirampur.
                  </p>
                  <p className="text-gray-700 mb-4">
                    With a deep passion for teaching and a strong foundation in
                    clinical practice, he plays a pivotal role in shaping the
                    academic and professional growth of aspiring homeopathic
                    physicians.
                  </p>
                  <p className="text-gray-700">
                    Dr. Selvan is highly regarded by both students and peers for
                    his dynamic teaching style, clarity of concepts, and
                    commitment to academic excellence. While his core
                    specialization lies in medicine, his proficiency extends
                    impressively into Materia Medica and Organon of Medicine,
                    making him a versatile and inspiring educator across key
                    homeopathic subjects.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-accent/10 p-3 rounded-full text-accent mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      International Speaker
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Dr. Selvan is an esteemed international speaker known for
                    his expertise in presenting evidence-based clinical cases
                    successfully treated through homeopathy. With a strong
                    commitment to scientific validation and patient-centered
                    care, his presentations emphasize the effectiveness of
                    homeopathy through real-world case studies and outcomes.
                  </p>
                  <p className="text-gray-700 mb-4">
                    He has had the honor of being a featured speaker at several
                    prestigious international conferences, including the TCAM
                    International Congress and the 3rd Edition of the Sheikh
                    Zayed International Awards for Traditional, Complementary,
                    and Alternative Medicine (TCAM) held in Abu Dhabi.
                  </p>
                  <p className="text-gray-700">
                    Dr. Selvan was also a distinguished speaker at The Tamil
                    Nadu Dr. M.G.R. Medical University's International
                    Homeopathic Conference in Chennai, and is regularly invited
                    by renowned institutions as a guest speaker, where he
                    continues to educate, inspire, and advocate for the
                    integration of homeopathy in modern healthcare systems.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Dr. Selvan Foundation Section - NEW */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Dr. Selvan <span className="text-accent">Foundation</span>
            </h2>
            <div className="bg-orange-50 p-6 md:p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                5 Years of Service and Impact
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                It has been five remarkable years since the inception of the Dr.
                Selvan Foundation. Throughout this journey, we have been deeply
                committed to community service and improving public health.
                Since our establishment, we have organized numerous medical
                camps across various regions, bringing essential healthcare
                services to underserved communities.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900">
                      Medical Camps & COVID-19 Response
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Our foundation played a critical role during the COVID-19
                    pandemic by distributing ration kits to those in need and
                    continuing to conduct medical camps to ensure uninterrupted
                    healthcare access during the crisis.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900">
                      Community Outreach Programs
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    We extend our support to orphaned children by regularly
                    providing nutritious meals and food supplies, ensuring their
                    well-being and growth.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                <h4 className="font-bold text-gray-900 mb-3">
                  Complete Mega Medical Camps
                </h4>
                <p className="text-gray-700 text-sm">
                  In our ongoing efforts, we have institutionalized Complete
                  Mega Medical Camps held every six months, providing a wide
                  range of free medical check-ups, specialist consultations, and
                  medications to the public.
                </p>
              </div>

              <p className="text-gray-700 italic">
                The Dr. Selvan Foundation remains dedicated to serving society
                with compassion and purpose, and we look forward to continuing
                our mission in the years to come.
              </p>
            </div>
          </section>

          {/* Social Initiatives Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Social <span className="text-accent">Initiatives</span>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Dr. Selvan is actively involved in social initiatives. He serves
              as a senior research medical officer for the Truck Intervention
              Project at the Manthan Foundation. Being a part of an NGO, he
              organizes free Homeopathic medical camps throughout Maharashtra,
              providing healthcare to those in need.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              His efforts during the COVID-19 pandemic, especially in the
              initial wave in Dharavi, have been recognized and appreciated by
              Ministers, MPs, MLAs, and residents of Mumbai.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">
                    Free Medical Camps
                  </h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Organizing free Homeopathic medical camps throughout
                  Maharashtra, bringing healthcare to underserved communities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">Pandemic Response</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Recognized for dedicated efforts during the COVID-19 pandemic,
                  particularly in Dharavi, Asia's largest slum.
                </p>
              </div>
            </div>
          </section>

          {/* Community Impact Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Community <span className="text-accent">Health Initiatives</span>
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Dr. Selvan's commitment to public health extends beyond his
              clinical practice into the community, where he regularly organizes
              free medical camps and health awareness programs.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Free Medical Camps
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Virar Medical Camp - 235 patients served (2019)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Peerbhoy College Health Camp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>
                      Jivdani Virar Camp - Christian Welfare Association
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Health Awareness Programs
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>COVID-19 Prevention Initiative (2020)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>
                      Free preventive homeopathy medicine distribution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Jan Seva Free Family Health Camps</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Impact Statistics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    1,000+
                  </div>
                  <div className="text-gray-600">Patients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    100+
                  </div>
                  <div className="text-gray-600">Community Camps</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">3+</div>
                  <div className="text-gray-600">Partner Organizations</div>
                </div>
              </div>
            </div>
          </section>

          {/* Educational Initiatives Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Educational <span className="text-accent">Initiatives</span>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              In addition to his clinical work, Dr. Selvan is dedicated to
              spreading awareness and knowledge about Homeopathy. He was the
              first person who taught Homeopathy through a new and easier method
              - by creating movies on Homeopathic drugs through his own acting
              at the age of 23. These movies have been released in many
              different languages and were greatly appreciated by Homeopathy
              doctors all over the world.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Dr. Selvan is also the first person in the world to make the
              longest Bike Campaign for the awareness of Homeopathy in remote
              areas, covering more than 5000kms. This initiative was appreciated
              by all government bodies for his dedication to spreading knowledge
              about homeopathic medicine.
            </p>
          </section>

          {/* Clinical Success Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Clinical <span className="text-accent">Success</span>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Dr. Selvan regularly shares successful Homeopathic cases on social
              media, highlighting his ability to treat challenging conditions
              such as Cancer, AIDS, Paralysis, and more. His compassionate care
              and dedication have made a significant impact on the lives of his
              patients in Mumbai.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl">
              <blockquote className="text-gray-700 italic mb-4">
                "Dr. Selvan's approach combines scientific rigor with a deep
                understanding of homeopathic principles, resulting in effective
                treatments for even the most challenging cases."
              </blockquote>
              <p className="text-right text-gray-500 text-sm">
                — Medical Journal Review
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="flex justify-center mt-8 mb-4">
            <AppointmentButton
              text="Book Consultation"
              variant="accent"
              size="md"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white font-medium rounded-full hover:bg-accent-dark transition"
            />
          </div>
        </article>
      </div>
    </Layout>
  );
};
export default AboutDoctor;
