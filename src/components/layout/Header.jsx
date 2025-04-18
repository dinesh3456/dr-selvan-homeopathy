// components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  // Menu item animation variants
  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      height: 0,
      pointerEvents: "none",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      pointerEvents: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  // Link hover animation
  const linkHoverVariants = {
    hover: {
      color: "#3B82F6", // primary blue color
      transition: { duration: 0.2 },
    },
  };

  return (
    <header
      className={`bg-white/90 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-2" : "shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with subtle animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <motion.span
                className="text-2xl font-bold text-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Dr. Selvan's Homeopathy
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <motion.div whileHover="hover" variants={linkHoverVariants}>
                <Link
                  href="/homeopathy"
                  className="text-dark hover:text-primary font-medium transition"
                >
                  Homeopathy
                </Link>
              </motion.div>
              <AnimatePresence>
                <motion.div
                  className="absolute left-0 mt-2 w-56 origin-top-left bg-white shadow-lg rounded-md py-2 z-50 overflow-hidden"
                  initial="hidden"
                  variants={dropdownVariants}
                  animate="hidden"
                  whileHover="visible"
                >
                  {[
                    {
                      href: "/homeopathy/what-is-homeopathy",
                      label: "What is Homeopathy",
                    },
                    {
                      href: "/homeopathy/scope-of-homeopathy",
                      label: "Scope of Homeopathy",
                    },
                    {
                      href: "/homeopathy/methodology",
                      label: "Homeopathy Methodology",
                    },
                    {
                      href: "/homeopathy/myths-and-facts",
                      label: "Myths and Facts",
                    },
                    {
                      href: "/homeopathy/dr-selvan-treatment",
                      label: "Dr. Selvan's Treatment",
                    },
                    { href: "/homeopathy/faq", label: "FAQ about Disease" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={menuItemVariants}
                      whileHover={{
                        backgroundColor: "#EFF6FF", // blue-sand color
                        x: 5,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-dark hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div whileHover="hover" variants={linkHoverVariants}>
              <Link
                href="/natural-treatment"
                className="text-dark hover:text-primary font-medium transition"
              >
                Natural Treatment
              </Link>
            </motion.div>

            <motion.div whileHover="hover" variants={linkHoverVariants}>
              <Link
                href="/products"
                className="text-dark hover:text-primary font-medium transition"
              >
                Our Products
              </Link>
            </motion.div>

            <div className="relative group">
              <motion.div whileHover="hover" variants={linkHoverVariants}>
                <Link
                  href="/about"
                  className="text-dark hover:text-primary font-medium transition"
                >
                  About Us
                </Link>
              </motion.div>
              <AnimatePresence>
                <motion.div
                  className="absolute left-0 mt-2 w-56 origin-top-left bg-white shadow-lg rounded-md py-2 z-50 overflow-hidden"
                  initial="hidden"
                  variants={dropdownVariants}
                  animate="hidden"
                  whileHover="visible"
                >
                  {[
                    {
                      href: "/about/clinic",
                      label: "About Dr. Selvan Homeopathy",
                    },
                    { href: "/about/doctor", label: "About Dr. Selvan" },
                    { href: "/about/cures", label: "Cures @ Dr. Selvan" },
                    { href: "/about/csr", label: "CSR - Homeopathy Trust" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={menuItemVariants}
                      whileHover={{
                        backgroundColor: "#EFF6FF", // blue-sand color
                        x: 5,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-dark hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div whileHover="hover" variants={linkHoverVariants}>
              <Link
                href="/contact"
                className="text-dark hover:text-primary font-medium transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </nav>

          {/* Appointment Button */}
          <motion.div
            className="hidden md:block relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 200,
            }}
          >
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Link
                href="/appointment"
                className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition shadow-sm"
              >
                Book Appointment
              </Link>
            </motion.div>

            {/* Annotation Arrow with path animation */}
            <motion.div
              className="absolute -top-16 right-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="relative">
                <motion.div className="absolute -top-2 right-16 text-primary font-handwritten text-sm transform -rotate-6 whitespace-nowrap">
                  <motion.span
                    animate={{
                      y: [0, -2, 0],
                      rotate: [-6, -4, -6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Ready to help!
                  </motion.span>
                </motion.div>
                <motion.svg
                  width="100"
                  height="50"
                  viewBox="0 0 100 50"
                  className="fill-none stroke-primary"
                >
                  <motion.path
                    d="M10,40 Q30,10 90,30"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.7,
                      ease: "easeOut",
                    }}
                  />
                  <motion.path
                    d="M85,30 L95,35 L90,25"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 2.5,
                    }}
                  />
                </motion.svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="lg:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { href: "/homeopathy", label: "Homeopathy" },
                { href: "/natural-treatment", label: "Natural Treatment" },
                { href: "/products", label: "Our Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={menuItemVariants}
                  whileHover={{
                    backgroundColor: "#EFF6FF", // blue-sand color
                    x: 5,
                  }}
                >
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-dark hover:text-primary rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={menuItemVariants}
                whileHover={{
                  backgroundColor: "#2563EB", // primary-dark color
                  x: 5,
                }}
              >
                <Link
                  href="/appointment"
                  className="block px-3 py-2 text-base font-medium bg-primary text-white hover:bg-primary-dark rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
