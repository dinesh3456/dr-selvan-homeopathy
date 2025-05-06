// src/pages/about/team.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";

const TeamMember = ({
  name,
  role,
  image,
  description,
  specialty,
  education,
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0 relative h-60 md:h-auto md:w-48">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover md:h-full md:w-48"
          />
        </div>
        <div className="p-6">
          <div className="flex items-baseline">
            <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-primary">
              {role}
            </span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-gray-900">{name}</h3>
          <p className="mt-1 text-sm text-primary">{specialty}</p>
          <p className="mt-2 text-gray-600">{description}</p>
          {education && (
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-gray-900">Education</h4>
              <ul className="mt-1 text-sm text-gray-600">
                {education.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const AboutTeam = () => {
  // Dummy team data
  const teamMembers = [
    {
      name: "Dr. Jane Smith",
      role: "Senior Homeopathic Physician",
      image: "/images/team-member-1.jpg",
      specialty: "Chronic Disease Management",
      description:
        "With over 15 years of experience in homeopathic medicine, Dr. Smith specializes in treating chronic diseases with a focus on autoimmune conditions.",
      education: [
        "BHMS, Government Homeopathic Medical College",
        "MD Homeopathy, National Institute of Homeopathy",
        "Certificate in Advanced Clinical Homeopathy, London School of Homeopathy",
      ],
    },
    {
      name: "Dr. Rahul Patel",
      role: "Pediatric Specialist",
      image: "/images/team-member-2.jpg",
      specialty: "Pediatric Homeopathy",
      description:
        "Dr. Patel has dedicated his career to treating children with gentle, effective homeopathic remedies. He brings a compassionate approach to pediatric care.",
      education: [
        "BHMS, Nehru Homeopathic Medical College",
        "PG Diploma in Pediatric Homeopathy",
        "Fellowship in Clinical Research",
      ],
    },
    {
      name: "Dr. Priya Sharma",
      role: "Research Associate",
      image: "/images/team-member-3.jpg",
      specialty: "Clinical Research & Documentation",
      description:
        "Leading our research initiatives, Dr. Sharma works tirelessly to document treatment outcomes and develop new homeopathic protocols.",
      education: [
        "BHMS, Mumbai University",
        "PhD in Homeopathic Research Methodology",
        "Certified in Medical Statistics",
      ],
    },
    {
      name: "Arun Kumar",
      role: "Patient Care Coordinator",
      image: "/images/team-member-4.jpg",
      specialty: "Patient Relations & Counseling",
      description:
        "Arun ensures that every patient receives personalized attention and guidance throughout their treatment journey.",
      education: [
        "Bachelor's in Healthcare Management",
        "Diploma in Patient Counseling",
        "Certification in Homeopathic Pharmacy Management",
      ],
    },
  ];

  return (
    <Layout title="Our Team | Dr. Selvan's Homeopathy">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Dedicated professionals committed to natural healing excellence"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet the Experts Behind{" "}
              <span className="text-primary">Dr. Selvan's</span>{" "}
              <span className="text-accent">Homeopathy</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of dedicated professionals brings together decades of
              experience in homeopathic medicine, research, and patient care.
              Each member plays a vital role in providing comprehensive,
              personalized care to every patient.
            </p>
          </motion.div>

          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                description={member.description}
                specialty={member.specialty}
                education={member.education}
              />
            ))}
          </div>
        </section>

        {/* Team Philosophy Section */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Team Philosophy
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
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
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Collaborative Care
                </h3>
                <p className="text-gray-600">
                  We work together across specialties to ensure each patient
                  receives comprehensive care that addresses all aspects of
                  their health.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Personalized Approach
                </h3>
                <p className="text-gray-600">
                  We believe that every patient is unique, requiring
                  individualized treatment plans tailored to their specific
                  health needs and constitution.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
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
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Continued Education
                </h3>
                <p className="text-gray-600">
                  We are committed to ongoing professional development, staying
                  current with the latest research and advancements in
                  homeopathic medicine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Joining Our Team?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented, passionate professionals to
              join our mission of providing exceptional homeopathic care.
            </p>
            <motion.a
              href="/about/careers"
              className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-dark transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Career Opportunities
              <svg
                className="ml-2 h-5 w-5"
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
            </motion.a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutTeam;
