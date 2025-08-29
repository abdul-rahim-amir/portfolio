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
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function AboutSection() {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <section
      id="about"
      className="w-full bg-black py-20 px-6 md:px-16 text-gray-200"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-gray-400 uppercase tracking-widest text-sm mt-10 mb-2">
            About me & My Skills
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
            I Can Deliver Results That Exceed Your Expectations
          </h2>
          <button className="border border-gray-300 text-gray-200 px-6 py-2 rounded-md hover:bg-gray-200 hover:text-black transition">
            <a href="/Resume_Rahim.pdf" download="Resume_Rahim.pdf">
              Download CV
            </a>
          </button>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 leading-relaxed mt-8 md:mt-60 mb-8">
            I’m a <span className="font-semibold text-gray-100">MERN Stack Developer</span> and{" "}
            <span className="font-semibold text-gray-100">UI/UX Designer</span> skilled in{" "}
            <span className="font-semibold text-gray-100">
              MongoDB, Express.js, React, Next.js, Node.js, Firebase,
            </span>{" "}
            and <span className="font-semibold text-gray-100">Figma, Adobe XD</span>. I create fast,
            user-friendly web apps and engaging designs that deliver results.
          </p>

          {/* Stats with CountUp Animation */}
          <div className="flex gap-8 md:gap-12 flex-wrap">
            {[
              { end: 3, suffix: "+", subtitle: "Years Experience", duration: 2 },
              { end: 5, suffix: "+", subtitle: "Brands", duration: 2 },
              { end: 10, suffix: "+", subtitle: "Projects", duration: 2 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white">
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={stat.duration}
                    suffix={stat.suffix}
                  />
                </h3>
                <p className="text-gray-500 text-sm">{stat.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-10 opacity-80 mt-20 text-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
          { icon: <SiMongodb className="text-green-500" />, label: "MongoDB" },
          { icon: <SiFirebase className="text-yellow-500" />, label: "Firebase" },
          { icon: <SiReact className="text-blue-400" />, label: "React" },
          { icon: <SiNodedotjs className="text-green-400" />, label: "Node.js" },
          { icon: <SiHtml5 className="text-orange-500" />, label: "HTML" },
          { icon: <SiCss3 className="text-blue-500" />, label: "CSS" },
          { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
          { icon: <SiFigma className="text-pink-500" />, label: "Figma" },
          { icon: <SiAdobexd className="text-purple-500" />, label: "Adobe XD" },
        ].map((tech, i) => (
          <motion.span
            key={i}
            className="flex flex-col items-center text-gray-400"
            custom={i}
            variants={iconVariants}
          >
            {tech.icon}
            <p className="text-sm mt-1">{tech.label}</p>
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
