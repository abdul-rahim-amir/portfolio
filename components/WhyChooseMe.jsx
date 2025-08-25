"use client";

import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import Image from "next/image";

// Import images from public folder
import image1 from "@/public/assets/userresearch.webp";
import image2 from "@/public/assets/ai.webp";
import image3 from "@/public/assets/cloudsha.webp";
import image4 from "@/public/assets/webdevs.webp";
import image5 from "@/public/assets/ai.webp";

export default function WhyChooseMe() {
  const features = [
    {
      title: "Empathy First",
      description:
        "I prioritize understanding your needs, goals, and challenges. Every design decision is rooted in empathy to ensure it resonates with your audience.",
      image: image1,
    },
    {
      title: "Timely Delivery",
      description:
        "I value your time and ensure deadlines are met without compromising quality, using streamlined workflows and effective communication.",
      image: image2,
    },
    {
      title: "Pixel Perfect",
      description:
        "Every detail is meticulously crafted—perfect alignment, precision in spacing, and consistency in visuals to achieve flawless, functional designs.",
      image: image3,
    },
    {
      title: "Creative Vision",
      description:
        "I bring fresh, innovative ideas that blend functionality with stunning aesthetics, ensuring your brand stands out in the digital space.",
      image: image4,
    },
    {
      title: "Security Focused",
      description:
        "Your data and privacy are a top priority, with every project built using secure, best-practice methods.",
      image: image5,
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHover = (index) => {
    if (index !== hoverIndex) {
      setPrevIndex(hoverIndex);
      setHoverIndex(index);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12">
            Why Choose Me?
          </h1>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-b border-gray-800 pb-6 cursor-pointer"
                onMouseEnter={() => handleHover(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-light">
                    {feature.title}
                  </h2>
                  <HiArrowUpRight
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      hoverIndex === index ? "rotate-45" : ""
                    }`}
                  />
                </div>
                {hoverIndex === index && (
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg transition-opacity duration-300">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Smooth Slide/Fade */}
        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg bg-gray-800">
          
          {/* Previous Image for animation */}
          {isAnimating && (
            <div
              className={`absolute inset-0 z-10 transition-transform duration-500 ease-in-out ${
                hoverIndex > prevIndex ? "-translate-x-full" : "translate-x-full"
              }`}
            >
              <Image
                src={features[prevIndex].image}
                alt={features[prevIndex].title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Current Image */}
          <div
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              isAnimating
                ? hoverIndex > prevIndex
                  ? "translate-x-0 from-translate-x-full"
                  : "translate-x-0 from-translate-x-[-100%]"
                : "translate-x-0"
            }`}
          >
            <Image
              src={features[hoverIndex].image}
              alt={features[hoverIndex].title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
