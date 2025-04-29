// src/pages/homeopathy/safest-method.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const SafestMethod = () => {
  return (
    <Layout
      title="Homeopathy: The Safest Method | Dr. Selvan's Homeopathy"
      hideFooter={true}
    >
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Homeopathy: The <span className="text-accent">Safest</span> Method
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Treat the person, not the disease"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Featured Image with Annotation */}
          <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/homeopathy-safest.jpg"
              alt="Homeopathic remedies being prepared"
              width={1000}
              height={600}
              className="w-full h-auto"
            />

            {/* Annotation */}
            <motion.div
              className="absolute -bottom-6 right-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative">
                <svg
                  width="100"
                  height="60"
                  viewBox="0 0 100 60"
                  className="fill-none stroke-accent"
                >
                  <path
                    d="M90,10 Q60,60 10,30"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15,30 L5,35 L10,25"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="absolute top-0 right-0 font-handwritten text-lg text-accent transform rotate-3">
                  Safe for all ages, from infants to the elderly!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Safety First: The Homeopathic{" "}
              <span className="text-accent">Advantage</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Homeopathy is widely regarded as one of the safest medical
              approaches in the world. Unlike many conventional medications that
              may carry risks of side effects or dependency, homeopathic
              remedies work gently with your body's natural healing processes.
            </p>
          </section>

          {/* Suitable for Everyone Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Suitable for <span className="text-accent">Everyone</span>
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Homeopathy is suitable for people of all age groups, from
              pediatric to geriatric. The gentle nature of homeopathic remedies
              makes them particularly valuable for treating vulnerable
              populations such as:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 flex items-start hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1 text-primary flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Infants and Children
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Children respond particularly well to homeopathic treatment,
                    and the medicines are safe, non-toxic, and easy to
                    administer.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 flex items-start hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1 text-primary flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Pregnant Women
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Homeopathic remedies offer safe relief for pregnancy-related
                    issues without risk to mother or baby.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 flex items-start hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1 text-primary flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Elderly Patients
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Older patients often have multiple medications; homeopathy
                    has no drug interactions and is ideal for managing chronic
                    conditions.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 flex items-start hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1 text-primary flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Individuals with Sensitivities
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    People who are sensitive to conventional medicines can often
                    tolerate homeopathic remedies without adverse reactions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Understanding Safety Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Understanding Homeopathic{" "}
              <span className="text-accent">Safety</span>
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              All homeopathic medicines are very safe to administer, but they
              should be taken under the guidance of a qualified homeopathic
              physician. Our practitioners at Dr. Selvan's Homeopathy are
              experienced in prescribing the right remedies at the appropriate
              potencies for your specific condition.
            </p>

            <div className="bg-blue-50 p-6 md:p-8 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Important Safety Information
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In some cases, patients might experience what appears to be an
                aggravation of symptoms after starting homeopathic treatment.
                This can happen for two main reasons:
              </p>
              <ul className="space-y-4">
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
                    <strong className="text-gray-900">
                      Transitioning from conventional medicine:
                    </strong>{" "}
                    When stopping allopathic medication that has been taken for
                    a long duration, withdrawal symptoms may occur. In such
                    cases, allopathic medication should be gradually reduced
                    while introducing the homeopathic remedy under professional
                    guidance.
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
                    <strong className="text-gray-900">
                      Homeopathic aggravation:
                    </strong>{" "}
                    Sometimes, a slight, short-term aggravation of symptoms may
                    occur after taking homeopathic medication. This is typically
                    followed by long-lasting relief and is generally considered
                    a good sign of the remedy working. However, if symptoms
                    don't subside within 48 to 72 hours, you should consult your
                    homeopathic doctor.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              The Benefits of Homeopathic{" "}
              <span className="text-accent">Safety</span>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The safety profile of homeopathy offers several advantages:
            </p>

            <ul className="space-y-3 mb-6">
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
                  <strong className="text-gray-900">No side effects</strong> -
                  Unlike many conventional medicines that might cause unwanted
                  side effects
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
                  <strong className="text-gray-900">Non-addictive</strong> -
                  Homeopathic remedies don't create dependency
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
                  <strong className="text-gray-900">
                    Compatible with other treatments
                  </strong>{" "}
                  - Can be used alongside conventional medicine
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
                  <strong className="text-gray-900">
                    No drug interactions
                  </strong>{" "}
                  - Doesn't interfere with other medications
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
                  <strong className="text-gray-900">Long-term use</strong> -
                  Safe for extended periods when properly prescribed
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
                  <strong className="text-gray-900">
                    Environmentally friendly
                  </strong>{" "}
                  - Minimal resources required for production
                </span>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <div className="flex justify-center my-12">
            <AppointmentButton
              text="Book a Safe & Effective Consultation"
              variant="primary"
              size="md"
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 rounded-full font-medium hover:from-primary-dark hover:to-accent-dark transition shadow-md inline-flex items-center"
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

          {/* Related Links Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Learn More About <span className="text-accent">Homeopathy</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/homeopathy/overview"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  Homeopathy Overview
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn the fundamentals of homeopathy and its worldwide
                  popularity.
                </p>
              </Link>

              <Link
                href="/homeopathy/scope-of-homeopathy"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
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
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  Scope of Homeopathy
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover the wide range of conditions that homeopathy can
                  effectively treat.
                </p>
              </Link>

              <Link
                href="/homeopathy/treatment-methodology"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  Treatment Methodology
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore how homeopathic treatments are developed and
                  prescribed.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default SafestMethod;
