// // components/home/FeaturedServices.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import FeatureCard from "../common/FeatureCard";

// const services = [
//   {
//     title: "Online Consultation",
//     description:
//       "Connect with Dr. Selvan from anywhere in the world for personalized homeopathic advice and treatment plans.",
//     image: "/images/service-online.jpg",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Personalized Treatment Plans",
//     description:
//       "Custom homeopathic remedies tailored to your specific symptoms, constitution, and health history.",
//     image: "/images/service-personalized.jpg",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Homeopathic Products",
//     description:
//       "High-quality homeopathic remedies and supplements formulated by Dr. Selvan for various health conditions.",
//     image: "/images/service-products.jpg",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Health Workshops",
//     description:
//       "Educational sessions on homeopathic principles and natural approaches to common health challenges.",
//     image: "/images/service-workshops.jpg",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//         />
//       </svg>
//     ),
//   },
// ];

// const FeaturedServices = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="py-16 bg-gradient-to-b from-accent to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-12"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.span
//             className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3"
//             variants={titleVariants}
//           >
//             Our Services
//           </motion.span>
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-dark mb-4"
//             variants={titleVariants}
//           >
//             Comprehensive Homeopathic Care
//           </motion.h2>
//           <motion.p
//             className="text-lg text-gray-600 max-w-3xl mx-auto"
//             variants={titleVariants}
//           >
//             Experience the full spectrum of homeopathic treatments and services
//             designed to address your health concerns naturally.
//           </motion.p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <FeatureCard
//               key={index}
//               title={service.title}
//               description={service.description}
//               icon={service.icon}
//               image={service.image}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* Decorative elements */}
//         <motion.div
//           className="absolute top-20 left-0 w-64 h-64 rounded-full bg-primary opacity-5 -z-10"
//           animate={{
//             scale: [1, 1.2, 1],
//             x: [0, 10, 0],
//             y: [0, -10, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-0 w-48 h-48 rounded-full bg-secondary opacity-10 -z-10"
//           animate={{
//             scale: [1, 1.1, 1],
//             rotate: [0, 10, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </div>
//     </section>
//   );
// };

// export default FeaturedServices;
