// src/pages/natural-treatment/video/[id].js
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../../components/layout/Layout";
import AppointmentButton from "../../../components/common/AppointmentButton";

// Video data with titles, descriptions, and YouTube IDs
const videoData = [
  {
    id: "uliztx1_oLk",
    title: "Homeopathic Treatment Approach",
    description:
      "Learn about Dr. Selvan's approach to homeopathic treatment and how it differs from conventional medicine.",
    longDescription:
      "In this comprehensive video, Dr. Selvan explains his holistic approach to homeopathic treatment. You'll learn how homeopathy addresses the root causes of illness rather than just treating symptoms, and how this approach leads to more lasting healing. Dr. Selvan also discusses the importance of individualized treatment plans and how conventional and homeopathic approaches can sometimes work together for optimal patient outcomes.",
    category: "Educational",
    isShort: false,
  },
  {
    id: "YHuCBTEX0qA",
    title: "Common Misconceptions About Homeopathy",
    description:
      "Dr. Selvan addresses common myths and misconceptions about homeopathic medicine.",
    longDescription:
      "There are many misconceptions about homeopathy in today's healthcare landscape. In this video, Dr. Selvan systematically addresses and debunks the most common myths surrounding homeopathic treatment. From concerns about efficacy to questions about scientific evidence, this video provides clear, factual information to help patients make informed decisions about their healthcare options.",
    category: "Educational",
    isShort: false,
  },
  {
    id: "uzUzDpLjqvY",
    title: "Natural Healing for Chronic Conditions",
    description:
      "Discover how homeopathy can help with managing chronic health conditions naturally.",
    longDescription:
      "Chronic conditions often present significant challenges for conventional medicine. This video explores how homeopathic approaches can provide relief and improvement for patients suffering from long-term health issues. Dr. Selvan shares case studies and explains the mechanisms through which homeopathic remedies stimulate the body's natural healing processes to address persistent health problems.",
    category: "Treatment",
    isShort: false,
  },
  {
    id: "67gb0GV8zk8",
    title: "Arthritis Treatment with Homeopathy",
    description:
      "Learn about homeopathic approaches to relieving arthritis pain and improving joint mobility.",
    longDescription:
      "Arthritis affects millions of people worldwide, often leading to pain, reduced mobility, and decreased quality of life. In this detailed video, Dr. Selvan discusses specific homeopathic remedies and approaches that can help reduce inflammation, relieve pain, and improve joint function in various types of arthritis. Learn about complementary lifestyle changes and how homeopathy can work alongside conventional treatments for arthritis management.",
    category: "Treatment",
    isShort: false,
  },
  {
    id: "6moIFSgUQn8",
    title: "Treating Skin Conditions Naturally",
    description:
      "Dr. Selvan discusses homeopathic treatments for common skin issues like eczema and psoriasis.",
    longDescription:
      "Skin conditions can be particularly challenging to treat effectively and often have underlying causes beyond just the skin itself. This comprehensive video covers homeopathic approaches to various dermatological issues including eczema, psoriasis, acne, and other common skin problems. Dr. Selvan explains how homeopathy addresses both the visible symptoms and the internal imbalances that contribute to skin disorders.",
    category: "Treatment",
    isShort: false,
  },
  // Additional videos with long descriptions would go here
  {
    id: "om9thz8_nY0",
    title: "Homeopathy for Respiratory Health",
    description:
      "Effective homeopathic treatments for asthma, allergies, and other respiratory conditions.",
    longDescription:
      "Respiratory conditions can significantly impact quality of life and often require ongoing management. In this video, Dr. Selvan explores homeopathic approaches to asthma, seasonal allergies, chronic bronchitis, and other breathing difficulties. Learn about specific remedies that can help reduce inflammation, ease breathing, strengthen the respiratory system, and potentially reduce dependence on conventional medications.",
    category: "Treatment",
    isShort: false,
  },
  // Remaining videos with similar detailed long descriptions...
];

const VideoDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the video data based on ID
  const video = videoData.find((v) => v.id === id);

  // If video not found or page is still loading
  if (!video) {
    return (
      <Layout title="Video | Dr. Selvan's Homeopathy">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-lg text-gray-600">
            Loading video or video not found...
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${video.title} | Dr. Selvan's Homeopathy`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link
            href="/natural-treatment"
            className="text-primary flex items-center hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Video Gallery
          </Link>
        </div>

        <motion.div
          className="bg-white rounded-xl overflow-hidden shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">{video.title}</h1>
            <div className="flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                {video.category}
              </span>
              {video.isShort && (
                <span className="bg-red-100 text-red-600 text-sm font-medium px-3 py-1 rounded-full">
                  Short
                </span>
              )}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {video.longDescription || video.description}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Share This Video
            </h2>
            <div className="flex space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1.02-1.1h3.2V.26h-4.4C10.36.26 9.83 3.12 9.83 5.9v1.57H6.5v4.133h3.33V22h4.667v-10.4h3.82l.5-4.134z" />
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://www.youtube.com/watch?v=${
                  video.id
                }&text=${encodeURIComponent(video.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `${video.title} - https://www.youtube.com/watch?v=${video.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(
                  video.title
                )}&body=${encodeURIComponent(
                  `Check out this video from Dr. Selvan's Homeopathy: https://www.youtube.com/watch?v=${video.id}`
                )}`}
                className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 transition"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Related Videos Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoData
              .filter((v) => v.id !== video.id && v.category === video.category)
              .slice(0, 3)
              .map((relatedVideo) => (
                <motion.div
                  key={relatedVideo.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  onClick={() =>
                    router.push(`/natural-treatment/video/${relatedVideo.id}`)
                  }
                >
                  <div className="relative pb-[56.25%]">
                    <img
                      src={`https://img.youtube.com/vi/${relatedVideo.id}/mqdefault.jpg`}
                      alt={relatedVideo.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-accent/80 rounded-full w-12 h-12 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
                      {relatedVideo.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedVideo.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Interested in a Homeopathic Consultation?
            </h2>
            <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
              If you'd like to learn more about how homeopathic treatment can
              help with your specific health concerns, schedule a consultation
              with Dr. Selvan.
            </p>
            <AppointmentButton
              text="Book an Appointment"
              variant="primary"
              size="md"
              className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 rounded-full font-medium hover:from-primary-dark hover:to-accent-dark transition shadow-md"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoDetailPage;

// Generate static paths for all videos
export async function getStaticPaths() {
  const paths = videoData.map((video) => ({
    params: { id: video.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Generate static props for each video page
export async function getStaticProps({ params }) {
  const video = videoData.find((video) => video.id === params.id);

  if (!video) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      video,
    },
  };
}
