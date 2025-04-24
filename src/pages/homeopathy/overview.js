// src/pages/homeopathy/overview.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";

const HomeopathyOverview = () => {
  return (
    <Layout
      title="Homeopathy Overview | Dr. Selvan's Homeopathy"
      hideFooter={false}
    >
      {/* Hero Section with Blue to White Gradient Background */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              <span className="text-accent">Homeopathy</span>: An Overview
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Teach Homoeopathy lively and easily"
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
              src="/images/homeopathy-overview.jpg"
              alt="Homeopathic remedies and ingredients"
              width={1000}
              height={600}
              className="w-full h-auto"
            />

            {/* Annotation with accent color */}
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
                  A scientific approach to natural healing!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              What is <span className="text-primary">Homeopathy</span>?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Homeopathy is a medical science introduced and developed by German
              physician Dr. Samuel Hahnemann. It is based on the principle of
              <strong className="text-slate-900"> 'like cures like'</strong>. In
              simple words, it means that any substance that produces symptoms
              in a healthy person can cure similar symptoms in a person who is
              sick. This fundamental concept is referred to as the 'Law of
              Similars'.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              This holistic system of medicine focuses on treating the entire
              person, not just isolated symptoms. By stimulating the body's
              natural healing mechanisms, homeopathy aims to restore balance and
              promote lasting wellness.
            </p>
          </section>

          {/* Worldwide Popularity Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Worldwide <span className="text-accent">Popularity</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Homeopathy is known for its safe and gentle ways of healing.
              People across the world prefer Homeopathy over conventional
              medicine, as it has no side effects, and is non-toxic and
              non-addictive. In the last few years, Homeopathy has grown three
              times faster than Allopathy (25-30% annually). It is presently the
              2nd largest system of medicine in the world, according to the
              World Health Organisation (WHO).
            </p>

            {/* Highlighted Box with blue background */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-xl mb-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Global Reach of Homeopathy
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
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
                  <span>
                    <strong className="text-primary">France</strong> is the
                    largest contributor to Homeopathy in the world, followed by
                    Germany.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
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
                  <span>
                    In <strong className="text-primary">England</strong>, 42% of
                    British physicians refer patients to Homeopaths. The Royal
                    family has used Homeopathy for 3 generations.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
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
                  <span>
                    In the{" "}
                    <strong className="text-primary">United States</strong>,
                    over 6 million people use Homeopathy for self-care and
                    day-to-day health problems.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
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
                  <span>
                    In <strong className="text-primary">India</strong>, over 100
                    million people depend on Homeopathy for health issues. There
                    are around 200,000 registered Homeopathic doctors and
                    approximately 12,000 new Homeopathic doctors are registered
                    every year.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
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
                  <span>
                    Homeopathy is practiced in most{" "}
                    <strong className="text-primary">European countries</strong>{" "}
                    and is included in the national health systems of countries
                    like Brazil, Chile, Mexico, Switzerland, and the United
                    Kingdom.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Apart from curing acute and chronic diseases, Homeopathy has a
              reputation for providing relief in many conditions that are
              difficult to treat with conventional approaches. Its comprehensive
              approach to wellness makes it a valuable system of medicine for
              millions of people worldwide.
            </p>
          </section>

          {/* Scientific Basis Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              The <span className="text-primary">Scientific</span> Basis of{" "}
              <span className="text-accent">Homeopathy</span>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The efficacy of homeopathic medicines has been demonstrated
              through several double-blind clinical trials. There are over 600
              published research studies, 180 controlled and 120 randomized
              trials that support the effectiveness of homeopathy for various
              conditions.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              While the exact mechanism of action continues to be studied, many
              researchers believe homeopathic remedies work by stimulating the
              body's own healing responses through the immune system and nervous
              system.
            </p>
          </section>

          {/* CTA Section */}
          <div className="flex justify-center my-12">
            <Link
              href="/appointment"
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-medium hover:from-primary-dark hover:to-accent-dark transition shadow-md inline-flex items-center"
            >
              Book a Consultation
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

          {/* Explore More Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Explore More About <span className="text-accent">Homeopathy</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Deepen your understanding of homeopathy through our comprehensive
              guides:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/homeopathy/scope-of-homeopathy"
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center group"
              >
                <div className="bg-primary/10 p-2 rounded-full mr-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium group-hover:text-primary transition-colors">
                  Scope of Homeopathy
                </span>
              </Link>
              <Link
                href="/homeopathy/principles"
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center group"
              >
                <div className="bg-primary/10 p-2 rounded-full mr-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium group-hover:text-primary transition-colors">
                  Principles of Homeopathy
                </span>
              </Link>
              <Link
                href="/homeopathy/treatment-methodology"
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center group"
              >
                <div className="bg-blue-100 p-2 rounded-full mr-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium group-hover:text-primary transition-colors">
                  Treatment Methodology
                </span>
              </Link>
              <Link
                href="/homeopathy/myths-and-facts"
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center group"
              >
                <div className="bg-blue-100 p-2 rounded-full mr-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium group-hover:text-primary transition-colors">
                  Myths and Facts
                </span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default HomeopathyOverview;
