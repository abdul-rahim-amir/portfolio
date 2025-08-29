"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function HeroSection() {
    return (
        <div id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Top Navigation */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-20"
            >
                <a
                    href="https://cal.com/abdul-rahim-amir/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="border border-white/30 text-white px-6 py-2.5 rounded-lg text-sm font-light hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                        BOOK A MEETING
                    </button>
                </a>

                {/* Social Links */}
                <div className="flex space-x-6 text-xl">
                    <Link
                        href="https://github.com/abdul-rahim-amir"
                        target="_blank"
                        className="hover:text-white"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/abdulrahimamir/"
                        target="_blank"
                        className="hover:text-[#0077B5]"
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </motion.div>

            {/* Big Background Name */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <h1 className="text-[20vw] md:text-[16vw] lg:text-[14vw] font-black text-white/15 leading-none tracking-tighter select-none text-center">
                    ABDUL
                    <br />
                    RAHIM
                </h1>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="group cursor-pointer mb-10"
                >
                    <div className="w-72 h-80 relative overflow-hidden rounded-3xl bg-white shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 border border-gray-700">
                        <Image
                            src="/assets/pic3.jpg"
                            alt="Abdul Rahim"
                            width={300}
                            height={350}
                            className="object-cover w-full h-full"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </motion.div>

                {/* Navigation Menu */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="bg-black/70 backdrop-blur-sm px-8 py-3 rounded-2xl shadow-md flex items-center space-x-8 text-gray-300 mb-8"
                >
                    <a href="#home" className="hover:text-white">Home</a>
                    <a href="#work" className="hover:text-white">Work</a>
                    <a href="#about" className="hover:text-white">About</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </motion.div>

                {/* Intro Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-center text-gray-300 text-sm md:text-base max-w-xl leading-relaxed"
                >
                    UI/UX Designer & Web Developer at{" "}
                    <Link
                        href="https://nodesbyte.com"
                        target="_blank"
                        className="underline hover:text-white"
                    >
                        Nodesbyte
                    </Link>
                    , currently offering my services online to clients worldwide.
                </motion.p>
            </div>

            {/* Decorative gradient elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        </div>
    );
}
