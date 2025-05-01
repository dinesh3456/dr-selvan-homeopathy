// src/pages/benefits/natural-safe.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const NaturalSafe = () => {
  // Safety aspects of homeopathy
  const safetyAspects = [
    {
      title: "No Side Effects",
      description:
        "Homeopathic remedies work with your body's natural healing mechanisms without disrupting normal functions or causing unwanted effects.",
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
      title: "Non-Addictive Remedies",
      description:
        "Unlike many conventional medications, homeopathic treatments create no dependency and can be safely discontinued when no longer needed.",
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
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Safe for All Ages",
      description:
        "Our remedies are gentle enough for infants, children, pregnant women, and the elderly, providing effective treatment without harm.",
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Compatible with Other Treatments",
      description:
        "Homeopathic remedies work harmoniously alongside conventional medicine without harmful interactions or complications.",
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
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
    },
    {
      title: "No Chemical Toxicity",
      description:
        "Our remedies use highly diluted natural substances that retain their therapeutic effect without any chemical toxicity.",
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
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
      ),
    },
    {
      title: "Environmentally Friendly",
      description:
        "Homeopathic remedies are not only safe for the body but also for the environment, with minimal ecological impact.",
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
  ];

  // Natural materials used in homeopathy
  const naturalSources = [
    "Plant extracts (herbs, roots, leaves)",
    "Mineral compounds",
    "Animal-derived substances",
    "Natural elements",
    "Organic compounds",
  ];

  return (
    <Layout title="Natural & Safe Treatments | Dr. Selvan's Homeopathy">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-primary">Natural</span> &{" "}
              <span className="text-primary">Safe</span> Treatments
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Gentle healing without side effects for patients of all ages"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            The <span className="text-primary">Safety</span> of Homeopathic
            Treatments
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Dr. Selvan's Homeopathy, we pride ourselves on offering
            treatments that are both highly effective and completely safe.
            Unlike conventional medications that often come with a list of
            potential side effects, homeopathic remedies work by gently
            stimulating your body's natural healing processes without
            introducing harmful chemicals or toxins.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our approach to healing is founded on the principle of "first, do no
            harm." Every remedy we prescribe is carefully selected to provide
            therapeutic benefit without risking your health or creating new
            problems while addressing existing ones.
          </p>

          <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/benefit-safe.jpg"
              alt="Natural homeopathic remedies"
              width={1000}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Safety Aspects Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Key <span className="text-primary">Safety Aspects</span> of Our
            Treatments
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {safetyAspects.map((aspect, index) => (
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

        {/* Natural Materials Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Natural</span> Materials &
            Preparation
          </h2>
          <div className="bg-blue-50 p-6 md:p-8 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sourced from Nature
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Homeopathic remedies are derived exclusively from natural sources,
              including:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              {naturalSources.map((source, index) => (
                <li key={index} className="flex items-start">
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
                  <span>{source}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These natural ingredients are carefully processed according to
              strict homeopathic guidelines to ensure purity, potency, and
              therapeutic effectiveness without introducing harmful chemicals or
              contaminants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Meticulous Preparation Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our homeopathic remedies undergo a specialized preparation process
              that involves:
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
                <span>
                  <strong>Dilution:</strong> The source material is
                  progressively diluted to reduce any potential toxicity while
                  enhancing therapeutic properties.
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
                <span>
                  <strong>Succession:</strong> A rhythmic shaking process that
                  activates and enhances the medicinal properties of the
                  substance.
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
                <span>
                  <strong>Potentization:</strong> The combined process of
                  dilution and succession that transforms the original substance
                  into a safe yet effective remedy.
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
                <span>
                  <strong>Quality Control:</strong> Stringent testing and
                  verification to ensure the purity and consistency of each
                  remedy.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Safe for Everyone Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Safe</span> for Everyone
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-primary">
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
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Infants & Children
              </h3>
              <p className="text-gray-600 text-sm">
                Gentle enough for the youngest patients, providing effective
                relief without harmful side effects.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-primary">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Pregnant Women
              </h3>
              <p className="text-gray-600 text-sm">
                Safe during pregnancy and lactation, with no risk of birth
                defects or harm to the developing baby.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-primary">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Elderly</h3>
              <p className="text-gray-600 text-sm">
                Ideal for senior patients who may be on multiple medications, as
                homeopathic remedies don't interact with pharmaceutical drugs.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <blockquote className="text-gray-700 italic mb-4">
              "As a mother of three young children, I've always been concerned
              about the side effects of conventional medicines. Dr. Selvan's
              homeopathic treatments have been a blessing for our family. They
              effectively address our health issues without causing drowsiness,
              stomach upset, or any other side effects. I feel completely
              confident giving these remedies to my children, knowing they're
              both safe and effective."
            </blockquote>
            <p className="text-right text-gray-500">
              — Priya D., Mother of three
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="flex justify-center my-12">
          <AppointmentButton
            text="Experience Safe, Natural Healing"
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
              href="/benefits/unlock-potential"
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Unlock Your Potential
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how homeopathy helps you realize your full health
                potential.
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Personalized Care
              </h3>
              <p className="text-gray-600 text-sm">
                Explore our customized treatment approach tailored to your
                unique needs.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NaturalSafe;
