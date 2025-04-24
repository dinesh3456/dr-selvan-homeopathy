// src/components/home/AppointmentForm.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import emailjs from '@emailjs/browser';

const AppointmentForm = () => {
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
        message: formData.message || "No additional message provided"
      };

      // Use EmailJS to send the email
      const response = await emailjs.send(
        "service_60h1gve", 
        "template_8n5y70q", 
        templateParams,
        "yfO-8t4GWAqHGIiED" 
      );

      if (response.status === 200) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds of showing success message
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            treatment: "",
            location: "",
            message: "",
          });
        }, 3000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      setError("There was an error sending your request. Please try again or contact us directly.");
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
*Location:* ${formData.location}
*Message:* ${formData.message || "No additional message"}
------------------------
_Sent from Dr. Selvan's Homeopathy website_
      `;

      const whatsappNumber = "+917208719646"; 
      
      // Create WhatsApp link with API endpoint
      // This works better across devices than the web API
      const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappLink, "_blank");

      // Set submitted since we opened WhatsApp
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          treatment: "",
          location: "India",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      setIsSubmitting(false);
      setError("There was an error connecting to WhatsApp. Please try again or contact us directly.");
    }
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

  const handleSubmit = submitMethod === "whatsapp" ? handleWhatsAppSubmit : handleEmailSubmit;

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
                Schedule Your Consultation
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
                className="absolute -top--11 left-[39%] hidden md:block"
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
              {isSubmitted ? (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
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
                    Your appointment request has been submitted. We'll get in touch with you shortly to confirm your appointment details.
                  </p>
                  <Link
                    href="/contact"
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    Contact us for any questions
                  </Link>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  {/* Submit Method Selection */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Choose how to submit your request:</p>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => handleSubmitMethod("email")}
                        className={`flex-1 py-2 px-4 rounded-md border ${submitMethod === "email" 
                          ? "bg-blue-50 border-blue-300 text-blue-600" 
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                      >
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                          Email
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSubmitMethod("whatsapp")}
                        className={`flex-1 py-2 px-4 rounded-md border ${submitMethod === "whatsapp" 
                          ? "bg-green-50 border-green-300 text-green-600" 
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                      >
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          WhatsApp
                        </span>
                      </button>
                    </div>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                      {error}
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit}>
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
                          placeholder="Name"
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
                          placeholder="Email"
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
                          placeholder="Phone Number"
                        />
                      </div>

                     

                      <div className="col-span-2 md:col-span-1">
  <label
    htmlFor="location"
    className="block text-sm font-medium text-gray-700 mb-1"
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
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
  />
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
                      className={`w-full py-3 px-6 rounded-md flex items-center justify-center text-white font-medium transition ${
                        submitMethod === "whatsapp" 
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <span>Request Appointment {submitMethod === "whatsapp" ? "via WhatsApp" : "via Email"}</span>
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
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentForm;