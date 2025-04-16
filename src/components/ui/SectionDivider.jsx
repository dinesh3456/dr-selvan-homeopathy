// src/components/ui/SectionDivider.jsx
import React from "react";
import WaveDivider from "./WaveDivider";

const SectionDivider = ({
  type = "wave",
  position = "bottom",
  color = "white",
  height = "100px",
  className = "",
}) => {
  // Wave divider
  if (type === "wave") {
    return (
      <WaveDivider position={position} color={color} className={className} />
    );
  }

  // Angle divider
  if (type === "angle") {
    return (
      <div
        className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 w-full overflow-hidden z-10 ${className}`}
        style={{ height }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`absolute ${position === "top" ? "bottom-0" : "top-0"} w-full h-full`}
          style={{ transform: position === "top" ? "rotate(180deg)" : "none" }}
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className={`fill-${color}`}
          ></path>
        </svg>
      </div>
    );
  }

  // Triangle divider
  if (type === "triangle") {
    return (
      <div
        className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 w-full overflow-hidden z-10 ${className}`}
        style={{ height }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`absolute ${position === "top" ? "bottom-0" : "top-0"} w-full h-full`}
          style={{ transform: position === "top" ? "rotate(180deg)" : "none" }}
        >
          <path
            d="M1200 0L0 0 600 120 1200 0z"
            className={`fill-${color}`}
          ></path>
        </svg>
      </div>
    );
  }

  // Curved divider
  if (type === "curved") {
    return (
      <div
        className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 w-full overflow-hidden z-10 ${className}`}
        style={{ height }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`absolute ${position === "top" ? "bottom-0" : "top-0"} w-full h-full`}
          style={{ transform: position === "top" ? "rotate(180deg)" : "none" }}
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className={`fill-${color}`}
          ></path>
        </svg>
      </div>
    );
  }

  // Arrow divider
  if (type === "arrow") {
    return (
      <div
        className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 w-full overflow-hidden z-10 ${className}`}
        style={{ height }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`absolute ${position === "top" ? "bottom-0" : "top-0"} w-full h-full`}
          style={{ transform: position === "top" ? "rotate(180deg)" : "none" }}
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            className={`fill-${color}`}
          ></path>
        </svg>
      </div>
    );
  }

  // Default - straight line
  return (
    <div
      className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 w-full h-1 bg-${color} z-10 ${className}`}
    ></div>
  );
};

export default SectionDivider;
