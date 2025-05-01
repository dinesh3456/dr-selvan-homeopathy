// src/pages/treatments/digestive-health.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const DigestiveHealth = () => {
  const digestiveConditions = [
    {
      title: "Irritable Bowel Syndrome (IBS)",
      description:
        "Natural relief for IBS symptoms including bloating, constipation, diarrhea, and abdominal pain.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Acid Reflux & GERD",
      description:
        "Treatment for heartburn, acid reflux, and GERD without dependency on antacids.",
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Inflammatory Bowel Disease",
      description:
        "Supportive treatment for ulcerative colitis and Crohn's disease management.",
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
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      title: "Constipation and Piles",
      description:
        "Natural remedies for chronic constipation, hemorrhoids, and digestive irregularity.",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Food Intolerances",
      description:
        "Treatment for lactose intolerance, gluten sensitivity, and other food-related digestive issues.",
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
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Gastritis & Ulcers",
      description:
        "Healing treatment for stomach inflammation, gastritis, and peptic ulcers.",
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
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Layout title="Digestive Health Treatment | Dr. Selvan's Homeopathy">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Digestive Health <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Restore gut health naturally with homeopathic care"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Your Path to{" "}
            <span className="text-primary">Digestive Wellness</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Digestive health is fundamental to overall well-being. Our
            homeopathic approach recognizes that each person's digestive system
            is unique and requires individualized treatment to achieve lasting
            relief.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We focus on identifying and treating the root causes of digestive
            disorders rather than just suppressing symptoms, helping you achieve
            sustainable digestive health without dependency on medications.
          </p>
        </section>

        {/* Conditions We Treat */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Digestive Conditions We <span className="text-accent">Treat</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {digestiveConditions.map((condition, index) => (
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

        {/* Benefits of Homeopathy */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Benefits of <span className="text-primary">Homeopathic</span>{" "}
            Digestive Treatment
          </h2>
          <div className="bg-blue-50 p-6 md:p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Natural Healing
                </h3>
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
                    <span>No dependency on antacids or laxatives</span>
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
                    <span>Addresses root causes, not just symptoms</span>
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
                    <span>Safe for long-term use</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Personalized Care
                </h3>
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
                    <span>Treatment based on individual constitution</span>
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
                    <span>Considers dietary and lifestyle factors</span>
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
                    <span>Holistic approach to overall health</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Approach */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our <span className="text-accent">Treatment Approach</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Comprehensive Assessment
              </h3>
              <p className="text-gray-600">
                Detailed evaluation of digestive symptoms, eating patterns, and
                lifestyle factors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Individualized Remedies
              </h3>
              <p className="text-gray-600">
                Custom selected homeopathic medicines based on your specific
                symptoms and constitution.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Progress Monitoring
              </h3>
              <p className="text-gray-600">
                Regular follow-ups to track improvement and adjust treatment as
                needed.
              </p>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Patient <span className="text-accent">Success Story</span>
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <blockquote className="text-gray-700 italic mb-4">
              "I struggled with severe IBS for over 5 years. The constant
              bloating, pain, and discomfort affected my work and social life.
              After starting homeopathic treatment with Dr. Selvan, I gradually
              noticed my symptoms improving. Now, 4 months later, I can eat
              normally and live without the fear of sudden flare-ups. It has
              truly changed my life."
            </blockquote>
            <p className="text-right text-gray-500">
              — Rahul M., 32, Software Engineer
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="flex justify-center my-12">
          <AppointmentButton
            text="Start Your Digestive Healing"
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
              href="/treatments/chronic-diseases"
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
                Chronic Disease Management
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

export default DigestiveHealth;
