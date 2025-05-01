import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";
import SectionTitle from "../ui/SectionTitle";
import BlobShape from "../ui/BlobShape";
import SectionDivider from "../ui/SectionDivider";

const treatments = [
  {
    title: "Chronic Disease Management",
    description:
      "Long-term relief from conditions like arthritis, asthma, and allergies with natural remedies.",
    image: "/images/treatment-chronic.jpg",
    link: "/treatments/chronic-diseases",
    color: "primary",
  },
  {
    title: "Skin Disorders",
    description:
      "Effective solutions for eczema, psoriasis, acne, and other persistent skin conditions.",
    image: "/images/treatment-skin.jpg",
    link: "/treatments/skin-disorders",
    color: "accent", // Changed to accent (orange)
  },
  {
    title: "Digestive Health",
    description:
      "Address IBS, acid reflux, and other digestive issues with targeted homeopathic treatments.",
    image: "/images/treatment-digestive.jpg",
    link: "/treatments/digestive-health",
    color: "primary",
  },
  {
    title: "Pediatric Care",
    description:
      "Gentle and effective treatments for children's health issues, from colic to behavioral problems.",
    image: "/images/treatment-pediatric.jpg",
    link: "/treatments/pediatric-care",
    color: "accent", // Changed to accent (orange)
  },
];

const FeaturedTreatments = () => {
  return (
    <section className="pt-24 pb-32 relative overflow-hidden bg-white">
      {/* Top wave divider */}
      <SectionDivider type="gentle-top" position="top" color="white" />

      {/* Background pattern with orange accent */}
      <div className="absolute inset-0 pattern-grid opacity-[0.07] z-0"></div>

      {/* Decorative blobs - one orange, one blue */}
      <BlobShape
        color="primary"
        position="top-right"
        size="lg"
        opacity={0.02}
      />

      <BlobShape
        color="accent"
        position="bottom-left"
        size="lg"
        opacity={0.02}
      />

      <div className="container-lg relative z-10">
        <SectionTitle
          pretitle="Our Treatments"
          title={
            <>
              Art and science of{" "}
              <span className="text-primary">homeopathic</span>{" "}
              <span className="text-accent">wellness</span>
            </>
          }
          subtitle="At Dr. Selvan's Homeopathy, we offer effective natural treatments for a wide range of health conditions."
          alignment="center"
          withLine={true}
          lineColor="gradient-blue-orange"
        />

        {/* Treatments grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {treatments.map((treatment, index) => (
            <EnhancedTreatmentCard
              key={index}
              treatment={treatment}
              index={index}
            />
          ))}
        </div>

        {/* View all button with arrow - using orange */}
        <div className="mt-16 flex justify-center">
          <AnimatedButton
            href="/treatments"
            variant="primaty"
            size="md"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
          >
            View All Treatments
          </AnimatedButton>
        </div>

        {/* Annotation */}
        <motion.div
          className="absolute -top--11 left-[30%] hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.p
              className="absolute -top-12 left-[10%] text-primary font-handwritten text-lg transform rotate-3"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Discover our specialized treatments!{" "}
            </motion.p>

            {/* Modified SVG with translated position */}
            <motion.svg
              width="120"
              height="60"
              viewBox="0 0 120 60"
              className="fill-none stroke-primary transform translate-x-20"
            >
              <motion.path
                d="M10,30 Q80,50 100,30"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
              />
              <motion.path
                d="M95,30 L105,25 L100,35"
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
      </div>
    </section>
  );
};

// Individual treatment card with 3D tilt effect
const EnhancedTreatmentCard = ({ treatment, index }) => {
  const [tiltValues, setTiltValues] = React.useState({ tiltX: 0, tiltY: 0 });
  const cardRef = React.useRef(null);

  // Handle mousemove for 3D tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the card
    const y = e.clientY - rect.top; // y position within the card

    // Calculate tilt values (maximum tilt of 10 degrees)
    const tiltX = (y / rect.height - 0.5) * 10;
    const tiltY = -(x / rect.width - 0.5) * 10;

    setTiltValues({ tiltX, tiltY });
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    setTiltValues({ tiltX: 0, tiltY: 0 });
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-2xl overflow-hidden shadow-md group cursor-pointer"
      style={{
        perspective: "1000px",
        transform: `perspective(1000px) rotateX(${tiltValues.tiltX}deg) rotateY(${tiltValues.tiltY}deg) scale3d(1, 1, 1)`,
        transition: "transform 0.2s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="relative h-56 w-full overflow-hidden">
        {/* Index number */}
        <div className="absolute top-0 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-b-lg z-10 shadow-sm">
          <span className="text-xs text-slate-500 font-medium">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent to-${treatment.color}/70 z-10 opacity-80`}
        ></div>

        {/* Image */}
        <Image
          src={treatment.image}
          alt={treatment.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Treatment title overlay */}
        <div className="absolute bottom-0 left-0 p-4 z-20">
          <h3 className="text-white font-bold text-xl mb-1 drop-shadow-sm">
            {treatment.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-slate-600 text-sm mb-6">{treatment.description}</p>

        <AnimatedButton
          href={treatment.link}
          variant="outline"
          color={treatment.color === "primary" ? "primary" : "accent"}
          size="sm"
          icon={
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
          }
        >
          Learn more
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

export default FeaturedTreatments;
