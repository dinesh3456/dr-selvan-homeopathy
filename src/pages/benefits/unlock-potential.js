// src/pages/benefits/unlock-potential.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const UnlockPotential = () => {
  // Key potential unlocking aspects
  const potentialAspects = [
    {
      title: "Heightened Vitality",
      description:
        "Experience increased energy and vitality as we strengthen your vital force, the foundation of health in homeopathy.",
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
      title: "Optimal Mental Clarity",
      description:
        "Clear brain fog and enhance cognitive function through balancing your body's systems and supporting neural health.",
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
      title: "Emotional Balance",
      description:
        "Achieve greater emotional resilience and stability through remedies that address the root causes of emotional distress.",
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
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Immune Resilience",
      description:
        "Strengthen your body's natural defenses to better resist infections and recover more quickly when illness does occur.",
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
      title: "Physical Performance",
      description:
        "Enhance physical capabilities and recovery through better circulation, oxygenation, and cellular function.",
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
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Holistic Wellness",
      description:
        "Experience a comprehensive state of wellbeing where physical, mental, and emotional aspects are in harmony.",
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
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Layout title="Unlock Your Potential | Dr. Selvan's Homeopathy">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Unlock Your <span className="text-primary">Full Potential</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Discovering your path to optimal health and vitality"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Beyond Symptom Relief to{" "}
            <span className="text-primary">True Health</span>
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Dr. Selvan's Homeopathy, we believe that true health is much more
            than the absence of disease. It's a state of optimal vitality where
            your body, mind, and spirit function at their highest capacity,
            allowing you to live life to its fullest potential.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our approach goes beyond simply treating symptoms to address the
            root causes of health issues while enhancing your body's natural
            ability to heal and thrive. Through personalized homeopathic
            treatment, we help you remove obstacles to healing and activate your
            innate vitality.
          </p>

          <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/benefit-potential.jpg"
              alt="Unlocking your health potential"
              width={1000}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Key Aspects Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How We Help{" "}
            <span className="text-primary">Unlock Your Potential</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {potentialAspects.map((aspect, index) => (
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
                    {aspect.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {aspect.title}
                    </h3>
                    <p className="text-gray-600">{aspect.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Process Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            The <span className="text-primary">Process</span> of Unlocking Your
            Potential
          </h2>
          <div className="bg-blue-50 p-6 md:p-8 rounded-xl">
            <ol className="relative border-l border-blue-200 space-y-6 pl-6">
              <li className="mb-10">
                <div className="absolute w-8 h-8 bg-blue-100 rounded-full -left-4 border border-white flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Comprehensive Assessment
                </h3>
                <p className="text-gray-700 mb-2 leading-relaxed">
                  We begin with a thorough evaluation of your current health
                  status, including:
                </p>
                <ul className="space-y-2 text-gray-700">
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
                    <span>Physical symptoms and medical history</span>
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
                    <span>Mental and emotional wellbeing</span>
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
                    <span>Dietary and lifestyle patterns</span>
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
                    <span>Constitutional type and genetic predispositions</span>
                  </li>
                </ul>
              </li>
              <li className="mb-10">
                <div className="absolute w-8 h-8 bg-blue-100 rounded-full -left-4 border border-white flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Identifying Barriers
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We carefully identify the obstacles preventing you from
                  achieving optimal health, whether they're physical imbalances,
                  toxin accumulation, nutritional deficiencies, or chronic
                  stress patterns.
                </p>
              </li>
              <li className="mb-10">
                <div className="absolute w-8 h-8 bg-blue-100 rounded-full -left-4 border border-white flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Personalized Treatment Plan
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Based on your unique constitution and health profile, we
                  develop a customized homeopathic treatment protocol designed
                  to remove barriers to healing and stimulate your body's
                  self-regulatory mechanisms.
                </p>
              </li>
              <li>
                <div className="absolute w-8 h-8 bg-blue-100 rounded-full -left-4 border border-white flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ongoing Support and Optimization
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Through regular follow-ups and adjustments to your treatment
                  plan, we continue to support your journey toward optimal
                  health, helping you progressively unlock more of your innate
                  potential.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What <span className="text-primary">Results</span> Can You Expect?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Short-Term Benefits
              </h3>
              <ul className="space-y-2 text-gray-700">
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
                  <span>Relief from immediate symptoms</span>
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
                  <span>Improved sleep quality</span>
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
                  <span>Enhanced energy levels</span>
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
                  <span>Better stress resilience</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Long-Term Transformation
              </h3>
              <ul className="space-y-2 text-gray-700">
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
                  <span>Constitutional improvement and stronger immunity</span>
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
                  <span>
                    Reduced frequency and intensity of chronic conditions
                  </span>
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
                  <span>Greater emotional stability and mental clarity</span>
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
                  <span>
                    Improved overall quality of life and aging process
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <blockquote className="text-gray-700 italic mb-4">
              "When I first came to Dr. Selvan, I was constantly fatigued,
              experiencing frequent headaches, and struggling with anxiety. I
              had tried many approaches but only got temporary relief. Dr.
              Selvan's treatment was different—it addressed my specific
              constitution and worked on a deeper level. Six months later, not
              only are my symptoms gone, but I've discovered a level of energy
              and mental clarity I didn't think was possible for me. I'm
              performing better at work, enjoying more meaningful relationships,
              and finally living life to its fullest."
            </blockquote>
            <p className="text-right text-gray-500">
              — Rajesh M., IT Professional
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="flex justify-center my-12">
          <AppointmentButton
            text="Begin Your Transformation"
            variant="primary"
            size="md"
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-medium hover:from-primary-dark hover:to-accent-dark transition shadow-md inline-flex items-center"
          />
        </div>

        {/* Related Benefits */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Explore More <span className="text-accent">Benefits</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/benefits/holistic-approach"
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
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Holistic Approach
              </h3>
              <p className="text-gray-600 text-sm">
                Discover our comprehensive approach to healing the whole person,
                not just symptoms.
              </p>
            </Link>

            <Link
              href="/benefits/natural-safe"
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Natural & Safe
              </h3>
              <p className="text-gray-600 text-sm">
                Discover how our treatments provide effective relief without
                harmful side effects.
              </p>
            </Link>

            <Link
              href="/benefits/personalized-care"
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Personalized Care
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how we create individualized treatment plans based on your
                unique constitution.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default UnlockPotential;
