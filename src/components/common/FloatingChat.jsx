// src/components/common/FloatingChat.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 How can we help you today?", sender: "bot" },
  ]);
  const chatContainerRef = useRef(null);

  // Show welcome message bubble after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Auto hide bubble after it appears
  useEffect(() => {
    if (showBubble) {
      const timer = setTimeout(() => {
        setShowBubble(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [showBubble]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: message, sender: "user" }]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Thank you for your message! A team member will get back to you shortly.",
        "I'd be happy to help you schedule an appointment with Dr. Selvan.",
        "You can visit our clinic in Chennai or Dubai. Would you like more information?",
        "Homeopathic treatments are completely safe and have no side effects.",
      ];

      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      setMessages((prev) => [...prev, { text: randomResponse, sender: "bot" }]);
    }, 1000);
  };

  // Animation variants
  const buttonVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      scale: 0,
      rotate: -180,
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 25px -5px rgba(51, 102, 204, 0.4)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.9 },
  };

  const chatVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transformOrigin: "bottom right",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const messageVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const bubbleVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: 20,
      transformOrigin: "bottom right",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      x: 20,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat window */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="mb-4 w-80 sm:w-96 overflow-hidden"
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <GlassCard className="overflow-hidden p-0 shadow-lg">
              {/* Header */}
              <div className="bg-primary p-4 text-white">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
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
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Dr. Selvan's Homeopathy</h3>
                    <p className="text-xs opacity-80">Online now</p>
                  </div>
                  <button
                    className="ml-auto text-white opacity-70 hover:opacity-100 transition"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close chat"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chat messages */}
              <div
                ref={chatContainerRef}
                className="p-4 h-80 overflow-y-auto bg-slate-50/70 custom-scroll"
              >
                <div className="space-y-3">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      className={`max-w-3/4 ${msg.sender === "bot" ? "ml-0 mr-auto" : "ml-auto mr-0"}`}
                    >
                      <div
                        className={`rounded-2xl px-4 py-2 inline-block shadow-sm ${
                          msg.sender === "bot"
                            ? "bg-primary text-white rounded-bl-none"
                            : "bg-white text-slate-800 rounded-br-none border border-slate-100"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 ml-1">
                        {msg.sender === "bot" ? "Dr. Selvan's team" : "You"}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Input area */}
              <div className="p-3 border-t border-slate-100">
                <form onSubmit={handleSubmit} className="flex items-center">
                  <input
                    type="text"
                    className="flex-1 bg-slate-100/70 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <motion.button
                    type="submit"
                    className="ml-2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!message.trim()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </motion.button>
                </form>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Welcome bubble */}
      <AnimatePresence mode="wait">
        {showBubble && !isOpen && (
          <motion.div
            className="mb-3 max-w-xs"
            variants={bubbleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <GlassCard className="p-3 shadow-md">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 text-white mr-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Need help with homeopathic treatments?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Chat with us now!
                  </p>
                </div>
                <button
                  className="ml-2 text-slate-400 hover:text-slate-600"
                  onClick={() => setShowBubble(false)}
                  aria-label="Close message"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat button */}
      <motion.button
        className="bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-blue-glow"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBubble(false);
        }}
        aria-label="Chat with us"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
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
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingChat;
