// src/pages/natural-treatment/index.js (modified version)
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import VideoGallery from "../../components/natural-treatment/VideoGallery";
import VideoCategories from "../../components/natural-treatment/VideoCategories";
import SubNavigation from "../../components/natural-treatment/SubNavigation";
import FeaturedVideo from "../../components/natural-treatment/FeaturedVideo";
import HowToUseGallery from "../../components/natural-treatment/HowToUseGallery";

// Video data with titles, descriptions, and YouTube IDs
const videoData = [
  {
    id: "uliztx1_oLk",
    title: "Homeopathic Treatment Approach",
    description:
      "Learn about Dr. Selvan's approach to homeopathic treatment and how it differs from conventional medicine.",
    category: "Educational",
    isShort: false,
  },
  {
    id: "YHuCBTEX0qA",
    title: "Common Misconceptions About Homeopathy",
    description:
      "Dr. Selvan addresses common myths and misconceptions about homeopathic medicine.",
    category: "Educational",
    isShort: false,
  },
  {
    id: "uzUzDpLjqvY",
    title: "Natural Healing for Chronic Conditions",
    description:
      "Discover how homeopathy can help with managing chronic health conditions naturally.",
    category: "Treatment",
    isShort: false,
  },
  {
    id: "67gb0GV8zk8",
    title: "Arthritis Treatment with Homeopathy",
    description:
      "Learn about homeopathic approaches to relieving arthritis pain and improving joint mobility.",
    category: "Treatment",
    isShort: false,
  },
  {
    id: "6moIFSgUQn8",
    title: "Treating Skin Conditions Naturally",
    description:
      "Dr. Selvan discusses homeopathic treatments for common skin issues like eczema and psoriasis.",
    category: "Treatment",
    isShort: false,
  },
  {
    id: "om9thz8_nY0",
    title: "Homeopathy for Respiratory Health",
    description:
      "Effective homeopathic treatments for asthma, allergies, and other respiratory conditions.",
    category: "Treatment",
    isShort: false,
  },
  {
    id: "LB8UAIQaBQ4",
    title: "Digestive Health Solutions",
    description:
      "Natural homeopathic remedies for IBS, acid reflux, and other digestive issues.",
    category: "Treatment",
    isShort: false,
  },
  {
    id: "NvcweU77iJo",
    title: "Stress Management with Homeopathy",
    description:
      "Homeopathic approaches to managing stress, anxiety, and improving mental wellbeing.",
    category: "Wellness",
    isShort: false,
  },
  {
    id: "B302hkjnv-8",
    title: "Homeopathy for Children",
    description:
      "Safe and effective homeopathic treatments for common childhood health issues.",
    category: "Treatment",
    isShort: false,
  },
  {
    id: "QEnklt1cz5M",
    title: "Women's Health and Homeopathy",
    description:
      "Addressing women's health concerns with gentle, natural homeopathic remedies.",
    category: "Treatment",
    isShort: false,
  },
  {
    id: "3Pe9PURa45I",
    title: "Holistic Healing Principles",
    description:
      "Understanding the fundamental principles behind homeopathic treatment approaches.",
    category: "Educational",
    isShort: false,
  },
  {
    id: "Fjec4gurHSE",
    title: "Quick Tips for Natural Immunity",
    description: "Brief guide to boosting your immune system naturally.",
    category: "Wellness",
    isShort: true,
  },
  {
    id: "YLY0-F7sLXw",
    title: "The Science Behind Homeopathy",
    description:
      "Exploring the scientific basis and research supporting homeopathic medicine.",
    category: "Educational",
    isShort: false,
  },
  {
    id: "vBFWzqsgcB8",
    title: "Daily Health Routine",
    description:
      "Simple homeopathic practices to incorporate into your daily routine.",
    category: "Wellness",
    isShort: true,
  },
  {
    id: "sEMCGh386us",
    title: "Treatment Success Story",
    description:
      "A patient shares their experience with Dr. Selvan's homeopathic treatment.",
    category: "Testimonials",
    isShort: true,
  },
  {
    id: "0_uWswhNscU",
    title: "Homeopathy for Allergies",
    description: "Quick guide to managing seasonal allergies with homeopathy.",
    category: "Treatment",
    isShort: true,
  },
  {
    id: "jHym2vRr5MQ",
    title: "Natural Pain Relief",
    description:
      "Homeopathic approaches to managing pain without side effects.",
    category: "Treatment",
    isShort: true,
  },
  {
    id: "nkqdXkcceWU",
    title: "Headache Remedies",
    description:
      "Effective homeopathic solutions for different types of headaches.",
    category: "Treatment",
    isShort: true,
  },
  {
    id: "7j3hS0J1t40",
    title: "Sleep Improvement Tips",
    description:
      "Natural remedies for better sleep quality using homeopathic principles.",
    category: "Wellness",
    isShort: true,
  },
  {
    id: "pNDHMLrxXA4",
    title: "Understanding Chronic Disease",
    description:
      "Dr. Selvan explains the homeopathic perspective on chronic illness.",
    category: "Educational",
    isShort: false,
  },
  {
    id: "IhYtbBzXBwY",
    title: "Energy Boosting Remedies",
    description:
      "Quick guide to natural ways to increase energy and reduce fatigue.",
    category: "Wellness",
    isShort: true,
  },
  {
    id: "qNtl9wP5smg",
    title: "Digestive Health Quick Tips",
    description: "Simple remedies for common digestive issues.",
    category: "Treatment",
    isShort: true,
  },
  {
    id: "BIwx7B3VXmo",
    title: "Skin Care Naturally",
    description: "Homeopathic approach to healthy, glowing skin.",
    category: "Wellness",
    isShort: true,
  },
  {
    id: "heZNyJQhdIc",
    title: "Stress Relief Techniques",
    description: "Quick homeopathic remedies for stress management.",
    category: "Wellness",
    isShort: true,
  },
  {
    id: "Sy1A1QQrKfk",
    title: "Joint Pain Relief",
    description: "Natural approaches to reducing joint pain and inflammation.",
    category: "Treatment",
    isShort: true,
  },
  {
    id: "4xfCHwCAmD4",
    title: "Complete Guide to Homeopathic Treatment",
    description:
      "Comprehensive overview of what to expect during homeopathic treatment.",
    category: "Educational",
    isShort: false,
  },
  {
    id: "EWn39jAbJtE",
    title: "Immune System Support",
    description: "Building stronger immunity with homeopathic remedies.",
    category: "Wellness",
    isShort: true,
  },
  {
    id: "1ZBOh65P7fE",
    title: "Patient Success Story",
    description:
      "A testimonial from a patient who recovered with homeopathic treatment.",
    category: "Testimonials",
    isShort: true,
  },
  {
    id: "jfKV7J9nZxM",
    title: "Anxiety Management",
    description: "Quick guide to natural anxiety relief techniques.",
    category: "Wellness",
    isShort: true,
  },
];

const NaturalTreatmentPage = () => {
  const router = useRouter();
  // State for selected category filtering
  const [selectedCategory, setSelectedCategory] = useState("All");
  // State to track if data has loaded (for better UX)
  const [isLoaded, setIsLoaded] = useState(false);

  // Update selected category when URL query changes
  useEffect(() => {
    if (router.query.category) {
      setSelectedCategory(router.query.category);
    } else {
      setSelectedCategory("All");
    }

    // Simulate a delay to ensure proper hydration
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [router.query.category]);

  // Filter videos based on selected category
  const filteredVideos =
    selectedCategory === "All"
      ? videoData
      : videoData.filter((video) => video.category === selectedCategory);

  // Get available categories from video data
  const categories = [
    "All",
    ...new Set(videoData.map((video) => video.category)),
  ];

  return (
    <Layout title="Natural Treatment Videos | Dr. Selvan's Homeopathy">
      {/* Hero Section with Gradient Background and Logo */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Logo with animation */}
            <motion.div
              className="mb-6 flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                <Image
                  src="/images/medic-talks-logo.jpg"
                  alt="Dr. Selvan Medic Talks Logo"
                  width={320}
                  height={320}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              "Watch and learn about natural healing approaches"
            </motion.p>
          </div>
        </div>
      </div>

      {/* Sub-navigation removed */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-end gap-3 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Explore Our <span style={{ color: "#37B34A" }}>Video</span>{" "}
              Collection
            </h2>
            {selectedCategory !== "All" && (
              <div className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium inline-flex items-center">
                <span className="mr-1">Category:</span>
                <span style={{ color: "#37B34A" }}>{selectedCategory}</span>
              </div>
            )}
          </div>
          <div
            className="bg-white p-5 rounded-lg border-l-4"
            style={{ borderColor: "#0080C8" }}
          >
            <p className="text-lg text-gray-600">
              Dr. Selvan's Medic Talks features engaging, educational videos on
              various health conditions. Each video explains symptoms, causes,
              and pathology, with an emphasis on dietary guidelines—what to eat
              and what to avoid. Learn how to approach healing naturally first,
              before considering medication.
            </p>
          </div>
        </motion.div>

        {/* Enhanced Category selection - now the primary navigation method */}
        {isLoaded && (
          <div className="mb-8">
            <VideoCategories
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={(category) => {
                if (category === "All") {
                  router.push("/natural-treatment", undefined, {
                    shallow: true,
                  });
                } else {
                  router.push(
                    `/natural-treatment?category=${category}`,
                    undefined,
                    { shallow: true }
                  );
                }
              }}
            />
          </div>
        )}

        {/* Featured Video Section - Only show on the main page (All category) */}
        {selectedCategory === "All" && <FeaturedVideo />}

        {/* How to Use Gallery - Only show on the main page */}
        {selectedCategory === "All" && <HowToUseGallery />}

        {/* Video Gallery */}
        {isLoaded && <VideoGallery videos={filteredVideos} />}
      </div>
    </Layout>
  );
};

export default NaturalTreatmentPage;
