// pages/homeopathy/what-is-homeopathy.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";

const WhatIsHomeopathy = () => {
  return (
    <Layout title="What is Homeopathy? | Dr. Selvan's Homeopathy">
      <div className="bg-gradient-to-b from-accent to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              What is Homeopathy?
            </h1>
            <p className="text-lg text-gray-600">
              A natural approach to healing that treats the whole person
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/homeopathy-principles.jpg"
              alt="Homeopathic remedies and ingredients"
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
                  Founded over 200 years ago by Dr. Samuel Hahnemann!
                </p>
              </div>
            </motion.div>
          </div>

          <h2>Introduction to Homeopathy</h2>
          <p>
            Homeopathy is a natural form of medicine used by over 200 million
            people worldwide to treat both acute and chronic conditions. It is
            based on the principle of 'like cures like' – in other words, a
            substance which can cause symptoms when taken in large doses, can be
            used in small amounts to treat similar symptoms.
          </p>
          <p>
            For example, drinking too much coffee can cause sleeplessness and
            agitation, so according to this principle, when made into a
            homeopathic medicine, it could be used to treat people with these
            symptoms. This concept is sometimes used in conventional medicine,
            for example, the stimulant Ritalin is used to treat patients with
            ADHD, or small doses of allergens such as pollen are sometimes used
            to desensitize allergic patients.
          </p>

          <h2>The Principles of Homeopathy</h2>
          <p>Homeopathy is based on several key principles:</p>
          <ul>
            <li>
              <strong>Like Cures Like (Law of Similars):</strong> The principle
              that a substance that causes symptoms in a healthy person can be
              used to treat similar symptoms in a sick person.
            </li>
            <li>
              <strong>Minimum Dose:</strong> Homeopathic medicines are prepared
              by a process of serial dilution and succussion (vigorous shaking),
              resulting in extremely small doses that are still therapeutically
              active.
            </li>
            <li>
              <strong>Individualization of Treatment:</strong> Each person is
              treated as a unique individual, with homeopathic remedies selected
              based on their specific symptom pattern, rather than just the name
              of their disease.
            </li>
            <li>
              <strong>Holistic Approach:</strong> Homeopathy treats the person
              as a whole, considering mental, emotional, and physical aspects,
              rather than focusing solely on isolated symptoms.
            </li>
          </ul>

          <h2>History of Homeopathy</h2>
          <p>
            Homeopathy was developed by Dr. Samuel Hahnemann, a German
            physician, in the late 18th century. Dissatisfied with the harsh
            medical practices of his time (which included bloodletting and the
            use of toxic chemicals), he sought a more humane approach to
            medicine.
          </p>
          <p>
            Hahnemann conducted experiments on himself and volunteers, which he
            called "provings," to study the effects of various substances. He
            published his findings in "Organon of the Medical Art," which
            remains the foundation of homeopathic practice today.
          </p>

          <div className="bg-accent p-6 rounded-xl my-8">
            <h3 className="text-xl font-bold text-dark mb-4">
              How Homeopathic Remedies Are Prepared
            </h3>
            <p className="mb-4">
              Homeopathic remedies are made from natural sources such as plants,
              minerals, or animals. The preparation involves a process of
              dilution and succussion (vigorous shaking):
            </p>
            <ol className="space-y-2">
              <li>
                <strong>1. Mother Tincture:</strong> The original substance is
                dissolved in alcohol to create what is called a "mother
                tincture."
              </li>
              <li>
                <strong>2. Dilution:</strong> The mother tincture is then
                diluted, often at a ratio of 1:10 (X potency) or 1:100 (C
                potency).
              </li>
              <li>
                <strong>3. Succussion:</strong> After each dilution, the
                solution is vigorously shaken, a process known as succussion,
                which is believed to activate the medicinal properties of the
                substance.
              </li>
              <li>
                <strong>4. Repeated Process:</strong> This process of dilution
                and succussion is repeated multiple times to achieve the desired
                potency.
              </li>
            </ol>
          </div>

          <h2>Scientific Understanding of Homeopathy</h2>
          <p>
            The scientific community has different views on homeopathy. Skeptics
            point to the extreme dilutions used in homeopathic remedies, which
            often contain no molecules of the original substance, making it
            difficult to explain their effects based on conventional biochemical
            models.
          </p>
          <p>
            However, proponents suggest that water can retain a "memory" of
            substances previously dissolved in it, possibly through
            electromagnetic imprinting or quantum effects. Research in the
            fields of nanomedicine and ultra-high dilutions continues to explore
            potential mechanisms.
          </p>
          <p>
            What remains clear is that many patients report significant benefits
            from homeopathic treatment, and clinical experience over two
            centuries supports its effectiveness for many conditions.
          </p>

          <h2>Homeopathy in Modern Healthcare</h2>
          <p>
            Today, homeopathy is practiced worldwide and is integrated into the
            national healthcare systems of many countries, including India,
            where it is one of the recognized systems of medicine. In other
            countries, it is practiced alongside conventional medicine as a
            complementary approach.
          </p>
          <p>
            At Dr. Selvan's Homeopathy, we blend traditional homeopathic
            principles with modern medical knowledge to provide effective,
            personalized treatment for a wide range of health conditions.
          </p>

          <div className="flex justify-center my-8">
            <Link
              href="/appointment"
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition shadow-md"
            >
              Book a Consultation
            </Link>
          </div>

          <h2>Further Reading</h2>
          <p>
            If you'd like to learn more about homeopathy, explore our other
            articles:
          </p>
          <ul>
            <li>
              <Link
                href="/homeopathy/scope-of-homeopathy"
                className="text-primary hover:text-primary-dark"
              >
                Scope of Homeopathy: Conditions That Can Be Treated
              </Link>
            </li>
            <li>
              <Link
                href="/homeopathy/methodology"
                className="text-primary hover:text-primary-dark"
              >
                Homeopathy Methodology: How Treatments Are Prescribed
              </Link>
            </li>
            <li>
              <Link
                href="/homeopathy/myths-and-facts"
                className="text-primary hover:text-primary-dark"
              >
                Myths and Facts About Homeopathy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-8">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/blog-scope.jpg"
                  alt="Scope of Homeopathy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">
                  Scope of Homeopathy
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the wide range of conditions that can be effectively
                  treated with homeopathic remedies.
                </p>
                <Link
                  href="/homeopathy/scope-of-homeopathy"
                  className="text-primary font-medium hover:text-primary-dark flex items-center"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/blog-methodology.jpg"
                  alt="Homeopathy Methodology"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">
                  Homeopathy Methodology
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn about the unique approach homeopaths take to diagnose
                  and treat health conditions.
                </p>
                <Link
                  href="/homeopathy/methodology"
                  className="text-primary font-medium hover:text-primary-dark flex items-center"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/blog-myths.jpg"
                  alt="Myths and Facts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">
                  Myths and Facts
                </h3>
                <p className="text-gray-600 mb-4">
                  Separate fact from fiction with our comprehensive guide to
                  common misconceptions about homeopathy.
                </p>
                <Link
                  href="/homeopathy/myths-and-facts"
                  className="text-primary font-medium hover:text-primary-dark flex items-center"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhatIsHomeopathy;
