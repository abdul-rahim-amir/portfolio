"use client";

import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

// Removed Image import since no images are needed now

export default function WhyChooseMe() {
  const features = [
    {
      title: "MERN Stack Expertise",
      description:
        "Skilled in MongoDB, Express.js, React.js, and Node.js — I build high-performance, scalable web applications with clean, maintainable code.",
    },
    {
      title: "UI/UX Excellence",
      description:
        "I design user-centric interfaces in Figma and Adobe XD, blending functionality with aesthetics for an engaging, seamless user experience.",
    },
    {
      title: "Responsive & Cross-Platform",
      description:
        "Your application will look and perform flawlessly on all devices — desktop, tablet, and mobile — ensuring a consistent user experience.",
    },
    {
      title: "Performance Optimization",
      description:
        "I use Next.js, server-side rendering, and best coding practices to deliver lightning-fast load times and smooth interactions.",
    },
    {
      title: "Security First",
      description:
        "I follow secure coding practices, implement authentication, and protect your app with the latest security standards.",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  const handleHover = (index) => {
    setHoverIndex(index);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Full Width Section */}
        <div className="space-y-8">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-12">
            Why Choose Me?
          </h1>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-b border-gray-800 pb-6 cursor-pointer"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-light">
                    {feature.title}
                  </h2>
                  <HiArrowUpRight
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${hoverIndex === index ? "rotate-45" : ""
                      }`}
                  />
                </div>
                {hoverIndex === index && (
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl transition-opacity duration-300">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
