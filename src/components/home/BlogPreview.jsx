// components/home/BlogPreview.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Understanding the Principles of Homeopathy",
    excerpt:
      "Learn about the core principles that make homeopathic treatment effective for a wide range of conditions.",
    image: "./public/images/blog-1.jpg",
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

const BlogPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our articles to learn more about homeopathy and natural
            healing approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-accent rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs py-1 px-2 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/homeopathy/${post.slug}`}
                  className="text-primary font-medium hover:text-primary-dark flex items-center"
                >
                  Read more
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/homeopathy"
            className="inline-flex items-center justify-center bg-white text-primary border border-primary px-6 py-3 rounded-full font-medium hover:bg-accent transition"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
