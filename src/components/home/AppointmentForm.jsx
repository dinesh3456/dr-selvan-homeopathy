import React, { useState } from "react";
import { motion } from "framer-motion";

const AppointmentFormLight = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3"
                variants={itemVariants}
              >
                GET IN TOUCH
              </motion.span>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                variants={itemVariants}
              >
                <span className="text-primary">Schedule Your</span>{" "}
                <span className="text-accent">Consultation</span>
              </motion.h2>

              <motion.p
                className="text-lg text-slate-600 mb-8"
                variants={itemVariants}
              >
                Take the first step towards natural healing. Fill out the form
                to request an appointment with Dr. Selvan.
              </motion.p>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-blue-600"
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
                    <span className="text-gray-700">
                      Thorough consultation to understand your health condition
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-blue-600"
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
                    <span className="text-gray-700">
                      Personalized treatment plan based on your symptoms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-blue-600"
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
                    <span className="text-gray-700">
                      Natural remedies with no side effects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-blue-600"
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
                    <span className="text-gray-700">
                      Follow-up consultations to monitor your progress
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Arrow annotation */}
              <motion.div
                className="absolute -top--11 left-[45%] hidden md:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.p
                    className="absolute -top-12 left--[10%] text-primary font-handwritten text-lg transform rotate-3"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-gray-700">
                            India (Chennai)
                          </span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="location"
                            value="UAE"
                            checked={formData.location === "UAE"}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-gray-700">
                            UAE (Dubai)
                          </span>
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
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
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentFormLight;
