// pages/index.js
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import BenefitsSection from "../components/home/BenefitsSection";
import FeaturedTreatments from "../components/home/FeaturedTreatments";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ProductsPreview from "../components/home/ProductsPreview";
import BlogPreview from "../components/home/BlogPreview";
import AppointmentForm from "../components/home/AppointmentForm";
import FeaturedServices from "../components/home/FeaturedServices";
import "../styles/globals.css";

export default function Home() {
  // Staggered animation for page sections
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
        <motion.section variants={sectionItemVariants}>
          <HeroSection />
        </motion.section>

        <motion.section variants={sectionItemVariants}>
          <BenefitsSection />
        </motion.section>

        {/* New FeaturedServices section */}
        <motion.section variants={sectionItemVariants}>
          <FeaturedServices />
        </motion.section>

        <motion.section variants={sectionItemVariants}>
          <FeaturedTreatments />
        </motion.section>

        <motion.section variants={sectionItemVariants}>
          <TestimonialsSection />
        </motion.section>

        <motion.section variants={sectionItemVariants}>
          <ProductsPreview />
        </motion.section>

        <motion.section variants={sectionItemVariants}>
          <BlogPreview />
        </motion.section>

        <motion.section variants={sectionItemVariants}>
          <AppointmentForm />
        </motion.section>
      </motion.div>
    </Layout>
  );
}
