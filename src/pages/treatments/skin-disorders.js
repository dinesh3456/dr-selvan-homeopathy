// src/pages/treatments/skin-disorders.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const SkinDisorders = () => {
  const skinConditions = [
    {
      title: "Eczema and Dermatitis",
      description:
        "Natural relief for itching, inflammation, and skin irritation without steroid dependency.",
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Psoriasis Treatment",
      description:
        "Constitutional approach to manage psoriasis flare-ups and reduce scaling and plaque formation.",
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
    {
      title: "Acne and Teen Skin Issues",
      description:
        "Holistic treatment for hormonal acne, teenage breakouts, and related skin conditions.",
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
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Urticaria (Hives)",
      description:
        "Treatment for chronic hives, sudden skin rashes, and allergic skin reactions.",
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
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ),
    },
    {
      title: "Vitiligo Management",
      description:
        "Homeopathic approach to restore pigmentation and manage vitiligo progression.",
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Fungal Infections",
      description:
        "Natural remedies for ringworm, athlete's foot, and other fungal skin conditions.",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Layout title="Skin Disorders Treatment | Dr. Selvan's Homeopathy">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skin Disorders <span className="text-accent">Treatment</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Gentle healing for your skin without harsh chemicals or side
              effects"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Holistic Approach to{" "}
            <span className="text-primary">Skin Health</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Skin disorders often indicate deeper imbalances in the body. Our
            homeopathic approach goes beyond superficial treatment to address
            the root causes of skin conditions, working from the inside out for
            lasting results.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We understand that skin problems can significantly impact your
            quality of life and self-confidence. Our gentle, natural remedies
            help restore skin health without the harsh side effects of
            conventional treatments.
          </p>
        </section>

        {/* Conditions We Treat */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Skin Conditions We <span className="text-accent">Treat</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skinConditions.map((condition, index) => (
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

        {/* Why Homeopathy for Skin */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-primary">Homeopathy</span> for Skin
            Issues?
          </h2>
          <div className="bg-blue-50 p-6 md:p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Safe and Gentle
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
                    <span>Long-lasting results without recurrence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Treatment <span className="text-accent">Process</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Detailed Consultation
              </h3>
              <p className="text-gray-600">
                Comprehensive history taking including skin condition timeline,
                triggers, and overall health assessment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Personalized Treatment
              </h3>
              <p className="text-gray-600">
                Custom homeopathic remedies based on your unique constitution
                and symptom pattern.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Follow-up Care
              </h3>
              <p className="text-gray-600">
                Regular monitoring of progress with remedy adjustments as needed
                for optimal results.
              </p>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Patient <span className="text-accent">Success Stories</span>
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <blockquote className="text-gray-700 italic mb-4">
              "My son had severe eczema since he was 2 years old. We tried
              countless creams and treatments, and some even prescribed
              steroids. After starting homeopathic treatment with Dr. Selvan, we
              saw gradual but consistent improvement. Now, three months later,
              his skin is completely clear, and we've avoided all steroids!"
            </blockquote>
            <p className="text-right text-gray-500">
              — Priya K., 35, Mother of patient
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="flex justify-center my-12">
          <AppointmentButton
            text="Book Your Skin Consultation"
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
                Treatment for long-term health conditions like arthritis,
                asthma, and allergies.
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

export default SkinDisorders;
