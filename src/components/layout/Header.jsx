// components/layout/Header.jsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              Dr. Selvan's Homeopathy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <Link
                href="/homeopathy"
                className="text-dark hover:text-primary font-medium transition"
              >
                Homeopathy
              </Link>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 transform origin-top-left bg-white shadow-lg rounded-md py-2 z-50">
                <Link
                  href="/homeopathy/what-is-homeopathy"
                  className="block px-4 py-2 text-sm text-dark hover:bg-accent hover:text-primary"
                >
                  What is Homeopathy
                </Link>
                <Link
                  href="/homeopathy/scope-of-homeopathy"
                  className="block px-4 py-2 text-sm text-dark hover:bg-accent hover:text-primary"
                >
                  Scope of Homeopathy
                </Link>
                <Link
                  href="/homeopathy/methodology"
                  className="block px-4 py-2 text-sm text-dark hover:bg-accent hover:text-primary"
                >
                  Homeopathy Methodology
                </Link>
                <Link
                  href="/homeopathy/myths-and-facts"
                  className="block px-4 py-2 text-sm text-dark hover:bg-accent hover:text-primary"
                >
                  Myths and Facts
                </Link>
                <Link
                  href="/homeopathy/dr-selvan-treatment"
                  className="block px-4 py-2 text-sm text-dark hover:bg-accent hover:text-primary"
                >
                  Dr. Selvan's Treatment
                </Link>
                <Link
                  href="/homeopathy/faq"
                  className="block px-4 py-2 text-sm text-dark hover:bg-accent hover:text-primary"
                >
                  FAQ about Disease
                </Link>
              </div>
            </div>

            <Link
              href="/natural-treatment"
              className="text-dark hover:text-primary font-medium transition"
            >
              Natural Treatment
            </Link>

            <Link
              href="/products"
              className="text-dark hover:text-primary font-medium transition"
            >
              Our Products
            </Link>

            <div className="relative group">
              <Link
                href="/about"
                className="text-dark hover:text-primary font-medium transition"
              >
                About Us
              </Link>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 transform origin-top-left bg-white shadow-lg rounded-md py-2 z-50">
                <Link
                  href="/about/clinic"
                  className="block px-4 py-2 text-sm text-dark hover:bg-accent hover:text-primary"
                >
                  About Dr. Selvan Homeopathy
                </Link>
                <Link
                  href="/about/doctor"
                  className="block px-4 py-2 text-sm text-dark hover:bg-accent hover:text-primary"
                >
                  About Dr. Selvan
                </Link>
                <Link
                  href="/about/cures"
                  className="block px-4 py-2 text-sm text-dark hover:bg-accent hover:text-primary"
                >
                  Cures @ Dr. Selvan
                </Link>
                <Link
                  href="/about/csr"
                  className="block px-4 py-2 text-sm text-dark hover:bg-accent hover:text-primary"
                >
                  CSR - Homeopathy Trust
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-dark hover:text-primary font-medium transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* Appointment Button */}
          {/* Appointment Button */}
          <div className="hidden md:block">
            <Link
              href="/appointment"
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition flex items-center"
            >
              <span>Book Appointment</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/homeopathy"
              className="block px-3 py-2 text-base font-medium text-dark hover:bg-accent rounded-md"
            >
              Homeopathy
            </Link>
            <Link
              href="/natural-treatment"
              className="block px-3 py-2 text-base font-medium text-dark hover:bg-accent rounded-md"
            >
              Natural Treatment
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-base font-medium text-dark hover:bg-accent rounded-md"
            >
              Our Products
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-dark hover:bg-accent rounded-md"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-dark hover:bg-accent rounded-md"
            >
              Contact Us
            </Link>
            <Link
              href="/appointment"
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition flex items-center"
            >
              <span>Book Appointment</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
