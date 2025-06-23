import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AppointmentButton from "../common/AppointmentButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer
      id="contact"
      className="bg-white text-gray-800 border-t border-gray-200"
    >
      {/* Orange accent border at top of footer */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-primary">Dr. Selvan's</span>
              <span className="text-accent"> Homeopathy</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Providing natural healing solutions and homeopathic treatments for
              over two decades.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/share/1CNgcKd3pE/"
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/drselvanmedictalks?igsh=MXNhcms3Z2Jxb2RnMA=="
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://youtube.com/@dr.selvanmedictalks?si=XREz3DFH5YkxClCB"
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/dr-selvan-prem-70126017b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Threads Link */}

              <a
                href="https://www.threads.net/@drselvanmedictalks"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Threads"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 50 50"
                  aria-hidden="true"
                >
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 25.197266 11 C 21.175771 11.03063 17.921696 12.404232 15.810547 15.089844 C 13.89599 17.523831 12.96586 20.882337 12.931641 24.982422 L 12.931641 24.990234 L 12.931641 24.998047 C 12.965851 29.118158 13.895484 32.477165 15.810547 34.912109 C 17.922655 37.596431 21.176137 38.96935 25.179688 39 L 25.1875 39 L 25.195312 39 C 28.748351 38.97377 31.450694 38.006097 33.544922 35.914062 C 36.201473 33.259766 36.203796 29.877541 35.291016 27.744141 L 35.291016 27.742188 C 34.743292 26.471756 33.762233 25.400445 32.492188 24.634766 C 32.227773 24.475031 31.514635 24.28877 31.167969 24.123047 C 31.169969 23.697531 31.219702 23.580672 31.164062 23.148438 C 31.005927 21.919581 30.635949 20.561968 29.701172 19.458984 C 28.766412 18.356072 27.253584 17.610589 25.234375 17.597656 L 25.230469 17.597656 L 25.226562 17.597656 C 23.124423 17.597656 21.280446 18.519137 20.183594 20.189453 L 21.855469 21.287109 C 22.598268 20.155956 23.66195 19.598179 25.224609 19.597656 C 26.793251 19.608656 27.607889 20.081872 28.175781 20.751953 C 28.744254 21.422719 29.051777 22.395152 29.181641 23.404297 C 29.182641 23.412297 29.180658 23.419614 29.181641 23.427734 C 28.281937 23.244519 27.343132 23.136719 26.365234 23.136719 C 26.039627 23.136719 25.710212 23.145816 25.373047 23.166016 C 23.462073 23.276328 22.044458 23.897125 21.136719 24.824219 C 20.228639 25.75166 19.875265 26.939342 19.931641 28.001953 C 19.998411 29.252438 20.624371 30.363243 21.572266 31.099609 C 22.520161 31.835976 23.769781 32.224609 25.148438 32.224609 C 25.276619 32.224609 25.403649 32.221944 25.53125 32.214844 C 27.156277 32.124974 28.577075 31.503299 29.546875 30.371094 C 30.440887 29.327368 30.905076 27.893035 31.095703 26.208984 C 31.176903 26.261484 31.346489 26.280874 31.457031 26.347656 L 31.458984 26.347656 C 32.414939 26.923977 33.086849 27.683635 33.453125 28.533203 C 34.069782 29.976014 34.189589 32.441063 32.130859 34.498047 C 30.406781 36.22032 28.402916 36.972864 25.1875 36.998047 C 21.619905 36.968847 19.093236 35.849593 17.382812 33.675781 C 15.829099 31.700282 14.966664 28.813636 14.933594 24.990234 C 14.966654 21.187515 15.829301 18.300519 17.382812 16.326172 L 17.382812 16.324219 C 19.092201 14.149691 21.617465 13.031165 25.205078 13.001953 C 28.790756 13.031153 31.365844 14.154443 33.140625 16.337891 C 33.994022 17.386988 34.660906 18.725217 35.105469 20.335938 L 37.033203 19.804688 C 36.527706 17.973483 35.749962 16.375074 34.693359 15.076172 C 32.517649 12.399475 29.232442 11.030635 25.212891 11 L 25.205078 11 L 25.197266 11 z M 26.365234 25.136719 C 27.309206 25.136719 28.197048 25.224199 28.992188 25.404297 L 28.994141 25.404297 C 29.133358 25.435727 29.061771 25.446809 29.179688 25.474609 C 29.178687 25.491019 29.179687 25.646484 29.179688 25.646484 L 29.179688 25.648438 C 29.051064 27.255066 28.628044 28.369019 28.027344 29.070312 C 27.426644 29.771608 26.635848 30.149663 25.421875 30.216797 C 25.331475 30.221797 25.240255 30.224609 25.148438 30.224609 C 24.147092 30.224609 23.338683 29.940868 22.798828 29.521484 C 22.258973 29.102101 21.965917 28.575 21.929688 27.896484 C 21.900067 27.338096 22.067486 26.732215 22.566406 26.222656 C 23.065327 25.713098 23.942296 25.253091 25.490234 25.164062 L 25.492188 25.164062 C 25.789022 25.146272 26.078842 25.136719 26.365234 25.136719 z" />
                </svg>
              </a>
              {/* X (Twitter) Link */}
              <a
                href="https://x.com/DrSelvan_prem?t=cwaA7niM0lAXIWspFKL1QA&s=09"
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </a>
            </div>

            {/* Book Appointment Button */}
            <div className="mb-8">
              <AppointmentButton
                text="Book an Appointment"
                variant="accent"
                className="w-full md:w-auto"
              />
            </div>
          </div>

          {/* Column 2 - Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact Us</h3>

            {/* Contact Information in columns on larger screens */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mumbai Location */}
              <div>
                <h4 className="font-semibold text-lg mb-2">Mumbai</h4>
                <address className="text-gray-600 not-italic mb-3">
                  Dr. Selvan's Homeopathy
                  <br />
                  27 & 27 A, G - Floor, 1st Wadi,
                  <br />
                  Mumbai - 400017
                </address>
                <div className="flex items-center mb-4">
                  <svg
                    className="h-5 w-5 text-primary mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+917208719646"
                    className="text-gray-600 hover:text-accent text-base"
                  >
                    India: +91 7208719646
                  </a>
                </div>
              </div>

              {/* Email, Website, and UAE Number */}
              <div>
                <div className="flex items-center mt-8 mb-4">
                  <svg
                    className="h-5 w-5 text-primary mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:drselvanhomeopathy@gmail.com"
                    className="text-gray-600 hover:text-accent"
                  >
                    drselvanhomeopathy@gmail.com
                  </a>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    className="h-5 w-5 text-primary mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <a
                    href="https://www.drselvanshomeopathy.com"
                    className="text-gray-600 hover:text-accent"
                  >
                    www.drselvanshomeopathy.com
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-primary mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+97474721890"
                    className="text-gray-600 hover:text-accent text-base"
                  >
                    UAE: +974-74721890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© {currentYear} Dr. Selvan's Homeopathy. All rights reserved.</p>
        </div>

        {/* Scroll to top button with orange accent */}
        <div className="fixed bottom-6 right-6 z-40 group">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent-dark transition-colors"
            aria-label="Scroll to top"
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
                d="M5 11l7-7 7 7M5 19l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
