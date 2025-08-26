"use client";

import {
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiAdobexd,
} from "react-icons/si";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-black py-20 px-6 md:px-16 text-gray-200">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <h4 className="text-gray-400 uppercase tracking-widest text-sm mt-10 mb-2">
            About me & My Skills
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
            I Can Deliver Results That Exceed Your Expectations
          </h2>
          <button className="border border-gray-300 text-gray-200 px-6 py-2 rounded-md hover:bg-gray-200 hover:text-black transition">
            Download CV
          </button>
        </div>

        {/* Right Content */}
<div>
  <p className="text-gray-400 leading-relaxed mt-8 md:mt-60 mb-8">
    I am a full-stack developer with experience in{" "}
    <span className="font-semibold text-gray-100">
      Next.js (Primary), React, Node.js, Express.js, MongoDB, Firebase,
      AWS Lambda, AWS API Gateway, and DigitalOcean
    </span>
    . I’m passionate about shipping high-quality code and collaborating
    effectively to achieve results.
  </p>

  {/* Stats */}
  <div className="flex gap-8 md:gap-12 flex-wrap">
    <div>
      <h3 className="text-xl font-bold text-white">3+ Years</h3>
      <p className="text-gray-500 text-sm">Experience</p>
    </div>
    <div>
      <h3 className="text-xl font-bold text-white">5+</h3>
      <p className="text-gray-500 text-sm">Brands</p>
    </div>
    <div>
      <h3 className="text-xl font-bold text-white">10+</h3>
      <p className="text-gray-500 text-sm">Projects</p>
    </div>
  </div>
</div>

      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center items-center gap-10 opacity-80 mt-20 text-4xl">
        <span className="flex flex-col items-center text-gray-400">
          <SiNextdotjs className="text-white" />
          <p className="text-sm mt-1">Next.js</p>
        </span>
        <span className="flex flex-col items-center text-green-500">
          <SiMongodb />
          <p className="text-sm mt-1 text-gray-400">MongoDB</p>
        </span>
        <span className="flex flex-col items-center text-yellow-500">
          <SiFirebase />
          <p className="text-sm mt-1 text-gray-400">Firebase</p>
        </span>
        <span className="flex flex-col items-center text-blue-400">
          <SiReact />
          <p className="text-sm mt-1 text-gray-400">React</p>
        </span>
        <span className="flex flex-col items-center text-green-400">
          <SiNodedotjs />
          <p className="text-sm mt-1 text-gray-400">Node.js</p>
        </span>
        <span className="flex flex-col items-center text-orange-500">
          <SiHtml5 />
          <p className="text-sm mt-1 text-gray-400">HTML</p>
        </span>
        <span className="flex flex-col items-center text-blue-500">
          <SiCss3 />
          <p className="text-sm mt-1 text-gray-400">CSS</p>
        </span>
        <span className="flex flex-col items-center text-yellow-400">
          <SiJavascript />
          <p className="text-sm mt-1 text-gray-400">JavaScript</p>
        </span>
        <span className="flex flex-col items-center text-pink-500">
          <SiFigma />
          <p className="text-sm mt-1 text-gray-400">Figma</p>
        </span>
        <span className="flex flex-col items-center text-purple-500">
          <SiAdobexd />
          <p className="text-sm mt-1 text-gray-400">Adobe XD</p>
        </span>
      </div>
    </section>
  );
}
