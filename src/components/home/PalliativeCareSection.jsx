import React from "react";
import { motion } from "framer-motion";
import AppointmentButton from "../common/AppointmentButton";
import SectionTitle from "../ui/SectionTitle";
import BlobShape from "../ui/BlobShape";

const PalliativeCareSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  // Palliative care feature cards
  const features = [
    {
      title: "Symptom Management",
      description:
        "Natural relief from pain, nausea, anxiety, and other symptoms with homeopathic remedies that work alongside conventional treatments.",
      icon: (
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
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      title: "Holistic Approach",
      description:
        "Addressing physical, emotional, psychological, and spiritual needs of both patients and families through integrated care.",
      icon: (
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Quality of Life",
      description:
        "Enhancing comfort and dignity through gentle, non-invasive treatments that improve daily functioning and overall wellbeing.",
      icon: (
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Family Support",
      description:
        "Providing guidance and care for family members to help them better support their loved ones through serious illnesses.",
      icon: (
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-orange-50">
      {/* Decorative elements */}
      <BlobShape
        color="primary"
        position="top-left"
        size="lg"
        opacity={0.03}
        animated={true}
      />

      <BlobShape
        color="accent"
        position="bottom-right"
        size="lg"
        opacity={0.03}
        animated={true}
      />

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary opacity-[0.03] transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent opacity-[0.03] transform translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          pretitle="Compassionate Care"
          title={
            <>
              Palliative <span className="text-accent">Care</span> Support
            </>
          }
          subtitle="Enhancing quality of life for patients with serious illnesses through natural homeopathic approaches that complement conventional care."
          alignment="center"
          withLine={true}
          lineColor="gradient-blue-orange"
        />

        {/* Main content with cards layout */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Top introduction card */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-10 border-t-4 border-primary"
            variants={itemVariants}
          >
            <div className="md:flex items-start gap-6">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Complementary Support for{" "}
                  <span className="text-primary">Serious Illnesses</span>
                </h3>
                <p className="text-gray-600">
                  Our palliative care approach integrates homeopathic remedies
                  with conventional treatments to provide comprehensive support
                  for patients with serious or life-limiting conditions. Dr.
                  Selvan's expertise helps manage symptoms, reduce side effects
                  of conventional treatments, and improve overall quality of
                  life.
                </p>

                <div className="mt-6">
                  <AppointmentButton
                    text="Discuss Palliative Care Options"
                    variant="accent"
                    size="md"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature cards in grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-primary"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional information panel with gradient background */}
          <motion.div
            className="rounded-xl p-6 md:p-8 overflow-hidden relative"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="md:flex items-start">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-lg flex items-center justify-center text-accent shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    When to Consider Homeopathic Palliative Care
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our palliative care services can benefit patients at any
                    stage of a serious illness, not just at end of life. Whether
                    you're looking to manage symptoms, reduce medication side
                    effects, or enhance your quality of life during treatment,
                    our homeopathic approach can provide gentle, complementary
                    support alongside your primary medical care.
                  </p>
                  <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-white/80">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-accent"
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
                      Key Benefits
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Reduced reliance on pain medications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>
                          Improved sleep quality and emotional wellbeing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>
                          Minimized side effects from conventional treatments
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>
                          Enhanced energy levels and daily functioning
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PalliativeCareSection;
