// src/pages/homeopathy/principles.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const PrinciplesOfHomeopathy = () => {
  // Principles data
  const principles = [
    {
      id: 1,
      title: "The Law of Similars (Like Cures Like)",
      description:
        "A substance that can artificially produce certain disease-like symptoms on a healthy person can cure the similar symptoms when it is given to the patient in the form of Homeopathic Medicine.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      color: "primary",
    },
    {
      id: 2,
      title: "Single Remedy for Multiple Complaints",
      description:
        "Treating a person as a whole with one single remedy which is most similar in all their sufferings, rather than using different medicines for different symptoms.",
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
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
      color: "accent",
    },
    {
      id: 3,
      title: "Individualization",
      description:
        "No two patients get the same remedy even though they may be suffering from the same disease. Treatment is always tailored to the individual's unique symptom pattern.",
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
      color: "primary",
    },
    {
      id: 4,
      title: "Long-Term Results",
      description:
        "Treating skin disorders and associated complaints with the application of creams or medicine that temporarily relieve symptoms but do not cure you internally is called suppression. It leads to the development of more serious illness in the future.",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "accent",
    },
    {
      id: 5,
      title: "Order of Healing",
      description:
        "After any treatment, your health should not progress from milder illness to more severe illness. There is a defined order in which cure should happen as per nature's law.",
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
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      ),
      color: "primary",
    },
    {
      id: 6,
      title: "The Minimum Dose",
      description:
        "The dose and repetition of medicine has to be minimum to ensure that the treatment is safe and free from side effects.",
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
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
      ),
      color: "accent",
    },
  ];

  return (
    <Layout
      title="Principles of Homeopathy | Dr. Selvan's Homeopathy"
      hideFooter={false}
    >
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Principles of <span className="text-accent">Homeopathy</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Teach the student about Homeopathy, treat the patient without
              side effects"
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
              src="/images/principles-of-homeopathy.jpg"
              alt="Homeopathic principles illustration"
              width={1000}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              The Foundation of{" "}
              <span className="text-primary">Homeopathic</span> Practice
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The idea of presenting the key principles of Homeopathy is to make
              our patients and readers aware that the treatment given by our
              doctors is based on scientific principles. These guiding
              principles help our doctors provide effective and personalized
              care for each patient's unique health situation.
            </p>
          </section>

          {/* Principles Cards Section with alternating primary/accent colors */}
          <section className="mb-12">
            <div className="space-y-6">
              {principles.map((principle) => (
                <motion.div
                  key={principle.id}
                  className={`bg-white p-6 rounded-xl shadow-sm border border-${principle.color}/20 hover:shadow-md transition-shadow`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: principle.id * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex items-start">
                    <div
                      className={`bg-${principle.color}/10 p-3 rounded-lg mr-4 text-${principle.color} flex-shrink-0`}
                    >
                      {principle.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold text-${principle.color} mb-2`}
                      >
                        Principle {principle.id}: {principle.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Understanding Core Principles Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Understanding the{" "}
              <span className="text-accent">Core Principles</span>
            </h2>

            {/* Highlighted Box with blue background */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-xl mb-8 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4">
                The Holistic Approach
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Unlike conventional medicine that often focuses on treating
                isolated symptoms, homeopathy addresses the entire person—mind,
                body, and spirit. This holistic approach recognizes that
                physical symptoms are often connected to emotional and mental
                states, and that true healing requires addressing all aspects of
                a person's health.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By understanding the unique way each individual experiences
                their symptoms, homeopaths can select remedies that match not
                just the physical manifestations of illness, but also the
                emotional and mental characteristics associated with them.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-accent mb-4">
                Individualization: Tailored Treatment
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                No two patients are alike, even if they have the same medical
                diagnosis. Each person experiences illness in their own unique
                way. Homeopathy recognizes this individuality and tailors
                treatment to each person's specific symptom pattern.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                This is why a homeopathic consultation typically involves a
                detailed discussion not just about your physical symptoms, but
                also about your emotional state, sleep patterns, food
                preferences, and many other aspects of your life. All these
                factors help the homeopath identify the remedy that most closely
                matches your unique symptom picture.
              </p>
            </div>
          </section>

          {/* CTA Section with accent orange */}
          <div className="flex justify-center my-12">
            <AppointmentButton
              text="Experience Principled Treatment"
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

          {/* Related Links Section - Alternating primary/accent colors */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Explore <span className="text-primary">More</span> About
              Homeopathy
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
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
                  Discover the fascinating origins and development of
                  homeopathy.
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

              <Link
                href="/homeopathy/myths-and-facts"
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
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  Myths and Facts
                </h3>
                <p className="text-gray-600 text-sm">
                  Separate fact from fiction about homeopathic treatment.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default PrinciplesOfHomeopathy;
