// src/pages/homeopathy/treatment-methodology.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";

const TreatmentMethodology = () => {
  return (
    <Layout
      title="Homeopathic Treatment Methodology | Dr. Selvan's Homeopathy"
      hideFooter={true}
    >
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Homeopathic <span className="text-accent">Treatment</span>{" "}
              Methodology
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Treating the disease doesn't cure the patient completely"
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
              src="/images/treatment-methodology.jpg"
              alt="Homeopathic consultation and treatment"
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
                  A holistic approach to healing!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Homeopathic Approach to{" "}
              <span className="text-accent">Treatment</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Homeopathy is known for its safe and gentle approach to healing.
              It stands apart from conventional medicine by treating the whole
              person rather than just focusing on isolated symptoms. At Dr.
              Selvan's Homeopathy, we follow a comprehensive methodology that
              addresses the root causes of illness.
            </p>

            <div className="bg-blue-50 p-6 md:p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Characteristics of Homeopathic Treatment
              </h3>
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
                    <strong className="text-gray-900">Natural Healing:</strong>{" "}
                    Homeopathic medicine acts by stimulating your body's natural
                    healing power through your immune system and nerves.
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
                      Holistic Approach:
                    </strong>{" "}
                    We consider physical, mental, and emotional aspects of your
                    health to provide comprehensive treatment.
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
                      Individualized Care:
                    </strong>{" "}
                    No two patients receive identical treatment, even if they're
                    suffering from the same condition.
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
                      Safe and Non-Toxic:
                    </strong>{" "}
                    Homeopathic remedies are non-toxic, non-addictive, and have
                    no side effects when properly prescribed.
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
                      Complementary Role:
                    </strong>{" "}
                    Homeopathic remedies don't interfere with conventional
                    medicine or any other medication and can play a
                    complementary role in your overall treatment.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Treatment Process Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Our <span className="text-accent">Treatment</span> Process
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Dr. Selvan's Homeopathy, we follow a systematic approach to
              ensure effective treatment:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold flex-shrink-0">
                    1
                  </div>
                  <h4 className="font-bold text-gray-900">
                    Initial Consultation
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A comprehensive assessment of your physical and emotional
                  health, medical history, lifestyle, and specific symptoms.
                  This detailed conversation helps us understand you as a unique
                  individual.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold flex-shrink-0">
                    2
                  </div>
                  <h4 className="font-bold text-gray-900">Remedy Selection</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Based on your unique symptom pattern, constitution, and health
                  history, we select the most appropriate homeopathic remedy
                  that matches your specific condition.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold flex-shrink-0">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900">Treatment Plan</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We develop a personalized treatment plan that includes the
                  remedy, potency, dosage, and frequency, along with appropriate
                  dietary and lifestyle recommendations to complement your
                  healing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold flex-shrink-0">
                    4
                  </div>
                  <h4 className="font-bold text-gray-900">Follow-up Care</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Regular follow-up consultations to monitor your progress,
                  evaluate the remedy's effect, and make adjustments to your
                  treatment plan as needed for optimal results.
                </p>
              </div>
            </div>
          </section>

          {/* Scientific Evidence Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Scientific Evidence for{" "}
              <span className="text-accent">Homeopathy</span>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The efficacy of homeopathic medicines has been proven through
              several double-blind clinical trials in treating various diseases.
              There are over 600 published research studies, 180 controlled and
              120 randomized trials that demonstrate the effectiveness of
              homeopathy.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              This growing body of scientific evidence supports what millions of
              patients worldwide have experienced firsthand: homeopathy offers a
              gentle yet effective approach to healing that works in harmony
              with the body's natural processes.
            </p>

            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-6">
              <h3 className="text-xl font-bold text-accent mb-4">
                The Difference in Our Approach
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Unlike conventional medicine that often focuses on suppressing
                symptoms, homeopathic treatment aims to address the underlying
                cause of illness, leading to deeper and more lasting healing. We
                don't just treat the disease; we treat <em>you</em> as a whole
                person.
              </p>
              <p className="text-sm text-gray-600 italic">
                This fundamental difference in approach is why many patients
                find relief with homeopathy after trying various conventional
                treatments without success.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="flex justify-center my-12">
            <Link
              href="/appointment"
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-medium hover:from-primary-dark hover:to-accent-dark transition shadow-md inline-flex items-center"
            >
              Experience Our Treatment Approach
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
            </Link>
          </div>

          {/* Related Links Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Related <span className="text-accent">Information</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/homeopathy/principles"
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
                  Principles of Homeopathy
                </h3>
                <p className="text-gray-600 text-sm">
                  Understand the fundamental principles that guide homeopathic
                  treatment.
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  Scope of Homeopathy
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover the wide range of conditions effectively treated with
                  homeopathy.
                </p>
              </Link>

              <Link
                href="/homeopathy/history"
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  History of Homeopathy
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn about the fascinating origins and development of
                  homeopathy.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default TreatmentMethodology;
