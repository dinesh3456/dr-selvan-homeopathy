// src/pages/palliative-care.js
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Layout from "../components/layout/Layout";
import AppointmentButton from "../components/common/AppointmentButton";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import BlobShape from "../components/ui/BlobShape";
import emailjs from "@emailjs/browser";

const PalliativeCarePage = () => {
  const [showHomeForm, setShowHomeForm] = useState(false);
  const [activeTab, setActiveTab] = useState("attendant");
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    condition: "",
    services: "",
    urgency: "routine",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("yfO-8t4GWAqHGIiED");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Create template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email || "No email provided",
        phone: formData.phone,
        address: formData.address,
        condition: formData.condition,
        services: formData.services || "Not specified",
        urgency: formData.urgency,
        message: `Service: ${formData.services}, Urgency: ${formData.urgency}, Condition: ${formData.condition}`,
      };

      // Use EmailJS to send the email - using the same service and template IDs as in AppointmentForm
      const response = await emailjs.send(
        "service_60h1gve",
        "template_8n5y70q",
        templateParams,
        "yfO-8t4GWAqHGIiED"
      );

      if (response.status === 200) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            name: "",
            phone: "",
            email: "",
            address: "",
            condition: "",
            services: "",
            urgency: "routine",
          });
        }, 3000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      setError(
        "There was an error sending your request. Please try again or contact us directly."
      );
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  const tabVariants = {
    inactive: { opacity: 0.7, y: 0 },
    active: {
      opacity: 1,
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    hover: {
      opacity: 0.9,
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  // Palliative care feature cards
  const features = [
    {
      title: "Symptom Management",
      description:
        "Natural relief from pain, nausea, anxiety, and other symptoms with homeopathic remedies that work alongside conventional treatments.",
      icon: (
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
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      title: "Holistic Approach",
      description:
        "Addressing physical, emotional, psychological, and spiritual needs of both patients and families through integrated care.",
      icon: (
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Quality of Life",
      description:
        "Enhancing comfort and dignity through gentle, non-invasive treatments that improve daily functioning and overall wellbeing.",
      icon: (
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Family Support",
      description:
        "Providing guidance and care for family members to help them better support their loved ones through serious illnesses.",
      icon: (
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  // Services list
  const services = [
    {
      title: "Personalized Care Plans",
      description: "Custom homeopathic treatment plans for individual needs",
      icon: (
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      title: "Home Consultations",
      description: "Homeopathic care in the comfort of your own home",
      icon: (
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "Pain Management",
      description: "Natural approaches to reduce dependence on pain medication",
      icon: (
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Emotional Support",
      description: "Holistic care for emotional wellbeing during illness",
      icon: (
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
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Family Education",
      description: "Training for family members on supportive care techniques",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
    {
      title: "Coordination With Medical Teams",
      description:
        "Complementary care that works with existing medical treatments",
      icon: (
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
  ];

  // Specialized care services sections
  const specializedServices = [
    {
      id: "attendant",
      title: "Attendant Care Services",
      description:
        "Our compassionate attendants provide essential day-to-day support for patients in the comfort of their homes, ensuring they maintain dignity while receiving the care they need.",
      features: [
        "Personal hygiene assistance",
        "Medication reminders",
        "Mobility support",
        "Meal preparation",
        "Companionship and emotional support",
        "Light housekeeping",
      ],
      image: "/images/attendant-care.jpg",
    },
    {
      id: "nursing",
      title: "Nursing Care",
      description:
        "Our skilled nursing team delivers professional medical care to patients in their homes, working alongside our homeopathic treatments to ensure comprehensive healthcare management.",
      features: [
        "Vital signs monitoring",
        "Wound care and dressing changes",
        "Medication administration",
        "IV therapy management",
        "Catheter and tube care",
        "Post-surgical recovery support",
      ],
      image: "/images/nursing-care.jpg",
    },
    {
      id: "elderly",
      title: "Elderly Care",
      description:
        "Specialized care for seniors that combines homeopathic approaches with traditional caregiving, designed to enhance quality of life and maintain independence for as long as possible.",
      features: [
        "Fall prevention strategies",
        "Gentle homeopathic remedies for age-related issues",
        "Cognitive engagement activities",
        "Assistance with daily living activities",
        "Nutritional guidance for seniors",
        "Regular health assessments",
      ],
      image: "/images/elderly-care.jpg",
    },
    {
      id: "icu",
      title: "ICU at Home",
      description:
        "Advanced critical care services in a home setting, integrating homeopathic supportive treatments with conventional ICU protocols for patients who need intensive monitoring.",
      features: [
        "24/7 monitoring by qualified professionals",
        "Advanced life support equipment",
        "Ventilator management",
        "Complementary homeopathic therapies",
        "Coordination with hospital specialists",
        "Family training for emergency situations",
      ],
      image: "/images/icu-at-home.jpg",
    },
  ];

  const advisoryPanel = [
    {
      name: "Dr. Selvan S.",
      qualification: "BHMS, MD",
      specialty: "Homeopathic Medicine",
    },
    {
      name: "Dr. Aaquib Khan",
      qualification: "MBBS, DCH",
      specialty: "Pediatrician",
    },
    {
      name: "Dr. Kavita Shirkende",
      qualification: "MBBS, DNB, DGO",
      specialty: "Gynecologist",
    },
    {
      name: "Dr. Uddhaos Zembare",
      qualification: "MBBS, DNB, MD",
      specialty: "Dermatologist",
    },
    {
      name: "Dr. Maya Shankar Vishwakarma",
      qualification: "MBBS, MS",
      specialty: "ENT",
    },
    {
      name: "Dr. Ashvini Kumar Pound",
      qualification: "MBBS, MS",
      specialty: "Ophthalmologist",
    },
    {
      name: "Dr. Dinesh Vikram Chandra",
      qualification: "MBBS, MD",
      specialty: "Psychiatrist",
    },
    {
      name: "Dr. Abinaya Kamaraj",
      qualification: "BHMS, MD",
      specialty: "Medicine",
    },
    {
      name: "Dr. P.T. Poovai",
      qualification: "BHMS, MD",
      specialty: "Psychiatrist",
    },
  ];

  // HomeCareForm component to be added to the PalliativeCarePage component
  const HomeCareForm = ({ setShowHomeForm }) => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      address: "",
      condition: "",
      services: "",
      urgency: "routine",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError("");

      try {
        // Create template parameters for EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email || "No email provided",
          phone: formData.phone,
          address: formData.address,
          condition: formData.condition,
          services: formData.services || "Not specified",
          urgency: formData.urgency,
          message: `Service: ${formData.services}, Urgency: ${formData.urgency}, Condition: ${formData.condition}`,
        };

        // Use EmailJS to send the email - using the same service and template IDs as in AppointmentForm
        const response = await emailjs.send(
          "service_60h1gve",
          "template_8n5y70q",
          templateParams,
          "yfO-8t4GWAqHGIiED"
        );

        if (response.status === 200) {
          setIsSubmitting(false);
          setIsSubmitted(true);

          // Reset form after showing success message
          setTimeout(() => {
            setFormData({
              name: "",
              phone: "",
              email: "",
              address: "",
              condition: "",
              services: "",
              urgency: "routine",
            });

            // Close modal after a delay
            setTimeout(() => {
              setShowHomeForm(false);
            }, 1000);
          }, 3000);
        } else {
          throw new Error("Failed to send email");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setIsSubmitting(false);
        setError(
          "There was an error sending your request. Please try again or contact us directly."
        );
      }
    };

    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowHomeForm(false)}
      >
        <motion.div
          className="bg-white rounded-xl shadow-xl max-w-3xl w-full overflow-hidden relative"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 focus:outline-none z-10"
            onClick={() => setShowHomeForm(false)}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Form header with gradient background */}
          <div className="p-6 bg-gradient-to-r from-primary to-accent text-white">
            <h2 className="text-2xl font-bold">Request Home Care Services</h2>
            <p className="mt-2 text-white/90">
              Fill out this form to request our specialized home care services
              for yourself or a loved one.
            </p>
          </div>

          {/* Form content */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your home care request has been submitted. Our team will
                  contact you shortly to discuss your needs and arrange
                  services.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                    {error}
                  </div>
                )}

                {/* Personal Information */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your email (optional)"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Home Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your address"
                    />
                  </div>
                </div>

                {/* Service Information */}
                <div className="mt-6 mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Service Information
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor="services"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Type of Service Needed *
                    </label>
                    <select
                      id="services"
                      name="services"
                      required
                      value={formData.services}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="attendant">Attendant Care Services</option>
                      <option value="nursing">Nursing Care</option>
                      <option value="elderly">Elderly Care</option>
                      <option value="icu">ICU at Home</option>
                      <option value="other">
                        Other (Please specify in notes)
                      </option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="urgency"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Urgency *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-blue-50 transition">
                        <input
                          type="radio"
                          name="urgency"
                          value="urgent"
                          checked={formData.urgency === "urgent"}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">
                          Urgent (24-48 hours)
                        </span>
                      </label>
                      <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-blue-50 transition">
                        <input
                          type="radio"
                          name="urgency"
                          value="soon"
                          checked={formData.urgency === "soon"}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">
                          Soon (This week)
                        </span>
                      </label>
                      <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-blue-50 transition">
                        <input
                          type="radio"
                          name="urgency"
                          value="routine"
                          checked={formData.urgency === "routine"}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">
                          Routine (Planning ahead)
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="condition"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Health Condition / Needs *
                    </label>
                    <textarea
                      id="condition"
                      name="condition"
                      rows="4"
                      required
                      value={formData.condition}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Please describe the health condition and specific needs..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-6 bg-accent text-white rounded-md font-medium hover:bg-accent-dark transition flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Home Care Request
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2"
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
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="text-sm text-gray-500 text-center mt-4">
                  We respect your privacy. Your information will only be used to
                  process your request.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <Layout title="Palliative Care | Dr. Selvan's Homeopathy">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Palliative <span className="text-accent">Care</span> Services
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Enhancing quality of life for patients with serious illnesses
              through gentle, natural approaches"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* I Need Home Care Button */}
        <div className="flex justify-center mb-12">
          <motion.button
            className="bg-accent text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:bg-accent-dark transition flex items-center space-x-2"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(255, 107, 53, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowHomeForm(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            I Need Home Care
          </motion.button>
        </div>

        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-lg h-80 md:h-96"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/palliative-care.jpg"
                alt="Compassionate palliative care"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Compassionate Care</h3>
                <p className="text-sm opacity-90">
                  Supporting patients and families through every step of the
                  journey
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is <span className="text-accent">Homeopathic</span>{" "}
                Palliative Care?
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Homeopathic palliative care is a gentle, natural approach to
                supporting patients with serious or life-limiting illnesses. Our
                services integrate homeopathic remedies with conventional
                treatments to provide comprehensive support for managing
                symptoms, reducing side effects, and improving overall quality
                of life.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Unlike conventional palliative care that often relies heavily on
                medications with significant side effects, our approach focuses
                on stimulating the body's natural healing processes through
                carefully selected homeopathic remedies. This allows for
                effective symptom management without the drowsiness, mental
                fogging, or other side effects common with conventional
                approaches.
              </p>
              <div className="flex flex-wrap gap-4">
                <AppointmentButton
                  text="Schedule a Consultation"
                  variant="primary"
                  size="md"
                />
                <motion.button
                  className="px-6 py-3 bg-white border border-primary text-primary rounded-full font-medium hover:bg-blue-50 transition flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById("learn-more");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
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
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="mb-16" id="learn-more">
          <SectionTitle
            pretitle="Key Benefits"
            title={
              <>
                Our <span className="text-primary">Palliative</span> Care{" "}
                <span className="text-accent">Approach</span>
              </>
            }
            subtitle="Enhancing quality of life for patients with serious illnesses through natural homeopathic approaches that complement conventional care."
            alignment="center"
            withLine={true}
            lineColor="gradient-blue-orange"
          />

          {/* Main content with cards layout */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-primary"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits in numbers */}
          <div className="mt-12 bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              The Benefits of Our Approach
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">75%</div>
                <p className="text-gray-700">Reduction in pain symptoms</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">80%</div>
                <p className="text-gray-700">Improved sleep quality</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">65%</div>
                <p className="text-gray-700">Reduced anxiety levels</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">90%</div>
                <p className="text-gray-700">Patient satisfaction rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="mb-16">
          <SectionTitle
            pretitle="Our Services"
            title={
              <>
                Comprehensive <span className="text-primary">Palliative</span>{" "}
                Care <span className="text-accent">Services</span>
              </>
            }
            subtitle="We offer a range of services designed to support patients with serious illnesses and their families."
            alignment="center"
            withLine={true}
            lineColor="primary"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Specialized Care Services Section */}
        <section className="mb-16">
          <SectionTitle
            pretitle="Specialized Care"
            title={
              <>
                Home-Based <span className="text-primary">Specialized</span>{" "}
                Care <span className="text-accent">Services</span>
              </>
            }
            subtitle="Our team provides specialized care services tailored to each patient's unique needs in the comfort of their own home."
            alignment="center"
            withLine={true}
            lineColor="accent"
          />

          <div className="mt-12">
            {/* Tab navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
              {specializedServices.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === service.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  variants={tabVariants}
                  initial="inactive"
                  animate={activeTab === service.id ? "active" : "inactive"}
                  whileHover="hover"
                >
                  {service.title}
                </motion.button>
              ))}
            </div>

            {/* Tab content with animations */}
            <AnimatePresence mode="wait">
              {specializedServices
                .filter((service) => service.id === activeTab)
                .map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5 relative h-64 md:h-auto">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white md:hidden">
                          <h3 className="text-xl font-bold">{service.title}</h3>
                        </div>
                      </div>
                      <div className="p-6 md:w-3/5">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 hidden md:block">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 mb-6">
                          {service.description}
                        </p>
                        <h4 className="font-bold text-gray-900 mb-3">
                          Key Services Include:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <span className="text-primary mr-2">•</span>
                              <span className="text-gray-600">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <motion.button
                            className="px-6 py-2 bg-accent text-white rounded-full font-medium hover:bg-accent-dark transition flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                services: service.id,
                              }));
                              setShowHomeForm(true);
                            }}
                          >
                            Request This Service
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 ml-2"
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
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Advisory Panel Section */}
        <section className="mb-16">
          <SectionTitle
            pretitle="Our Team"
            title={
              <>
                <span className="text-primary">Palliative</span> Care{" "}
                <span className="text-accent">Advisory </span> Panel
              </>
            }
            subtitle="Our experienced team of specialists ensures the highest quality of care for our palliative patients."
            alignment="center"
            withLine={true}
            lineColor="primary"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryPanel.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* No image */}

                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-700 text-sm">
                  {member.qualification}{" "}
                  <span className="text-primary">({member.specialty})</span>
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* When to Consider Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8">
            <div className="md:flex gap-8 items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent mb-4 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  When to Consider Our Care
                </h3>
                <p className="text-gray-700">
                  Our palliative care services can benefit patients at any stage
                  of a serious illness, not just at end of life.
                </p>
              </div>

              <div className="md:w-2/3">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Consider our care if you or a loved one is experiencing:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Chronic pain that's difficult to manage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Side effects from conventional treatments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Cancer and related symptoms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Neurological conditions</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Respiratory difficulties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>
                          Digestive issues caused by illness/treatment
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Anxiety, depression, or trouble sleeping</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Need for family support and education</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <SectionTitle
            pretitle="Patient Stories"
            title={
              <>
                What our <span className="text-primary">Patients</span> Say{" "}
              </>
            }
            alignment="center"
            withLine={true}
            lineColor="accent"
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4 flex-grow">
                  "Dr. Selvan's homeopathic approach to palliative care has made
                  a world of difference for my father. His pain is much better
                  managed, and he's more alert than he was on conventional
                  medications. The home care service has been a blessing for our
                  entire family."
                </blockquote>
                <p className="text-right text-gray-500 font-medium">
                  — Priya R., Daughter of Patient
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4 flex-grow">
                  "After struggling with the side effects of my cancer
                  treatment, I turned to Dr. Selvan's palliative care services.
                  The homeopathic remedies have significantly reduced my nausea
                  and improved my sleep. I'm so grateful for this natural
                  approach to managing my symptoms."
                </blockquote>
                <p className="text-right text-gray-500 font-medium">
                  — Rajan M., Cancer Patient
                </p>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience Compassionate Care?
              </h3>
              <p className="text-gray-700 mb-8">
                Our specialized homeopathic palliative care services can help
                improve quality of life for you or your loved one. Contact us
                today to learn more or schedule a consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <AppointmentButton
                  text="Schedule a Consultation"
                  variant="primary"
                  size="lg"
                />
                <motion.button
                  className="px-8 py-4 bg-accent text-white text-lg font-medium rounded-full hover:bg-accent-dark transition flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowHomeForm(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Request Home Care
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Home Care Form */}
      <AnimatePresence>
        {showHomeForm && <HomeCareForm setShowHomeForm={setShowHomeForm} />}
      </AnimatePresence>
    </Layout>
  );
};

export default PalliativeCarePage;
