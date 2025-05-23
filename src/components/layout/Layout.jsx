// components/layout/Layout.jsx (modified)
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({
  children,
  title = "Dr. Selvan's Homeopathy",
  hideFooter = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // // Page transition animation
  // const pageVariants = {
  //   initial: {
  //     opacity: 0,
  //     y: 20,
  //   },
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeInOut",
  //       staggerChildren: 0.1,
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //     y: -20,
  //     transition: {
  //       duration: 0.3,
  //     },
  //   },
  // };

  const fadeIn = {
    opacity: 0,
    animate: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  // Add loading state management
  useEffect(() => {
    // Apply 'loading' class to body to prevent scroll
    if (isLoading) {
      document.body.classList.add("loading");
    }

    // Once everything is loaded, remove the loading class
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("loading");
    }, 100); // Short timeout to ensure all elements are in place

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

      {/* Page loading progress bar (top of page)  */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-lavender z-50"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      />

      <Header />

      <main className="flex-grow overflow-hidden">
        <motion.div key={title} initial="initial" animate="animate">
          {children}
        </motion.div>
      </main>

      {!hideFooter && <Footer />}

      {/* Back to top button */}
      <BackToTopButton />
    </div>
  );
};

// BackToTopButton component with fixed styling - updated to blue color
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
      boxShadow: "0 10px 25px -3px rgba(59, 130, 246, 0.3)",
    },
    tap: { scale: 0.95 },
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-40"
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
