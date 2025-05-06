// src/pages/homeopathy/faq.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import AppointmentButton from "../../components/common/AppointmentButton";

const FAQPage = () => {
  // State to track which FAQ is expanded
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ item open/closed
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // List of FAQs
  const faqs = [
    {
      question: "What is homeopathy?",
      answer:
        "Homeopathy is a natural system of medicine that uses highly diluted substances to trigger the body's natural healing mechanisms. Based on the principle of 'like cures like,' it was developed by Dr. Samuel Hahnemann over 200 years ago. Homeopathy treats the whole person, addressing physical, mental, and emotional aspects of health, rather than just treating specific symptoms.",
    },
    {
      question: "Is homeopathy safe?",
      answer:
        "Homeopathy is considered one of the safest forms of medicine. The remedies are highly diluted, making them non-toxic and free from side effects. They are safe for people of all ages, including infants, pregnant women, and the elderly. Homeopathic remedies also don't interfere with conventional medications, making them suitable for use alongside other treatments when necessary.",
    },
    {
      question: "How do homeopathic remedies work?",
      answer:
        "Homeopathic remedies work by stimulating the body's own healing mechanisms. The principle is based on 'similar cures similar' - a substance that can cause symptoms in a healthy person can cure similar symptoms in a sick person when prepared as a homeopathic remedy. The remedies are prepared through a process of dilution and succession (vigorous shaking), which enhances their healing properties while removing potential toxicity.",
    },
    {
      question: "What conditions can be treated with homeopathy?",
      answer:
        "Homeopathy can address a wide range of acute and chronic conditions. These include allergies, respiratory issues like asthma, digestive disorders, skin conditions, joint problems, migraines, anxiety, depression, and hormonal imbalances. It's particularly effective for chronic conditions where conventional medicine may only manage symptoms rather than addressing root causes.",
    },
    {
      question: "How long does homeopathic treatment take to work?",
      answer:
        "The timeframe for improvement varies depending on the condition, its duration, and individual factors. Acute conditions often respond quickly, sometimes within hours or days. Chronic conditions that have persisted for years may take longer, with gradual improvement over weeks or months. Dr. Selvan provides personalized timelines during consultations based on your specific health situation.",
    },
    {
      question:
        "What can I expect during a homeopathic consultation with Dr. Selvan?",
      answer:
        "Dr. Selvan's consultations are comprehensive and personalized. The first consultation typically lasts longer (45-60 minutes) and involves detailed questions about your symptoms, medical history, lifestyle, diet, emotional state, and other factors that influence your health. This thorough approach helps Dr. Selvan understand your unique health pattern and select the most appropriate remedy. Follow-up consultations monitor your progress and adjust treatment as needed.",
    },
    {
      question:
        "Do I need to stop my conventional medications to take homeopathic remedies?",
      answer:
        "No, you should not stop prescribed conventional medications without consulting the doctor who prescribed them. Homeopathic remedies work alongside conventional treatments without interactions, so they can be taken concurrently. Dr. Selvan works with patients who are on conventional medications and can develop a complementary approach that respects your current treatment plan.",
    },
    {
      question: "Are there dietary restrictions during homeopathic treatment?",
      answer:
        "Some substances might interfere with homeopathic remedies, including coffee, mint, camphor, and certain aromatic substances. Dr. Selvan provides specific guidelines based on your prescribed remedies. Generally, it's recommended to take remedies at least 15-30 minutes before or after eating, drinking, or brushing teeth to ensure optimal absorption.",
    },
    {
      question: "Is there scientific evidence supporting homeopathy?",
      answer:
        "There is a growing body of research supporting homeopathy's effectiveness. Multiple clinical trials, observational studies, and systematic reviews have shown positive results for various conditions. Homeopathy also has a long history of clinical success and is recognized by the World Health Organization as the second largest therapeutic system in the world.",
    },
    {
      question: "How are homeopathic remedies different from herbal medicines?",
      answer:
        "While both are natural approaches, they differ significantly. Herbal medicine uses plant materials in their natural form or extracts. Homeopathic remedies use highly diluted substances (which may be from plants, minerals, or animals) prepared through a specific process of dilution and succession. Herbals work biochemically, while homeopathic remedies work by stimulating the body's self-healing response.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <Layout title="Frequently Asked Questions | Dr. Selvan's Homeopathy">
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked <span className="text-accent">Questions</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "Understanding homeopathy and its healing approach"
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
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
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Dr. Selvan's FAQ
              </h2>
              <p className="text-gray-600">
                Common questions about homeopathic treatment
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            Here are answers to some of the most frequently asked questions
            about homeopathy and Dr. Selvan's approach to treatment. If you
            don't find the information you're looking for, please don't hesitate
            to contact us directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-primary transition-transform duration-200 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-700">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <p className="leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600">
              We're here to help. Book a consultation with Dr. Selvan or contact
              us directly.
            </p>
          </div>

          <div className="flex justify-center my-12">
            <AppointmentButton
              text="Book Consultation"
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
        </div>

        {/* Related Links */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Learn More About Homeopathy
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/homeopathy/overview">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition border-l-4 border-primary">
                <h4 className="font-bold text-gray-900">Homeopathy Overview</h4>
                <p className="text-sm text-gray-600">
                  Learn about the basics of homeopathic medicine
                </p>
              </div>
            </Link>
            <Link href="/homeopathy/scope-of-homeopathy">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition border-l-4 border-primary">
                <h4 className="font-bold text-gray-900">Scope of Homeopathy</h4>
                <p className="text-sm text-gray-600">
                  Discover what conditions homeopathy can treat
                </p>
              </div>
            </Link>
            <Link href="/homeopathy/treatment-methodology">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition border-l-4 border-primary">
                <h4 className="font-bold text-gray-900">
                  Treatment Methodology
                </h4>
                <p className="text-sm text-gray-600">
                  Understand how Dr. Selvan approaches treatment
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
