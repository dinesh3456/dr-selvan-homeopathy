// components/layout/Layout.jsx
import React, { useEffect } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import FloatingChat from "../common/FloatingChat";
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children, title = "Dr. Selvan's Homeopathy" }) => {
  // Page transition animation
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
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

        {/* Meta tags for better SEO and sharing */}
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Natural healing solutions for a healthier life with Dr. Selvan's homeopathy treatments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Page loading progress bar (top of page) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      />

      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          className="flex-grow"
          key={title}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* Floating chat component */}
      <FloatingChat />

      {/* Back to top button */}
      <BackToTopButton />
    </div>
  );
};

// Back to top button component with animation
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Button animations
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    tap: { scale: 0.95 },
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-40"
          style={{ marginRight: "5rem" }} // Make space for the chat button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileHover="hover"
          whileTap="tap"
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
    </AnimatePresence>
  );
};

export default Layout;
