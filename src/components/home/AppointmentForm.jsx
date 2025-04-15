// components/home/AppointmentForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    location: "India",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - would integrate with backend API
    console.log(formData);
    alert("Thank you! Your appointment request has been submitted.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      treatment: "",
      location: "India",
      message: "",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-sand/50 to-white z-0"></div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary opacity-5 -z-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary opacity-10 -z-10"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3"
              variants={itemVariants}
            >
              GET IN TOUCH
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              variants={itemVariants}
            >
              Schedule Your Consultation
            </motion.h2>

            <motion.p
              className="text-lg text-slate-600 mb-8"
              variants={itemVariants}
            >
              Take the first step towards natural healing. Fill out the form to
              request an appointment with Dr. Selvan.
            </motion.p>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg mb-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Thorough consultation to understand your health condition
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Personalized treatment plan based on your symptoms
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Natural remedies with no side effects</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Follow-up consultations to monitor your progress</span>
                </li>
              </ul>
            </motion.div>

            {/* Arrow annotation */}
            <motion.div
              className="relative mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div className="absolute -top-16 left-0 text-primary font-handwritten text-lg transform -rotate-6">
                  <motion.span
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    We're just one message away from helping you feel better!
                  </motion.span>
                </motion.div>
                <motion.svg
                  width="180"
                  height="80"
                  viewBox="0 0 180 80"
                  className="fill-none stroke-primary"
                >
                  <motion.path
                    d="M160,15 Q120,40 80,30 Q40,20 20,40"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                  />
                  <motion.path
                    d="M25,35 L15,45 L10,30"
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="col-span-2 md:col-span-1">
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
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
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
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="treatment"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Treatment Type
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select a treatment</option>
                      <option value="chronic">Chronic Disease</option>
                      <option value="skin">Skin Disorder</option>
                      <option value="digestive">Digestive Health</option>
                      <option value="allergy">Allergies</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Location *
                    </label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="location"
                          value="India"
                          checked={formData.location === "India"}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        />
                        <span className="ml-2">India (Chennai)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="location"
                          value="UAE"
                          checked={formData.location === "UAE"}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        />
                        <span className="ml-2">UAE (Dubai)</span>
                      </label>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Brief Description of Your Condition
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition flex items-center justify-center"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Request Appointment</span>
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
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
