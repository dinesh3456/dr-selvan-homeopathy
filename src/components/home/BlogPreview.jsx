import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogPreviewLight = () => {
  const blogPosts = [
    {
      title: "Understanding the Principles of Homeopathy",
      excerpt:
        "Learn about the core principles that make homeopathic treatment effective for a wide range of conditions.",
      image: "/images/blog-1.jpg",
      category: "Homeopathy Basics",
      date: "April 5, 2025",
      slug: "understanding-principles-homeopathy",
    },
    {
      title: "Myths vs. Facts: What You Need to Know About Homeopathy",
      excerpt:
        "Separating fact from fiction when it comes to homeopathic treatments and their effectiveness.",
      image: "/images/blog-2.jpg",
      category: "Myth Busting",
      date: "March 22, 2025",
      slug: "myths-facts-homeopathy",
    },
    {
      title: "Homeopathic Approaches to Seasonal Allergies",
      excerpt:
        "Natural ways to manage and treat seasonal allergies without the side effects of conventional medications.",
      image: "/images/blog-3.jpg",
      category: "Treatments",
      date: "March 10, 2025",
      slug: "homeopathic-approaches-seasonal-allergies",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <motion.div
            className="mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3"
              variants={itemVariants}
            >
              OUR BLOG
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              variants={itemVariants}
            >
              Latest from Our Blog
            </motion.h2>

            <motion.p
              className="text-lg text-slate-600 max-w-3xl"
              variants={itemVariants}
            >
              Explore our articles to learn more about homeopathy and natural
              healing approaches.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className="mt-4 h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-200 rounded-full"
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  {/* Tag indicator */}
                  <div className="absolute top-0 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-b-lg z-10 shadow-sm">
                    <span className="text-xs text-slate-500 font-medium">
                      / {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative h-48 w-full overflow-hidden bg-blue-100">
                    <div
                      className="h-full w-full transition-transform duration-500 hover:scale-105"
                      style={{
                        backgroundImage: `url(${post.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-blue-100 text-blue-600 text-xs py-1 px-2 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>

                  <Link
                    href={`/homeopathy/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    <span>Read more</span>
                    <div className="ml-2 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              <Link
                href="/homeopathy"
                className="inline-flex items-center justify-center border border-blue-500 text-blue-600 bg-white px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition"
              >
                <span>View All Articles</span>
              </Link>

              {/* Arrow annotation */}
              <motion.div
                className="absolute -top-[-30px] left-[-85%] hidden md:block" // Changed from left-[-75%] to bring the whole component closer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.p
                    className="absolute -top-10 left-0 text-primary font-handwritten text-lg transform rotate-3" // Changed from -top-12 to -top-10 to reduce vertical spacing
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Explore our knowledge base!
                  </motion.p>

                  {/* Modified SVG with adjusted position */}
                  <motion.svg
                    width="120"
                    height="40" // Reduced height from 60 to 40 to bring arrow closer to text
                    viewBox="0 0 120 40" // Adjusted viewBox to match new height
                    className="fill-none stroke-primary transform translate-x-4" // Reduced translate-x from 8 to 4
                  >
                    <motion.path
                      d="M10,15 Q60,30 100,15" // Modified path to start higher (15 instead of 30)
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.7 }}
                    />
                    <motion.path
                      d="M95,15 L105,10 L100,20" // Modified arrowhead to align with new curve
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 1.9 }}
                    />
                  </motion.svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewLight;
