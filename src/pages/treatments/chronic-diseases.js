// src/pages/treatments/chronic-diseases.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const ChronicDiseases = () => {
  const chronicConditions = [
    {
      title: "Arthritis Management",
      description:
        "Natural relief for joint pain, inflammation, and improved mobility without side effects.",
      icon: (
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
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a1.5 1.5 0 003 0m0-6a1.5 1.5 0 013 0v6a1.5 1.5 0 01-3 0m-3 6.5h10m0 0h-3m0 0a1.5 1.5 0 013 0v2a1.5 1.5 0 01-3 0v-2z"
          />
        </svg>
      ),
    },
    {
      title: "Asthma and Respiratory Issues",
      description:
        "Homeopathic remedies for long-term respiratory health and reduced dependency on inhalers.",
      icon: (
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Allergies and Sensitivities",
      description:
        "Constitutional treatment for seasonal allergies, food sensitivities, and environmental reactions.",
      icon: (
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Diabetes Support",
      description:
        "Complementary homeopathic care to support conventional diabetes management and prevent complications.",
      icon: (
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
      ),
    },
    {
      title: "Migraine and Headaches",
      description:
        "Safe and effective treatment for chronic migraines and headaches without dependency on painkillers.",
      icon: (
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Hypertension Management",
      description:
        "Natural blood pressure control through stress management and constitutional remedies.",
      icon: (
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Layout title="Chronic Disease Management | Dr. Selvan's Homeopathy">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Chronic Disease <span className="text-accent">Management</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Long-term relief from chronic conditions through natural, gentle
              healing"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Understanding{" "}
            <span className="text-primary">Chronic Conditions</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Chronic diseases are long-term health conditions that often require
            ongoing management. At Dr. Selvan's Homeopathy, we take a holistic
            approach to treating chronic conditions, addressing not just the
            symptoms but the underlying causes and contributing factors.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our homeopathic treatments are designed to support your body's
            natural healing processes, reduce symptoms, and improve overall
            quality of life without the side effects associated with
            conventional medications.
          </p>
        </section>

        {/* Conditions We Treat */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Conditions We <span className="text-accent">Treat</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {chronicConditions.map((condition, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 text-primary">
                    {condition.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {condition.title}
                    </h3>
                    <p className="text-gray-600">{condition.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Treatment Approach */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Treatment Approach</span>
          </h2>
          <div className="bg-blue-50 p-6 md:p-8 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Personalized Care for Long-term Results
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Each patient receives a customized treatment plan based on their
              unique constitution, symptoms, and health history. Our approach
              includes:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mt-1 mr-2"
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
                <span>Detailed case taking and constitutional analysis</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mt-1 mr-2"
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
                <span>Natural remedies with no harmful side effects</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mt-1 mr-2"
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
                <span>Regular follow-ups to monitor progress</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mt-1 mr-2"
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
                <span>Lifestyle and dietary recommendations</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Patient <span className="text-accent">Success Stories</span>
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <blockquote className="text-gray-700 italic mb-4">
              "After suffering from rheumatoid arthritis for 10 years, I was
              constantly on painkillers. Dr. Selvan's homeopathic treatment has
              significantly reduced my pain and inflammation. I can now go about
              my daily activities with much more ease and require far fewer
              medications."
            </blockquote>
            <p className="text-right text-gray-500">— Sarah M., 52, Chennai</p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="flex justify-center my-12">
          <AppointmentButton
            text="Book Your Consultation"
            variant="primary"
            size="md"
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-medium hover:from-primary-dark hover:to-accent-dark transition shadow-md inline-flex items-center"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        </div>

        {/* Related Pages */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Explore More <span className="text-accent">Treatments</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/treatments/skin-disorders"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Skin Disorders
              </h3>
              <p className="text-gray-600 text-sm">
                Natural treatment for eczema, psoriasis, and other skin
                conditions.
              </p>
            </Link>

            <Link
              href="/treatments/digestive-health"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Digestive Health
              </h3>
              <p className="text-gray-600 text-sm">
                Solutions for IBS, acid reflux, and other digestive disorders.
              </p>
            </Link>

            <Link
              href="/treatments/pediatric-care"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Pediatric Care
              </h3>
              <p className="text-gray-600 text-sm">
                Gentle and safe treatments for children's health issues.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ChronicDiseases;
