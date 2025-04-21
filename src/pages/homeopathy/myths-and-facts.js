// src/pages/homeopathy/myths-and-facts.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";

const MythsAndFacts = () => {
  const mythsFacts = [
    {
      myth: "Homeopathy is just a placebo effect",
      fact: "Multiple double-blind, placebo-controlled clinical trials have demonstrated that homeopathy produces results significantly better than placebos. Over 600 published research studies, including 180 controlled and 120 randomized trials, support homeopathy's effectiveness for various conditions.",
    },
    {
      myth: "There is no scientific evidence supporting homeopathy",
      fact: "There is a substantial body of scientific evidence supporting homeopathy, including studies published in peer-reviewed journals such as The Lancet, British Medical Journal, and Pediatrics. Research continues in countries like Germany, Switzerland, and India, where homeopathy is widely practiced.",
    },
    {
      myth: "Homeopathic remedies are so diluted that they can't possibly work",
      fact: "While homeopathic remedies are indeed highly diluted, research in the fields of nanomedicine and quantum physics suggests potential mechanisms for their action. Studies have shown that the process of serial dilution and succussion (vigorous shaking) creates nanoparticles of the original substance that may have biological effects.",
    },
    {
      myth: "Homeopathy is dangerous and delays proper medical treatment",
      fact: "Homeopathy is one of the safest medical approaches available. When practiced by qualified professionals, it poses no risk of side effects or drug interactions. Many homeopaths refer patients to conventional doctors when necessary, and homeopathy can work alongside conventional medicine for many conditions.",
    },
    {
      myth: "Anyone can practice homeopathy without proper training",
      fact: "Professional homeopaths undergo extensive training—typically 3-4 years of study followed by clinical practice. In many countries, homeopathy is regulated, requiring practitioners to meet specific educational and clinical requirements to be licensed or registered.",
    },
    {
      myth: "Homeopathy can't treat serious conditions",
      fact: "While homeopathy may not replace emergency medicine for acute life-threatening conditions, it can effectively treat many serious chronic conditions when properly prescribed. Historical records show homeopathy's success during epidemics like cholera in the 19th century, with lower mortality rates in homeopathic hospitals.",
    },
    {
      myth: "Modern medicine has made homeopathy obsolete",
      fact: "Despite advances in conventional medicine, homeopathy continues to grow worldwide. It offers solutions for many chronic conditions where conventional medicine struggles, and its holistic approach addresses aspects of health that conventional medicine often overlooks.",
    },
    {
      myth: "Homeopathy was invented by an unqualified person",
      fact: "Dr. Samuel Hahnemann, the founder of homeopathy, was a qualified physician with an MD degree. He was also a chemist, linguist (knowing 8 languages), and scholar who developed homeopathy through systematic experimentation and scientific observation over many years.",
    },
  ];

  return (
    <Layout
      title="Myths and Facts of Homeopathy | Dr. Selvan's Homeopathy"
      hideFooter={true}
    >
      {" "}
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Myths and Facts of Homeopathy
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Separating misconceptions from reality in homeopathic medicine"
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
              src="/images/myths-and-facts.jpg"
              alt="Understanding homeopathy misconceptions"
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
                  className="fill-none stroke-primary"
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
                <p className="absolute top-0 right-0 font-handwritten text-lg text-primary transform rotate-3">
                  Let's clear up the misconceptions!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Understanding Homeopathy: Beyond the Myths
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Despite its 200-year history and worldwide popularity, homeopathy
              is often misunderstood. Many misconceptions about homeopathy stem
              from a lack of familiarity with its principles and practices. In
              this article, we aim to address some common myths and provide
              accurate information about this therapeutic system.
            </p>
          </section>

          {/* Myths and Facts Section */}
          <section className="my-12">
            <div className="space-y-10">
              {mythsFacts.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="bg-blue-50 p-5 border-l-4 border-red-400">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500 mr-2 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Myth: {item.myth}</span>
                    </h3>
                  </div>
                  <div className="p-5 border-l-4 border-green-400">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Fact:</span>
                    </h3>
                    <p className="text-gray-700 mt-2 leading-relaxed">
                      {item.fact}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Scientific Basis Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Scientific Basis of Homeopathy
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A common misconception is that homeopathy lacks scientific
              support. However, research in homeopathy continues to grow, with
              studies published in peer-reviewed journals exploring its
              mechanisms and clinical applications.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Some researchers suggest that the process of potentization—serial
              dilution and succussion (vigorous shaking)—may create
              nanostructures or "nanobubbles" that could interact with the
              body's cellular and molecular systems. Other theories involve
              quantum effects, epitaxy (the transfer of information from
              substances to their dilution medium), and water memory.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              While more research is needed to fully understand how homeopathy
              works, the growing body of positive clinical outcomes suggests
              that there are mechanisms at play beyond the placebo effect.
            </p>
          </section>

          {/* Clinical Practice Section */}
          <section className="mb-12">
            <div className="bg-blue-50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Homeopathy in Clinical Practice
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Dr. Selvan's Homeopathy, we've witnessed the effectiveness of
                homeopathic treatment across a wide range of conditions. Our
                patients often come to us after trying various conventional
                treatments without success, and many find relief through our
                personalized homeopathic approach.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in an integrative approach to healthcare—one that
                recognizes the value of both homeopathy and conventional
                medicine. In some cases, the best results come from combining
                approaches, while in others, homeopathy alone may provide the
                solution.
              </p>
            </div>
          </section>

          {/* Informed Choices Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Making Informed Healthcare Choices
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We encourage patients to approach all healthcare options with an
              open but critical mind. When considering homeopathy:
            </p>

            <ul className="space-y-2 text-gray-700 mb-6">
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
                <span>
                  Consult with qualified practitioners who have proper training
                  and credentials
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
                <span>
                  Maintain open communication with all your healthcare providers
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
                <span>
                  Don't delay seeking conventional medical care for serious or
                  emergency conditions
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
                <span>
                  Be wary of exaggerated claims or promises of miracle cures (in
                  any medical system)
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
                <span>
                  Ask questions and seek to understand your treatment options
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At Dr. Selvan's Homeopathy, we are committed to providing accurate
              information, evidence-based treatment, and transparent
              communication to help you make informed decisions about your
              health.
            </p>
          </section>

          {/* CTA Section */}
          <div className="flex justify-center my-12">
            <Link
              href="/appointment"
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition shadow-md inline-flex items-center"
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

          {/* Video Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Video: Myths and Facts of Homeopathy
            </h3>
            <div className="relative pt-[56.25%] bg-gray-100 rounded-xl overflow-hidden shadow-md">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ck7pbUJd21w"
                title="Myths and Facts Of Homeopathy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* Related Links Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Explore More About Homeopathy
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  Principles of Homeopathy
                </h3>
                <p className="text-gray-600 text-sm">
                  Understand the fundamental concepts that guide homeopathic
                  practice.
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
                  Learn about the homeopathic approach to diagnosis and
                  treatment.
                </p>
              </Link>

              <Link
                href="/homeopathy/safest-method"
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  Safest Method
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover why homeopathy is considered one of the safest
                  medical approaches.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default MythsAndFacts;
