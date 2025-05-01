import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import AppointmentButton from "../../components/common/AppointmentButton";

const PersonalizedCare = () => {
  // Key personalization aspects
  const personalizationAspects = [
    {
      title: "Detailed Case Analysis",
      description:
        "Our comprehensive case-taking explores your unique physical, mental, and emotional symptoms to create a complete health picture.",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Constitutional Analysis",
      description:
        "We identify your unique constitutional type to select remedies that match your individual health patterns and tendencies.",
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Customized Treatment Plans",
      description:
        "Based on your unique health profile, we develop individualized treatment protocols with precisely selected remedies and potencies.",
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
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      title: "Individual Timeline",
      description:
        "We understand that each person's healing journey is unique, and we adjust your treatment schedule based on your specific progress.",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Lifestyle Recommendations",
      description:
        "We provide personalized dietary and lifestyle guidance that complements your homeopathic treatment and strengthens your overall health.",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Personalized Follow-ups",
      description:
        "Our follow-up appointments are tailored to your needs, with timing and focus adjusted to optimize your healing progress.",
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
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Layout title="Personalized Care | Dr. Selvan's Homeopathy">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Personalized <span className="text-primary">Care</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Treatment as unique as you are"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Your Health is <span className="text-primary">Unique</span>
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Dr. Selvan's Homeopathy, we recognize that every individual has a
            unique constitution, health history, and response to illness. This
            is why we reject the one-size-fits-all approach commonly found in
            conventional medicine. Instead, we provide deeply personalized care
            that addresses your specific health profile.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our personalized approach means that two patients with the same
            medical diagnosis may receive completely different treatments based
            on their individual symptoms, constitution, and health history. This
            individualization is at the heart of homeopathic treatment and is
            the key to achieving lasting results.
          </p>

          <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/benefit-personalized.jpg"
              alt="Personalized homeopathic consultation"
              width={1000}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Key Aspects Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How We <span className="text-primary">Personalize</span> Your Care
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {personalizationAspects.map((aspect, index) => (
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
            Your <span className="text-primary">Personalized</span> Treatment
            Journey
          </h2>
          <div className="bg-blue-50 p-6 md:p-8 rounded-xl">
            <ol className="relative border-l border-blue-200 space-y-6 pl-6">
              <li className="mb-10">
                <div className="absolute w-8 h-8 bg-blue-100 rounded-full -left-4 border border-white flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  In-Depth Initial Consultation
                </h3>
                <p className="text-gray-700 mb-2 leading-relaxed">
                  Your journey begins with a comprehensive consultation that
                  explores:
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
                    <span>
                      Your complete health history and current symptoms
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
                    <span>Mental and emotional aspects of your health</span>
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
                    <span>Environmental factors and lifestyle influences</span>
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
                    <span>Your unique sensitivities and preferences</span>
                  </li>
                </ul>
              </li>
              <li className="mb-10">
                <div className="absolute w-8 h-8 bg-blue-100 rounded-full -left-4 border border-white flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Constitutional Analysis
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We analyze your case to identify your constitutional type and
                  the patterns that are unique to your health situation. This
                  allows us to select remedies that address your specific
                  symptoms while supporting your overall constitution.
                </p>
              </li>
              <li className="mb-10">
                <div className="absolute w-8 h-8 bg-blue-100 rounded-full -left-4 border border-white flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Custom Treatment Protocol
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We develop a treatment plan specifically for you, including
                  carefully selected remedies, potencies, and dosing schedules
                  tailored to your unique health needs and sensitivity levels.
                </p>
              </li>
              <li>
                <div className="absolute w-8 h-8 bg-blue-100 rounded-full -left-4 border border-white flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Personalized Follow-Up Care
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your follow-up appointments are scheduled based on your
                  individual needs and response to treatment. We continuously
                  assess your progress and make adjustments to your treatment
                  plan to optimize your healing journey.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            The <span className="text-primary">Benefits</span> of Personalized
            Care
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                More Effective Results
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
                  <span>Treatments that address your specific symptoms</span>
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
                    Better response rates than standardized approaches
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
                  <span>Addressing underlying causes, not just symptoms</span>
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
                    Improved success with complex or chronic conditions
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Enhanced Patient Experience
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
                  <span>
                    Feeling truly seen and understood in your health journey
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
                  <span>Treatment that respects your individuality</span>
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
                    Stronger therapeutic relationship with your practitioner
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
                    More engaged and empowered in your healing process
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <blockquote className="text-gray-700 italic mb-4">
              "I had been to several doctors with my chronic migraines and
              always received the same standard treatment despite explaining
              that it wasn't working for me. When I came to Dr. Selvan, the
              approach was completely different. He spent over an hour
              understanding not just my headaches, but my sleep patterns, stress
              triggers, and even food preferences. The personalized remedy he
              prescribed has reduced my migraines by 90%, and I finally feel
              like I've been treated as an individual, not just another case of
              migraines."
            </blockquote>
            <p className="text-right text-gray-500">
              — Priya V., Software Engineer
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="flex justify-center my-12">
          <AppointmentButton
            text="Experience Personalized Care"
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
                Learn how homeopathy can help you achieve optimal health and
                vitality.
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
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PersonalizedCare;
