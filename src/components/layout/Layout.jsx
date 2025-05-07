// components/layout/Layout.jsx - simplified
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Layout = ({
  children,
  title = "Dr. Selvan's Homeopathy",
  hideFooter = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Very simple fade animation - no position changes
  const fadeIn = {
    opacity: 0,
    animate: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("loading");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("loading");
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("loading");
    };
  }, [isLoading]);

  return (
    <div className={`flex flex-col min-h-screen ${isLoading ? "loading" : ""}`}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Dr. Selvan's Homeopathy - Natural healing solutions for a healthier life"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Caveat:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Natural healing solutions for a healthier life with Dr. Selvan's homeopathy treatments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Loading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-lavender z-50"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />

      <Header />

      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>

      {!hideFooter && <Footer />}

      {/* Back to top button */}
      <BackToTopButton />
    </div>
  );
};

// BackToTopButton component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Simple button with no exit animations
  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
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
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </motion.button>
      )}
    </>
  );
};

export default Layout;
