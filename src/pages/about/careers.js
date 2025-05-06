// src/pages/about/careers.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
const openPositions = [
  {
    title: "Homeopathic Physician",
    type: "Full-time",
    location: "Chennai, India",
    description:
      "We're seeking an experienced homeopathic physician to join our clinical team. The ideal candidate will have expertise in treating chronic conditions and a passion for patient-centered care.",
    requirements: [
      "BHMS degree required, MD in Homeopathy preferred",
      "Minimum 3 years of clinical experience",
      "Strong knowledge of classical homeopathy",
      "Excellent patient communication skills",
      "Fluency in English and Tamil",
    ],
    responsibilities: [
      "Provide patient consultations and follow-ups",
      "Develop personalized treatment plans",
      "Maintain detailed patient records",
      "Collaborate with our multidisciplinary team",
      "Participate in research initiatives",
    ],
  },
  {
    title: "Patient Care Coordinator",
    type: "Full-time",
    location: "Chennai, India",
    description:
      "Join our team as a Patient Care Coordinator to ensure smooth patient experiences from initial contact through treatment completion.",
    requirements: [
      "Bachelor's degree in healthcare or related field",
      "1-2 years experience in patient coordination",
      "Excellent organizational and interpersonal skills",
      "Proficiency in healthcare management software",
      "Compassionate and detail-oriented mindset",
    ],
    responsibilities: [
      "Schedule and coordinate patient appointments",
      "Assist patients with paperwork and insurance processes",
      "Liaise between patients and medical staff",
      "Manage patient inquiries and follow-ups",
      "Maintain patient records and confidentiality",
    ],
  },
  {
    title: "Homeopathic Research Assistant",
    type: "Part-time",
    location: "Remote / Chennai",
    description:
      "Support our ongoing research initiatives to document and validate homeopathic treatment outcomes.",
    requirements: [
      "Background in homeopathy or medical research",
      "Strong analytical and data management skills",
      "Experience with research methodologies",
      "Excellent writing and documentation abilities",
      "Attention to detail and scientific integrity",
    ],
    responsibilities: [
      "Assist in designing research protocols",
      "Collect and analyze treatment outcome data",
      "Conduct literature reviews on homeopathic research",
      "Help prepare reports and publications",
      "Support documentation of case studies",
    ],
  },
];

const JobCard = ({ job, onApply }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
            <div className="flex items-center space-x-4 mt-1">
              <span className="text-gray-600 text-sm flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                {job.type}
              </span>
              <span className="text-gray-600 text-sm flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {job.location}
              </span>
            </div>
          </div>
          <motion.button
            className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onApply(job)}
          >
            Apply Now
          </motion.button>
        </div>

        <p className="text-gray-600 mt-4">{job.description}</p>

        <button
          className="mt-4 text-primary font-medium flex items-center text-sm"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ml-1 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {expanded && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Requirements</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Responsibilities</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ApplicationForm = ({ job, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    emailjs.init("yfO-8t4GWAqHGIiED"); // Your EmailJS public key
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError("");

    try {
      // Get resume file data
      const fileInput = document.getElementById("resume");
      const resumeFile = fileInput.files[0];

      if (resumeFile && resumeFile.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB limit. Please select a smaller file.");
        setIsSubmitting(false);
        return;
      }

      // Format the application details for the email
      let applicationDetails = `
Position Applied For: ${job.title}
Applicant Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Resume Filename: ${resumeFile ? resumeFile.name : "No file attached"}
`;

      if (data.coverLetter) {
        applicationDetails += `
Cover Letter:
${data.coverLetter}
`;
      }

      // Create template parameters for EmailJS
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        phone: data.phone,
        position: job.title,
        message: applicationDetails,
        subject: `Job Application: ${job.title} - ${data.firstName} ${data.lastName}`,
      };

      // Use EmailJS to send the email
      const response = await emailjs.send(
        "service_60h1gve", // Your EmailJS service ID
        "template_8n5y70q", // Your EmailJS template ID
        templateParams,
        "yfO-8t4GWAqHGIiED" // Your EmailJS public key
      );

      if (response.status === 200) {
        // Now handle resume file by creating a secondary email with attachment information
        // Note: Due to EmailJS limitations, you might want to set up a server endpoint
        // for actual file handling, but this approach notifies Dr. Selvan about the application

        setIsSubmitting(false);
        setSubmitted(true);

        // Reset form after showing success message
        setTimeout(() => {
          // Reset form state is handled by the modal close action
        }, 3000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setIsSubmitting(false);
      setError(
        "There was an error sending your application. Please try again or contact us directly."
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Apply for {job.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
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
          </div>

          {submitted ? (
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for applying to Dr. Selvan's Homeopathy. We'll review
                your application and contact you soon.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className={`w-full px-3 py-2 border ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-primary focus:border-primary`}
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className={`w-full px-3 py-2 border ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-primary focus:border-primary`}
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-3 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-primary focus:border-primary`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
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
                    className={`w-full px-3 py-2 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-primary focus:border-primary`}
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Resume/CV *
                </label>
                <div
                  className={`w-full px-3 py-6 border ${
                    errors.resume ? "border-red-500" : "border-gray-300"
                  } border-dashed rounded-md focus:outline-none focus:ring-primary focus:border-primary text-center`}
                >
                  <input
                    type="file"
                    id="resume"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    {...register("resume", { required: "Resume is required" })}
                    onChange={(e) => setFileSelected(e.target.files.length > 0)}
                  />
                  <label htmlFor="resume" className="cursor-pointer">
                    {fileSelected ? (
                      <span className="text-primary font-medium">
                        File selected
                      </span>
                    ) : (
                      <>
                        <span className="text-gray-500">
                          Drag and drop your resume here, or{" "}
                        </span>
                        <span className="text-primary font-medium">
                          browse files
                        </span>
                      </>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Supported formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </label>
                </div>
                {errors.resume && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.resume.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Tell us why you're interested in this position and what makes you a good fit..."
                  {...register("coverLetter")}
                ></textarea>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
                  {error}
                </div>
              )}

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition flex items-center"
                  disabled={isSubmitting}
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
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const closeApplicationForm = () => {
    setSelectedJob(null);
  };

  return (
    <Layout title="Careers | Dr. Selvan's Homeopathy">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Careers @ <span className="text-accent">Dr. Selvan's</span>
            </h1>
            <p className="text-lg text-gray-600 italic">
              "Join our mission of natural healing excellence"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Dr. Selvan's Homeopathy, we're looking for passionate
              individuals who share our commitment to natural healing and
              patient-centered care. Explore our current openings and become
              part of our growing team of healthcare professionals.
            </p>
          </motion.div>

          <div className="mb-12 bg-blue-50 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Innovative Environment
                </h3>
                <p className="text-gray-600">
                  Join a forward-thinking team that combines traditional
                  homeopathic wisdom with modern healthcare approaches.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Professional Growth
                </h3>
                <p className="text-gray-600">
                  We invest in your development with continuous education,
                  mentorship, and opportunities for advancement.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Competitive Benefits
                </h3>
                <p className="text-gray-600">
                  Enjoy competitive compensation, health benefits, and a
                  supportive work-life balance.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Current <span className="text-accent">Openings</span>
            </h2>
            <div className="space-y-6">
              {openPositions.map((job, index) => (
                <JobCard key={index} job={job} onApply={handleApply} />
              ))}
            </div>
          </div>
        </section>

        {/* General Applications Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Don't See a Perfect Match?
                </h2>
                <p className="text-gray-600">
                  We're always interested in connecting with talented
                  individuals passionate about homeopathy. Submit your resume
                  for future opportunities.
                </p>
              </div>
              <motion.button
                className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-dark transition flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleApply({ title: "General Application" })}
              >
                Submit General Application
                <svg
                  className="ml-2 h-5 w-5"
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
        </section>

        {/* Working at Dr. Selvan's */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Life at <span className="text-accent">Dr. Selvan's Homeopathy</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Culture
              </h3>
              <p className="text-gray-600 mb-4">
                At Dr. Selvan's Homeopathy, we foster a collaborative
                environment where every team member is valued and empowered to
                contribute to our mission of holistic healing. We embrace
                diversity, continuous learning, and work together to provide
                exceptional patient care.
              </p>
              <p className="text-gray-600">
                Our team members enjoy regular knowledge-sharing sessions,
                team-building activities, and opportunities to participate in
                community outreach programs through the Dr. Selvan Foundation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform -translate-y-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Employee Testimonials
              </h3>
              <blockquote className="italic text-gray-600 mb-8 border-l-4 border-primary pl-4 py-2">
                "Working at Dr. Selvan's Homeopathy has been a fulfilling
                experience. I've grown professionally while being part of a team
                that truly makes a difference in patients' lives through natural
                healing approaches."
                <footer className="mt-3 text-gray-500 not-italic font-medium">
                  — Dr. Meena R., Homeopathic Physician
                </footer>
              </blockquote>
              <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 py-2">
                "The supportive environment and focus on continuous learning
                make this an ideal place to develop your career in holistic
                healthcare. Every day brings new opportunities to learn and
                grow."
                <footer className="mt-3 text-gray-500 not-italic font-medium">
                  — Arun K., Patient Care Coordinator
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </div>

      {/* Application Form Modal */}
      {selectedJob && (
        <ApplicationForm job={selectedJob} onClose={closeApplicationForm} />
      )}
    </Layout>
  );
};

export default Careers;
