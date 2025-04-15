// pages/index.js
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import FeaturedTreatments from "../components/home/FeaturedTreatments";
import TransformationsSection from "../components/home/TransformationsSection";
import ProductsPreview from "../components/home/ProductsPreview";
import BlogPreview from "../components/home/BlogPreview";
import AppointmentForm from "../components/home/AppointmentForm";
import BenefitsSection from "../components/home/BenefitsSection";
import "../styles/globals.css";

export default function Home() {
  // Animation for page loading
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const sectionItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Layout title="Dr. Selvan's Homeopathy - Natural Healing Solutions">
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        {/* Hero Section - Updated with new design */}
        <motion.section variants={sectionItemVariants}>
          <HeroSection />
        </motion.section>

        {/* Why Choose Us Section - New section from the design */}
        <motion.section variants={sectionItemVariants}>
          <WhyChooseSection />
        </motion.section>

        {/* Featured Treatments - Using card-based layout from design */}
        <motion.section variants={sectionItemVariants}>
          <FeaturedTreatments />
        </motion.section>

        {/* Benefits Section - Showing the art & science of homeopathy */}
        <motion.section variants={sectionItemVariants}>
          <BenefitsSection />
        </motion.section>

        {/* Testimonials/Transformations Section - New design */}
        <motion.section variants={sectionItemVariants}>
          <TransformationsSection />
        </motion.section>

        {/* Products Preview */}
        <motion.section variants={sectionItemVariants}>
          <ProductsPreview />
        </motion.section>

        {/* Blog Preview */}
        <motion.section variants={sectionItemVariants}>
          <BlogPreview />
        </motion.section>

        {/* Appointment Form */}
        <motion.section variants={sectionItemVariants}>
          <AppointmentForm />
        </motion.section>
      </motion.div>
    </Layout>
  );
}
