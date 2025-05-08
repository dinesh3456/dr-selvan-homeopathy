// src/pages/homeopathy/scope-of-homeopathy.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const ScopeOfHomeopathy = () => {
  const conditions = [
    { name: "Arthritis and Joint Problems", icon: "🦴" },
    { name: "Respiratory Conditions", icon: "🫁" },
    { name: "Allergies & Skin Problems", icon: "🤧" },
    { name: "Digestive Issues", icon: "🧬" },
    { name: "Headaches & Migraines", icon: "🧠" },
    { name: "Stress, Anxiety & Depression", icon: "🧘" },
    { name: "Women's Health Issues", icon: "👩" },
    { name: "Pediatric Problems", icon: "👶" },
    { name: "Auto-immune Disorders", icon: "🛡️" },
    { name: "Chronic Fatigue Syndrome", icon: "😴" },
  ];

  return (
    <Layout
      title="Scope of Homeopathy | Dr. Selvan's Homeopathy"
      hideFooter={true}
    >
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Scope of <span className="text-accent">Homeopathy</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Cure the disease, not suppress it"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Extensive Range of{" "}
              <span className="text-accent">Homeopathic</span> Treatment
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Homeopathy is known to cure various types of chronic and acute
              complaints. People have experienced benefits over a wide range of
              illnesses, from common ailments to complex chronic conditions. At
              Dr. Selvan's Homeopathy, we offer comprehensive treatment for
              numerous health challenges.
            </p>

            {/* Common Conditions Grid */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Common Conditions Treated with{" "}
                <span className="text-accent">Homeopathy</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-2xl mr-4 flex-shrink-0">
                      {condition.icon}
                    </span>
                    <span className="text-gray-800 font-medium">
                      {condition.name}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-gray-600 italic">
                This is just a partial list. Homeopathy can address many other
                conditions as well.
              </p>
            </div>
          </section>

          {/* Detailed Conditions Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Detailed Range of <span className="text-accent">Conditions</span>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The scope of homeopathy extends to numerous health challenges,
              including:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-accent"
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
                  <strong className="text-gray-900">Musculoskeletal:</strong>{" "}
                  Arthritis, backache, rheumatoid arthritis, and other types of
                  chronic and acute pain
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-accent"
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
                  <strong className="text-gray-900">Respiratory:</strong>{" "}
                  Allergies, cough, colds, flu, asthma
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-accent"
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
                  <strong className="text-gray-900">Dermatological:</strong>{" "}
                  Atopic dermatitis, eczema, psoriasis, and other skin problems
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-accent"
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
                  <strong className="text-gray-900">Digestive:</strong>{" "}
                  Constipation, diarrhea, digestive problems, irritable bowel
                  syndrome, intestinal complaints
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-accent"
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
                  <strong className="text-gray-900">Neurological:</strong>{" "}
                  Headaches, migraines, epilepsy
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-accent"
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
                  <strong className="text-gray-900">ENT:</strong> Ear pain,
                  tonsillitis, sinusitis
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-accent"
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
                  <strong className="text-gray-900">Psychological:</strong>{" "}
                  Depression, anxiety, stress-related disorders
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-accent"
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
                  <strong className="text-gray-900">Pediatric:</strong> Common
                  childhood ailments, behavioral issues
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-accent"
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
                  <strong className="text-gray-900">Others:</strong> Fevers,
                  hairfall, insomnia, fatigue, autoimmune conditions
                </span>
              </li>
            </ul>
          </section>

          {/* Supportive Treatment Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Supportive <span className="text-accent">Treatment</span>
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Homeopathy can also be used as supportive treatment alongside
              conventional medicine in serious infections and conditions. This
              complementary approach can enhance recovery and reduce side
              effects of conventional treatments.
            </p>
          </section>

          {/* Consultation Process Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              The Consultation <span className="text-accent">Process</span>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              During your first consultation at Dr. Selvan's Homeopathy, our
              doctors will:
            </p>

            <div className="pl-6 mb-6">
              <ol className="list-decimal space-y-2 text-gray-700">
                <li className="pl-2">
                  Conduct a thorough assessment to diagnose your condition
                </li>
                <li className="pl-2">Determine the stage of your illness</li>
                <li className="pl-2">
                  Evaluate the scope of homeopathy in treating your specific
                  case
                </li>
                <li className="pl-2">
                  Provide realistic feedback on the possible benefits
                </li>
                <li className="pl-2">
                  Estimate the duration of treatment required
                </li>
              </ol>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-xl font-bold text-accent mb-4">
                Treatment Timeline
              </h3>
              <p className="text-gray-700 mb-3">
                For chronic complaints that you've been suffering from for
                several years, homeopathic treatment might take some time to
                provide permanent relief. However, symptomatic relief can often
                be experienced as early as four to six weeks.
              </p>
              <p className="text-sm text-gray-600 italic">
                The exact timeline varies based on the nature of the condition,
                its duration, and individual response to treatment.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="flex justify-center mb-12">
            <AppointmentButton
              text="Book a Consultation"
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

          {/* Related Information Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Related <span className="text-accent">Information</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/homeopathy/treatment-methodology"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
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
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  Treatment Methodology
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn about our holistic approach to treatment and how
                  homeopathic remedies work.
                </p>
              </Link>
              <Link
                href="/homeopathy/safest-method"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  Safest Method
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover why homeopathy is considered the safest approach to
                  healing.
                </p>
              </Link>

              <Link
                href="/homeopathy/principles"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
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
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  Principles of Homeopathy
                </h3>
                <p className="text-gray-600 text-sm">
                  Understand the core principles that guide homeopathic
                  practice.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default ScopeOfHomeopathy;
