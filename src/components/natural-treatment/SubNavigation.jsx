// src/components/natural-treatment/SubNavigation.jsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const SubNavigation = () => {
  const router = useRouter();

  // Define sub-navigation items
  const navItems = [
    { name: "Video Gallery", path: "/natural-treatment" },
    { name: "Educational", path: "/natural-treatment?category=Educational" },
    { name: "Treatment", path: "/natural-treatment?category=Treatment" },
    { name: "Wellness", path: "/natural-treatment?category=Wellness" },
    { name: "Testimonials", path: "/natural-treatment?category=Testimonials" },
  ];

  return (
    <div className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 overflow-x-auto py-2 scrollbar-hide">
          {navItems.map((item) => {
            const isActive =
              item.path === "/natural-treatment"
                ? router.pathname === "/natural-treatment" &&
                  !router.query.category
                : router.query.category === item.path.split("=")[1];

            return (
              <Link key={item.name} href={item.path} passHref>
                <motion.div
                  className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full cursor-pointer ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubNavigation;
