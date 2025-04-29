// src/pages/homeopathy/history.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const HistoryOfHomeopathy = () => {
  // Timeline data
  const timelineEvents = [
    {
      year: "1755",
      title: "Birth of Dr. Samuel Hahnemann",
      description:
        "Dr. Samuel Hahnemann, the father of Homeopathy, was born in Meissen, Germany.",
    },
    {
      year: "1779",
      title: "Medical Career Begins",
      description:
        "Hahnemann obtained his MD from the University of Erlangen and began practicing medicine.",
    },
    {
      year: "1790",
      title: "The Cinchona Experiment",
      description:
        "While translating William Cullen's Materia Medica, Hahnemann began experimenting with cinchona bark (quinine), leading to his discovery of the 'like cures like' principle.",
    },
    {
      year: "1796",
      title: "First Publication",
      description:
        "Hahnemann published his first article on the homeopathic concept in Hufeland's Journal.",
    },
    {
      year: "1810",
      title: "Organon of Medicine",
      description:
        "Hahnemann published the first edition of 'Organon of the Rational Art of Healing,' outlining homeopathic principles.",
    },
    {
      year: "1811-1821",
      title: "Materia Medica Development",
      description:
        "Hahnemann published the first volumes of 'Materia Medica Pura,' documenting medicinal substances and their effects.",
    },
    {
      year: "1831",
      title: "Cholera Epidemic",
      description:
        "Homeopathy gained significant recognition during the European cholera epidemics, with lower mortality rates in homeopathic hospitals.",
    },
    {
      year: "1843",
      title: "Hahnemann's Death",
      description:
        "Dr. Samuel Hahnemann passed away in Paris at the age of 88, leaving a profound legacy in medical science.",
    },
    {
      year: "1844",
      title: "Global Expansion",
      description:
        "Homeopathy spread to the United States, India, and other parts of the world, establishing itself as a global medical system.",
    },
    {
      year: "1900s-Present",
      title: "Modern Homeopathy",
      description:
        "Despite periods of decline, homeopathy experienced revival and continues to grow worldwide, now recognized by the WHO as the second largest therapeutic system in the world.",
    },
  ];

  return (
    <Layout
      title="History of Homeopathy | Dr. Selvan's Homeopathy"
      hideFooter={true}
    >
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              History of <span className="text-accent">Homeopathy</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Homeopathy is the safest method"
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
              src="/images/history-of-homeopathy.jpg"
              alt="Dr. Samuel Hahnemann, founder of Homeopathy"
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
                  Over 200 years of healing wisdom!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Birth of a Revolutionary{" "}
              <span className="text-accent">Medical System</span>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The story of homeopathy begins with one remarkable man who dared
              to challenge the medical practices of his time. Dr. Samuel
              Hahnemann, the father of Homeopathy, was one of the few in his era
              to step into the portals of a university and graduate in medicine
              with an MD degree.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Born in 1755 in Meissen, Germany, Hahnemann lived in the
              pre-antibiotic era that was filled with many barbaric medical
              practices. Conventional doctors routinely used bleeding and
              excessive purging to treat diseases based on the presumption that
              illness was caused by "bad blood" within the body. Disappointed
              with these harmful practices, Hahnemann gave up his medical
              practice.
            </p>
          </section>

          {/* Cinchona Experiment Section */}
          <section className="mb-12">
            <div className="bg-blue-50 p-6 md:p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                The Cinchona Experiment: A Pivotal Moment
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To support himself, Hahnemann began translating medical books in
                different languages, as he was fluent in over a dozen tongues. A
                pivotal moment came in 1790 when he was translating William
                Cullen's "Lectures on Materia Medica." Cullen's statement that
                cinchona (quinine) bark possessed specific fever-relieving
                properties because it was one of the most aromatic and bitter
                substances known aroused Hahnemann's scientific curiosity.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hahnemann reasoned that there were many more substances with
                extremely bitter and fragrant properties, yet none of them had
                the strength to cure fevers, especially malaria-like fevers.
                Eager to test this idea, he decided to experiment on himself. He
                drank a decoction of cinchona bark and, to his surprise,
                developed symptoms similar to malaria—including fever and
                chills.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This self-experiment led to his revolutionary hypothesis: "A
                substance which can artificially produce certain disease-like
                symptoms on a healthy person can cure a similar disease when
                given to the patient in the form of a homeopathic medicine."
                This became the fundamental principle of homeopathy: like cures
                like.
              </p>
            </div>
          </section>

          {/* Development Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Development of <span className="text-accent">Homeopathy</span>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              From this experiment, Dr. Hahnemann began systematically studying
              the effects of various substances on healthy humans. He
              meticulously recorded the symptoms produced by these substances,
              creating a reference guide for selecting remedies that matched
              patients' symptoms. The cures achieved using this method confirmed
              his hypothesis about the concept of "like cures like."
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Over the next 12 years, Dr. Hahnemann evolved homeopathy into a
              scientific system of alternative medicine based on his research
              and clinical experience. In 1810, he published his seminal work,
              "Organon of the Medical Art," which outlined the principles of
              homeopathy that continue to guide practitioners today.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              From Controversy to{" "}
              <span className="text-accent">Global Recognition</span>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Homeopathy became widely popular during the 19th century,
              particularly with its success in treating patients during
              epidemics like cholera. Records show that death rates in
              homeopathic hospitals were significantly lower than in
              conventional hospitals during these outbreaks.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Despite facing opposition from conventional medical
              establishments, homeopathy spread across Europe and reached North
              America, where the first homeopathic medical college was
              established in 1835. By the early 20th century, about 15% of
              doctors in the United States practiced homeopathy.
            </p>
          </section>

          {/* Timeline Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Key <span className="text-accent">Milestones</span> in
              Homeopathy's History
            </h2>
            <div className="relative my-8">
              <div className="absolute left-4 h-full w-0.5 bg-blue-200"></div>

              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-8 pb-10">
                  <div className="absolute left-0 -ml-2.5 h-10 w-10 rounded-full bg-blue-100 border-4 border-white shadow flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">
                      {index + 1}
                    </span>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded mb-2">
                      {event.year}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {event.title}
                    </h4>
                    <p className="text-gray-700 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Modern Homeopathy Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Homeopathy <span className="text-accent">Today</span>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Today, homeopathy is practiced worldwide and is integrated into
              the national healthcare systems of many countries. Its growth in
              recent decades has been remarkable, with millions of people
              turning to this gentle yet effective system of medicine.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Dr. Hahnemann's vision of a "sane, humane, and gentle" approach to
              medicine continues to thrive, offering a valuable alternative or
              complement to conventional medical treatments. His legacy lives on
              in the principles and practices of homeopathy that have helped
              countless patients across the globe for over two centuries.
            </p>
          </section>

          {/* CTA Section */}
          <div className="flex justify-center my-12">
            <AppointmentButton
              text="Experience Time-Tested Healing"
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

          {/* Explore More Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Explore More About <span className="text-accent">Homeopathy</span>
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
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
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default HistoryOfHomeopathy;
