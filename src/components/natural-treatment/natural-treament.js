import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";

const NaturalTreatmentVideos = () => {
  // State to track selected category and active video
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeVideo, setActiveVideo] = useState(null);

  // Video data structure with categories
  const videos = [
    {
      id: "uliztx1_oLk",
      title: "Natural Treatment for Various Health Conditions",
      description:
        "Learn about comprehensive natural treatments for common health challenges and how homeopathy addresses them holistically.",
      category: "general",
      type: "standard",
    },
    {
      id: "YHuCBTEX0qA",
      title: "Holistic Approach to Wellness",
      description:
        "Discover our holistic approach to wellness that focuses on treating the root cause rather than just symptoms.",
      category: "general",
      type: "standard",
    },
    {
      id: "uzUzDpLjqvY",
      title: "Understanding Homeopathic Remedies",
      description:
        "An in-depth explanation of how homeopathic remedies work and their benefits for natural healing.",
      category: "remedies",
      type: "standard",
    },
    {
      id: "67gb0GV8zk8",
      title: "Chronic Condition Management",
      description:
        "How natural treatments can effectively manage chronic conditions with minimal side effects.",
      category: "chronic",
      type: "standard",
    },
    {
      id: "6moIFSgUQn8",
      title: "Natural Approaches to Immune Support",
      description:
        "Strengthen your immune system with these natural treatment approaches explained by Dr. Selvan.",
      category: "immune",
      type: "standard",
    },
    {
      id: "om9thz8_nY0",
      title: "Treating Digestive Issues Naturally",
      description:
        "Learn effective natural remedies for common digestive problems and gut health improvement.",
      category: "digestive",
      type: "standard",
    },
    {
      id: "LB8UAIQaBQ4",
      title: "Natural Solutions for Skin Problems",
      description:
        "Discover homeopathic approaches to treating various skin conditions and achieving healthier skin.",
      category: "skin",
      type: "standard",
    },
    {
      id: "NvcweU77iJo",
      title: "Respiratory Health and Natural Treatments",
      description:
        "Effective natural treatments for asthma, allergies, and other respiratory conditions.",
      category: "respiratory",
      type: "standard",
    },
    {
      id: "B302hkjnv-8",
      title: "Women's Health: Natural Approaches",
      description:
        "Natural remedies and treatments specifically designed for women's health concerns.",
      category: "women",
      type: "standard",
    },
    {
      id: "QEnklt1cz5M",
      title: "Joint Pain and Arthritis: Natural Relief",
      description:
        "How to manage joint pain and arthritis symptoms using homeopathic and natural treatments.",
      category: "joint",
      type: "standard",
    },
    {
      id: "3Pe9PURa45I",
      title: "Stress Management Through Natural Methods",
      description:
        "Natural approaches to managing stress and improving mental well-being.",
      category: "mental",
      type: "standard",
    },
    {
      id: "Fjec4gurHSE",
      title: "Quick Tips for Natural Healing",
      description:
        "Brief but valuable insights into natural healing principles and practices.",
      category: "tips",
      type: "short",
    },
    {
      id: "YLY0-F7sLXw",
      title: "Children's Health and Natural Remedies",
      description:
        "Safe and effective natural treatments for common childhood ailments.",
      category: "children",
      type: "standard",
    },
    {
      id: "vBFWzqsgcB8",
      title: "Natural Healing Principles",
      description:
        "A quick overview of the core principles behind natural healing and homeopathy.",
      category: "principles",
      type: "short",
    },
    {
      id: "sEMCGh386us",
      title: "Headache Relief: Natural Methods",
      description:
        "Effective natural approaches to relieving headaches without medication.",
      category: "pain",
      type: "short",
    },
    {
      id: "0_uWswhNscU",
      title: "Boosting Energy Naturally",
      description:
        "How to increase your energy levels using natural methods and remedies.",
      category: "energy",
      type: "short",
    },
    {
      id: "jHym2vRr5MQ",
      title: "Sleep Improvement Through Natural Methods",
      description:
        "Natural approaches to better sleep quality and overcoming insomnia.",
      category: "sleep",
      type: "short",
    },
    {
      id: "nkqdXkcceWU",
      title: "Allergy Relief the Natural Way",
      description:
        "Managing allergies effectively with homeopathic and natural remedies.",
      category: "allergies",
      type: "short",
    },
    {
      id: "7j3hS0J1t40",
      title: "Natural Anti-inflammatory Approaches",
      description:
        "How to reduce inflammation in the body using natural methods and remedies.",
      category: "inflammation",
      type: "short",
    },
    {
      id: "pNDHMLrxXA4",
      title: "Holistic Healing for Modern Lifestyles",
      description:
        "Integrating natural healing methods into busy modern lifestyles for better health.",
      category: "lifestyle",
      type: "standard",
    },
    {
      id: "IhYtbBzXBwY",
      title: "Digestive Health Quick Tips",
      description:
        "Fast and effective natural solutions for common digestive issues.",
      category: "digestive",
      type: "short",
    },
    {
      id: "qNtl9wP5smg",
      title: "Natural Immunity Boosters",
      description:
        "Quick tips on boosting your immunity through natural methods.",
      category: "immune",
      type: "short",
    },
    {
      id: "BIwx7B3VXmo",
      title: "Skin Health Natural Approaches",
      description:
        "Brief overview of natural approaches to healthier, clearer skin.",
      category: "skin",
      type: "short",
    },
    {
      id: "heZNyJQhdIc",
      title: "Joint Pain Quick Relief",
      description:
        "Fast natural methods to relieve joint pain and improve mobility.",
      category: "joint",
      type: "short",
    },
    {
      id: "Sy1A1QQrKfk",
      title: "Mental Clarity and Focus: Natural Methods",
      description:
        "How to improve mental clarity and focus using natural approaches.",
      category: "mental",
      type: "short",
    },
    {
      id: "4xfCHwCAmD4",
      title: "Natural Treatment Success Stories",
      description:
        "Real patient experiences and success stories with natural treatments at Dr. Selvan's Homeopathy.",
      category: "testimonials",
      type: "standard",
    },
    {
      id: "EWn39jAbJtE",
      title: "Detoxification Through Natural Methods",
      description:
        "Brief guide on natural methods to detoxify your body and improve overall health.",
      category: "detox",
      type: "short",
    },
    {
      id: "1ZBOh65P7fE",
      title: "Energy Restoration Techniques",
      description: "Quick natural techniques to restore energy and vitality.",
      category: "energy",
      type: "short",
    },
    {
      id: "jfKV7J9nZxM",
      title: "Holistic Health Quick Guide",
      description:
        "A brief overview of the holistic health approach at Dr. Selvan's Homeopathy.",
      category: "general",
      type: "short",
    },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Videos" },
    { id: "general", name: "General Health" },
    { id: "chronic", name: "Chronic Conditions" },
    { id: "skin", name: "Skin Health" },
    { id: "digestive", name: "Digestive Health" },
    { id: "respiratory", name: "Respiratory Health" },
    { id: "immune", name: "Immunity" },
    { id: "mental", name: "Mental Health" },
    { id: "joint", name: "Joint Pain & Arthritis" },
    { id: "short", name: "Short Videos", type: true },
  ];

  // Filter videos based on selected category
  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : selectedCategory === "short"
      ? videos.filter((video) => video.type === "short")
      : videos.filter((video) => video.category === selectedCategory);

  // Set the first video as active if none is selected
  React.useEffect(() => {
    if (!activeVideo && filteredVideos.length > 0) {
      setActiveVideo(filteredVideos[0]);
    }
  }, [filteredVideos, activeVideo]);

  return (
    <Layout
      title="Natural Treatment Videos | Dr. Selvan's Homeopathy"
      hideFooter={false}
    >
      {/* Hero Section with Gradient Background using accent orange theme */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Natural <span className="text-accent">Treatment</span> Videos
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Visual insights into natural healing methods and homeopathic
              approaches"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Explore Our <span className="text-accent">Educational</span> Videos
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Gain valuable insights from Dr. Selvan's collection of educational
            videos covering various aspects of homeopathy and natural treatment
            approaches. Whether you're looking for in-depth explanations or
            quick health tips, our video library has something for everyone.
          </p>

          {/* Category Filter */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Filter by Category:
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Video Player */}
          {activeVideo && (
            <div className="mb-12 bg-white p-6 rounded-xl shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${activeVideo.id}`}
                      title={activeVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    {activeVideo.type === "short" && (
                      <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-2 py-1 rounded-full mb-2">
                        Short
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {activeVideo.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {activeVideo.description}
                    </p>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700">
                      #{activeVideo.category}
                    </span>
                  </div>
                  <Link
                    href={`https://youtube.com/watch?v=${activeVideo.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-accent hover:text-accent-dark transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
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
              </div>
            </div>
          )}

          {/* Video Thumbnails Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer border-2 ${
                  activeVideo && activeVideo.id === video.id
                    ? "border-accent"
                    : "border-transparent"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                onClick={() => setActiveVideo(video)}
              >
                {/* Video Thumbnail */}
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    width={480}
                    height={360}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-accent/80 rounded-full w-10 h-10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-3">
                  {video.type === "short" && (
                    <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-2 py-1 rounded-full mb-1">
                      Short
                    </span>
                  )}
                  <h3 className="text-sm font-bold text-gray-900 line-clamp-2 h-10">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state for no results */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-500 mb-2">
                No videos found for this category.
              </p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-accent hover:text-accent-dark transition-colors font-medium"
              >
                View all videos
              </button>
            </div>
          )}
        </div>

        {/* Additional Resources Section with orange accent theme */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Additional <span className="text-accent">Resources</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/homeopathy/scope-of-homeopathy"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
            >
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
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
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                Scope of Homeopathy
              </h3>
              <p className="text-gray-600 text-sm">
                Discover the wide range of conditions that homeopathy can
                effectively treat.
              </p>
            </Link>

            <Link
              href="/homeopathy/treatment-methodology"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
            >
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
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
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                Treatment Methodology
              </h3>
              <p className="text-gray-600 text-sm">
                Learn about our approach to treatment and how homeopathic
                remedies are prescribed.
              </p>
            </Link>

            <Link
              href="/appointment"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
            >
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                Book a Consultation
              </h3>
              <p className="text-gray-600 text-sm">
                Ready to experience natural treatment? Schedule a consultation
                with Dr. Selvan.
              </p>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have Questions About Natural Treatment?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our team is ready to help you understand how natural homeopathic
              treatments can address your specific health concerns.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-medium hover:from-primary-dark hover:to-accent-dark transition shadow-md"
            >
              Contact Us
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
        </div>
      </div>
    </Layout>
  );
};

export default NaturalTreatmentVideos;
