// pages/index.js
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import BenefitsSection from "../components/home/BenefitsSection";
import FeaturedTreatments from "../components/home/FeaturedTreatments";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ProductsPreview from "../components/home/ProductsPreview";
import BlogPreview from "../components/home/BlogPreview";
import AppointmentForm from "../components/home/AppointmentForm";
import "../styles/globals.css";

export default function Home() {
  return (
    <Layout title="Dr. Selvan's Homeopathy - Natural Healing Solutions">
      <HeroSection />
      <BenefitsSection />
      <FeaturedTreatments />
      <TestimonialsSection />
      <ProductsPreview />
      <BlogPreview />
      <AppointmentForm />
    </Layout>
  );
}
