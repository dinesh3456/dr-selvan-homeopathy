import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const FoundationPage = () => {
  const initiatives = [
    {
      title: "Medical Camps",
      description:
        "Organizing free homeopathic medical camps throughout Maharashtra, bringing healthcare to underserved communities.",
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "COVID-19 Response",
      description:
        "Distribution of ration kits to those in need during the pandemic and continued medical camp services during the crisis.",
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
      title: "Complete Mega Medical Camps",
      description:
        "Biannual large-scale medical camps offering free check-ups, specialist consultations, and medications to the public.",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Children's Support",
      description:
        "Regular provision of nutritious meals and food supplies to orphaned children, ensuring their wellbeing and growth.",
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  const achievements = [
    {
      number: "5+",
      text: "Years of Service",
      description: "Dedicated to improving public health since 2019",
    },
    {
      number: "30+",
      text: "Medical Camps",
      description: "Free healthcare services across multiple regions",
    },
    {
      number: "5,000+",
      text: "Patients Served",
      description: "Through our various community outreach programs",
    },
    {
      number: "1,000+",
      text: "COVID Relief Kits",
      description: "Distributed during the pandemic",
    },
  ];

  // Commented out upcoming events
  // const upcomingEvents = [
  //   {
  //     date: "June 15, 2025",
  //     title: "Mega Medical Camp - Mumbai",
  //     location: "Dharavi Community Center",
  //     description:
  //       "Comprehensive health check-ups and homeopathic consultations",
  //   },
  //   {
  //     date: "July 20, 2025",
  //     title: "Children's Health Initiative",
  //     location: "Hope Orphanage, Pune",
  //     description: "Specialized pediatric care and nutrition program",
  //   },
  //   {
  //     date: "August 10, 2025",
  //     title: "Senior Citizens Wellness Camp",
  //     location: "Aashirwad Retirement Home, Chennai",
  //     description: "Focused on chronic disease management for the elderly",
  //   },
  // ];

  return (
    <Layout title="Dr. Selvan Foundation | Dr. Selvan's Homeopathy">
      {/* Hero Section with Foundation Logo - Styled similarly to Medic Talk */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Logo with animation - Similar to Medic Talk */}
            <motion.div
              className="mb-6 flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                <Image
                  src="/images/dr-selvan-foundation-logo.png"
                  alt="Dr. Selvan Foundation Logo"
                  width={320}
                  height={320}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              "Serving society with compassion and purpose"
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-end gap-3 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              5 Years of <span className="text-accent">Service</span> and{" "}
              <span className="text-primary">Impact</span>
            </h2>
          </div>
          <div
            className="bg-white p-5 rounded-lg border-l-4"
            style={{ borderColor: "#43A047" }}
          >
            <p className="text-lg text-gray-600">
              It has been five remarkable years since the inception of the Dr.
              Selvan Foundation. Throughout this journey, we have been deeply
              committed to community service and improving public health across
              various regions, bringing essential healthcare services to
              underserved communities.
            </p>
          </div>
        </motion.div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                OUR MISSION
              </motion.span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Making a <span className="text-accent">Difference</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Since our establishment, we have organized numerous medical
                camps across various regions, bringing essential healthcare
                services to underserved communities. Our foundation played a
                critical role during the COVID-19 pandemic by distributing
                ration kits to those in need and continuing to conduct medical
                camps to ensure uninterrupted healthcare access during the
                crisis.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Dr. Selvan Foundation remains dedicated to serving society
                with compassion and purpose, and we look forward to continuing
                our mission in the years to come.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/doctor-2.jpg"
                  alt="Dr. Selvan Foundation community work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Community First</h3>
                  <p className="text-sm opacity-90">
                    Our foundation's primary focus is on serving the community
                    through healthcare initiatives
                  </p>
                </div>
              </div>

              {/* Floating caption */}
              <motion.div
                className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-md max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex">
                  <div className="bg-accent text-white p-2 rounded-md mr-3">
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
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-handwritten text-gray-700">
                    Making a difference in communities across India
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Initiatives */}
        <section className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Key</span> Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Dr. Selvan Foundation has implemented several impactful
              programs that bring healthcare and support to communities in need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 text-primary mr-4">
                      {initiative.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-600">{initiative.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievement Stats */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-xl p-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Our Impact
              </h2>
              <p className="text-gray-600">
                Over the years, the Dr. Selvan Foundation has made a significant
                impact on communities in need.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-accent mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-2">
                      {achievement.text}
                    </div>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Foundation Projects Gallery */}
        <section className="mb-16">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Foundation <span className="text-primary">Projects</span>
            </h2>
            <p className="text-gray-600">
              Take a look at some of our impactful projects over the years.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <Image
                  src="/images/medical-camp.jpg"
                  alt="Medical Camp"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">Free Medical Camps</h3>
                <p className="text-sm text-gray-600">
                  Regular health check-ups and homeopathic consultations for
                  underserved communities
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <Image
                  src="/images/covid-relief.jpg"
                  alt="COVID-19 Relief"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">
                  COVID-19 Relief Efforts
                </h3>
                <p className="text-sm text-gray-600">
                  Distribution of essential supplies and medical support during
                  the pandemic
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <Image
                  src="/images/children-support.jpg"
                  alt="Children's Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">
                  Children's Nutritional Support
                </h3>
                <p className="text-sm text-gray-600">
                  Regular provision of nutritious meals and healthcare for
                  orphaned children
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Get Involved */}
        <section>
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get <span className="text-accent">Involved</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              There are many ways you can support the Dr. Selvan Foundation's
              mission. Join us in making a difference in the lives of those in
              need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => {
                const footer = document.querySelector("footer");
                if (footer) {
                  window.scrollTo({
                    top: footer.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Donate</h3>
              <p className="text-gray-600 mb-4">
                Your financial contribution helps us continue and expand our
                healthcare initiatives for underserved communities.
              </p>
              <motion.button
                className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const footer = document.querySelector("footer");
                  if (footer) {
                    window.scrollTo({
                      top: footer.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Make a Donation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => {
                const footer = document.querySelector("footer");
                if (footer) {
                  window.scrollTo({
                    top: footer.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
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
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Volunteer
              </h3>
              <p className="text-gray-600 mb-4">
                Share your time and skills to support our medical camps,
                educational programs, and community outreach efforts.
              </p>
              <motion.button
                className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Volunteer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => {
                const footer = document.querySelector("footer");
                if (footer) {
                  window.scrollTo({
                    top: footer.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mb-4">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Spread the Word
              </h3>
              <p className="text-gray-600 mb-4">
                Help us reach more people by sharing information about our
                foundation and its work with your network.
              </p>
              <motion.button
                className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Share Our Mission
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FoundationPage;
