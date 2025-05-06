import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AppointmentButton from "../common/AppointmentButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [homeopathyOpen, setHomeopathyOpen] = useState(false);
  const [mobileHomeopathyOpen, setMobileHomeopathyOpen] = useState(false);

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

  const handleContactClick = (e) => {
    e.preventDefault();
    const footer = document.querySelector("footer");
    if (footer) {
      setIsOpen(false); // Close mobile menu if open
      window.scrollTo({
        top: footer.offsetTop,
        behavior: "smooth",
      });
    }
  };

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
      boxShadow: "0 10px 15px -3px rgba(255, 107, 53, 0.4)",
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

  useEffect(() => {
    if (!homeopathyOpen) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest(".relative.group.homeopathy")) {
        setHomeopathyOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [homeopathyOpen]);

  return (
    <header
      className={`bg-white/90 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-1" : "shadow-sm py-2"
      }`}
    >
      <style jsx>{`
        .relative.group.hovered + .relative.group .absolute,
        .relative.group:hover .absolute {
          opacity: 1;
          visibility: visible;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with subtle animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <motion.div
                className="h-16 w-auto flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/images/Dr. Selvan Logo.png"
                  alt="Dr. Selvan's Homeopathy"
                  width={220}
                  height={60}
                  priority
                  className="object-contain"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group homeopathy">
              <motion.div
                whileHover="hover"
                variants={linkHoverVariants}
                onClick={() => setHomeopathyOpen(!homeopathyOpen)}
              >
                <span className="text-dark hover:text-primary font-medium transition cursor-pointer">
                  Homeopathy
                </span>
              </motion.div>

              {/* Update the dropdown to stay visible when hovered */}
              <div
                className={`absolute left-0 mt-2 w-56 origin-top-left bg-white shadow-lg rounded-md py-2 z-50 overflow-hidden transition-all duration-300
      ${
        homeopathyOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
      }
    `}
                onMouseEnter={() =>
                  document
                    .querySelector(".relative.group.homeopathy")
                    .classList.add("hovered")
                }
                onMouseLeave={() =>
                  !homeopathyOpen &&
                  document
                    .querySelector(".relative.group.homeopathy")
                    .classList.remove("hovered")
                }
              >
                {[
                  {
                    href: "/homeopathy/overview",
                    label: "Homeopathy: Overview",
                  },
                  {
                    href: "/homeopathy/scope-of-homeopathy",
                    label: "Scope of Homeopathy",
                  },
                  {
                    href: "/homeopathy/safest-method",
                    label: "Safest Method",
                  },
                  {
                    href: "/homeopathy/treatment-methodology",
                    label: "Homeopathic Treatment Methodology",
                  },
                  {
                    href: "/homeopathy/history",
                    label: "History of Homeopathy",
                  },
                  {
                    href: "/homeopathy/principles",
                    label: "Principles of Homeopathy",
                  },
                  {
                    href: "/homeopathy/myths-and-facts",
                    label: "Myths and Facts of Homeopathy",
                  },
                  {
                    href: "/homeopathy/faq",
                    label: "FAQ",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="hover:bg-blue-100 px-4 py-2 transition-transform duration-200 transform hover:translate-x-1"
                  >
                    <Link
                      href={item.href}
                      className="block text-sm text-dark hover:text-primary"
                      onClick={() => setHomeopathyOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <motion.div whileHover="hover" variants={linkHoverVariants}>
              <Link
                href="/natural-treatment"
                className="text-dark hover:text-primary font-medium transition"
              >
                Medic Talk
              </Link>
            </motion.div>

            {/* Products link without dropdown */}
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
                  href="/about/doctor"
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
                onClick={handleContactClick}
              >
                Contact Us
              </Link>
            </motion.div>
          </nav>

          {/* Appointment Button - Using the dedicated component */}
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
            {/* Use our AppointmentButton component with the accent variant */}
            <AppointmentButton variant="accent" />

            {/* Annotation Arrow with path animation */}
            <motion.div
              className="absolute -top-16 right-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            ></motion.div>
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
              {/* Homeopathy Menu Item with Dropdown */}
              <motion.div
                variants={menuItemVariants}
                whileHover={{
                  backgroundColor: "#EFF6FF", // blue-sand color
                  x: 5,
                }}
                onClick={() => setMobileHomeopathyOpen(!mobileHomeopathyOpen)}
              >
                <div className="flex items-center justify-between px-3 py-2 text-base font-medium text-dark rounded-md cursor-pointer">
                  <span>Homeopathy</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${
                      mobileHomeopathyOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Homeopathy Dropdown */}
              {mobileHomeopathyOpen && (
                <div className="pl-4">
                  {[
                    {
                      href: "/homeopathy/overview",
                      label: "Homeopathy: Overview",
                    },
                    {
                      href: "/homeopathy/scope-of-homeopathy",
                      label: "Scope of Homeopathy",
                    },
                    {
                      href: "/homeopathy/safest-method",
                      label: "Safest Method",
                    },
                    {
                      href: "/homeopathy/treatment-methodology",
                      label: "Homeopathic Treatment Methodology",
                    },
                    {
                      href: "/homeopathy/history",
                      label: "History of Homeopathy",
                    },
                    {
                      href: "/homeopathy/principles",
                      label: "Principles of Homeopathy",
                    },
                    {
                      href: "/homeopathy/myths-and-facts",
                      label: "Myths and Facts of Homeopathy",
                    },
                    {
                      href: "/homeopathy/faq",
                      label: "FAQ",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={menuItemVariants}
                      whileHover={{
                        backgroundColor: "#EFF6FF",
                        x: 5,
                      }}
                    >
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-sm text-dark hover:text-primary rounded-md"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileHomeopathyOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Other Menu Items */}
              {[
                { href: "/natural-treatment", label: "Medic Talk" },
                { href: "/products", label: "Our Products" },
                { href: "/about/doctor", label: "About Us" },
                {
                  href: "#contact",
                  label: "Contact Us",
                  onClick: handleContactClick,
                },
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
                    onClick={(e) => {
                      if (item.onClick) {
                        item.onClick(e);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={menuItemVariants}
                whileHover={{
                  backgroundColor: "#FF6B35", // accent color
                  x: 5,
                }}
              >
                <AppointmentButton
                  text="Book Appointment"
                  variant="accent"
                  size="md"
                  className="block w-full px-3 py-2 text-base font-medium bg-accent text-white hover:bg-accent-dark rounded-md text-left"
                  onClick={() => setIsOpen(false)}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
