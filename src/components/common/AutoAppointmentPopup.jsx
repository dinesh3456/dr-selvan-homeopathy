// src/components/common/AutoAppointmentPopup.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const AutoAppointmentPopup = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMethod, setSubmitMethod] = useState("email"); // 'email' or 'whatsapp'
  const [error, setError] = useState("");

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("yfO-8t4GWAqHGIiED");
  }, []);

  // Close popup when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [onClose]);

  // Reset form state when popup opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setError("");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitMethod = (method) => {
    setSubmitMethod(method);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Create template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        treatment: formData.treatment || "Not specified",
        location: formData.location,
        message: formData.message || "No additional message provided",
      };

      // Use EmailJS to send the email
      const response = await emailjs.send(
        "service_60h1gve",
        "template_8n5y70q",
        templateParams,
        "yfO-8t4GWAqHGIiED" // Your EmailJS public key
      );

      if (response.status === 200) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            treatment: "",
            location: "India",
            message: "",
          });

          // Close popup
          onClose();
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

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Format the message for WhatsApp
      const message = `
*New Appointment Request*
------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Treatment:* ${formData.treatment || "Not specified"}
*Location:* ${formData.location}
*Message:* ${formData.message || "No additional message"}
------------------------
_Sent from Dr. Selvan's Homeopathy website_
      `;

      // WhatsApp business number
      const whatsappNumber = "+917208719646";

      // Create WhatsApp link with API endpoint
      const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
        message
      )}`;

      // Open WhatsApp in a new tab
      window.open(whatsappLink, "_blank");

      // Set submitted since we opened WhatsApp
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          treatment: "",
          location: "India",
          message: "",
        });

        // Close popup
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      setIsSubmitting(false);
      setError(
        "There was an error connecting to WhatsApp. Please try again or contact us directly."
      );
    }
  };

  const handleSubmit =
    submitMethod === "whatsapp" ? handleWhatsAppSubmit : handleEmailSubmit;

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const popupVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.3,
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-lg bg-white rounded-xl shadow-xl overflow-hidden"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Universal close button that works on all screen sizes */}
            <button
              className="absolute top-3 right-3 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition z-10"
              onClick={onClose}
              aria-label="Close popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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

            {/* Content container with better padding for mobile */}
            <div className="p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-4 sm:mb-6">
                    <motion.span
                      className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-2 sm:mb-3"
                      variants={formItemVariants}
                      custom={0}
                      initial="hidden"
                      animate="visible"
                    >
                      Get Started
                    </motion.span>
                    <motion.h2
                      className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2"
                      variants={formItemVariants}
                      custom={1}
                      initial="hidden"
                      animate="visible"
                    >
                      Book Your Appointment
                    </motion.h2>
                    <motion.p
                      className="text-sm sm:text-base text-gray-600"
                      variants={formItemVariants}
                      custom={2}
                      initial="hidden"
                      animate="visible"
                    >
                      Fill out the form below to schedule your consultation with
                      Dr. Selvan
                    </motion.p>
                  </div>

                  {/* Submit Method Selection - Responsive buttons */}
                  <motion.div
                    className="mb-4"
                    variants={formItemVariants}
                    custom={3}
                    initial="hidden"
                    animate="visible"
                  >
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Choose how to submit your request:
                    </p>
                    <div className="flex space-x-2 sm:space-x-4">
                      <button
                        type="button"
                        onClick={() => handleSubmitMethod("email")}
                        className={`flex-1 py-2 px-3 sm:px-4 rounded-md border text-xs sm:text-sm ${
                          submitMethod === "email"
                            ? "bg-blue-50 border-blue-300 text-blue-600"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span className="flex items-center justify-center">
                          <svg
                            className="w-4 h-4 mr-1 sm:mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                          Email
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSubmitMethod("whatsapp")}
                        className={`flex-1 py-2 px-3 sm:px-4 rounded-md border text-xs sm:text-sm ${
                          submitMethod === "whatsapp"
                            ? "bg-green-50 border-green-300 text-green-600"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span className="flex items-center justify-center">
                          <svg
                            className="w-4 h-4 mr-1 sm:mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          WhatsApp
                        </span>
                      </button>
                    </div>
                  </motion.div>

                  {error && (
                    <div className="mb-4 p-2 sm:p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-xs sm:text-sm">
                      {error}
                    </div>
                  )}

                  <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    variants={formItemVariants}
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    className="space-y-3 sm:space-y-4"
                  >
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
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
                        className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email and Phone - Stack on mobile, side by side on larger screens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
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
                          className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          placeholder="Your email"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
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
                          className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          placeholder="Your phone"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City"
                        className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                      >
                        Brief Description of Your Condition
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Please describe your condition briefly..."
                      ></textarea>
                    </div>

                    {/* Submit Button - Responsive sizing */}
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-md flex items-center justify-center text-white font-medium text-sm transition ${
                          submitMethod === "whatsapp"
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                            Book Now{" "}
                            {submitMethod === "whatsapp"
                              ? "via WhatsApp"
                              : "via Email"}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1 sm:ml-2"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                </>
              ) : (
                <motion.div
                  className="text-center py-4 sm:py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8 text-green-500"
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
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    Your appointment request has been submitted. We'll get in
                    touch with you shortly to confirm your appointment details.
                  </p>
                  <Link
                    href="/contact"
                    className="text-primary hover:text-primary-dark font-medium text-sm sm:text-base"
                  >
                    Contact us for any questions
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AutoAppointmentPopup;
