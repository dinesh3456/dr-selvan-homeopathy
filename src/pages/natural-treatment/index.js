// src/pages/natural-treatment/index.js (modified version)
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
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

  // Update selected category when URL query changes
  useEffect(() => {
    if (router.query.category) {
      setSelectedCategory(router.query.category);
    } else {
      setSelectedCategory("All");
    }
  }, [router.query.category]);

  // Filter videos based on selected category
  const filteredVideos =
    selectedCategory === "All"
      ? videoData
      : videoData.filter((video) => video.category === selectedCategory);

  return (
    <Layout title="Natural Treatment Videos | Dr. Selvan's Homeopathy">
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
              Dr Selvan's <span className="text-accent">Medic Talks</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "Dr. Selvan's Medic Talks: Watch and learn about natural healing
              approaches"
            </motion.p>
          </div>
        </div>
      </div>

      {/* Sub-navigation */}
      <SubNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-accent">Video</span> Collection
            {selectedCategory !== "All" && (
              <span className="text-accent"> - {selectedCategory}</span>
            )}
          </h2>
          <p className="text-lg text-gray-600 max-w-10xl">
            Dr. Selvan's Medic Talks features engaging, educational videos on
            various health conditions. Each video explains symptoms, causes, and
            pathology, with an emphasis on dietary guidelines—what to eat and
            what to avoid. Learn how to approach healing naturally first, before
            considering medication.
          </p>
        </motion.div>

        {/* Featured Video Section - Only show on the main page (All category) */}
        {selectedCategory === "All" && <FeaturedVideo />}

        {/* How to Use Gallery - Only show on the main page */}
        {selectedCategory === "All" && <HowToUseGallery />}

        {/* Video Gallery */}
        <VideoGallery videos={filteredVideos} />
      </div>
    </Layout>
  );
};

export default NaturalTreatmentPage;
