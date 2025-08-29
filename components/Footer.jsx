"use client";

import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaDribbble, FaBehance } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Footer() {
    return (
        <>
            {/* Let's Talk Section */}
            <section className="bg-black text-white py-24 flex flex-col items-center">
                <Link
                    href="https://cal.com/abdul-rahim-amir/30min"
                    className="text-6xl md:text-7xl font-bold flex items-center gap-4 group"
                >
                    Let's Talk
                    <HiArrowUpRight className="text-6xl md:text-7xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </Link>
                <div className="w-48 md:w-72 border-b-[3px] border-white mt-4"></div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-black text-white py-16 relative overflow-hidden">
                {/* Background Text */}
                <h1 className="absolute inset-0 flex justify-center items-center text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold text-neutral-800/60 select-none tracking-wider">
                    ABDUL RAHIM
                </h1>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* About */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">ABDUL RAHIM</h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            MERN Stack Developer & UI/UX Designer building fast, user-friendly web apps and creating modern, engaging designs.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-3 text-left">
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <p>
                            <a
                                href="https://wa.me/923247219681"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-500 transition"
                            >
                                +92 324 7219681
                            </a>
                        </p>
                        <p>
                            <a
                                href="mailto:chaudharyabdulrahimamir@gmail.com"
                                className="text-gray-400 hover:text-blue-500 transition"
                            >
                                chaudharyabdulrahimamir@gmail.com
                            </a>
                        </p>
                    </div>


                    {/* Socials */}
                    <div>
                        <h3 className="font-semibold mb-4">Follow Me</h3>
                        <div className="flex gap-4 text-lg">
                            <Link
                                href="https://linkedin.com/in/abdulrahimamir/"
                                target="_blank"
                                className="p-3 rounded-full bg-neutral-800 hover:bg-[#0077B5] hover:text-white transition"
                            >
                                <FaLinkedinIn />
                            </Link>
                            <Link
                                href="https://github.com/abdul-rahim-amir/"
                                target="_blank"
                                className="p-3 rounded-full bg-neutral-800 hover:bg-[#181717] hover:text-white transition"
                            >
                                <FaGithub />
                            </Link>
                            <Link
                                href="https://dribbble.com/emrahim"
                                target="_blank"
                                className="p-3 rounded-full bg-neutral-800 hover:bg-[#EA4C89] hover:text-white transition"
                            >
                                <FaDribbble />
                            </Link>
                            <Link
                                href="https://www.behance.net/abdulrahim170"
                                target="_blank"
                                className="p-3 rounded-full bg-neutral-800 hover:bg-[#1769FF] hover:text-white transition"
                            >
                                <FaBehance />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 border-t border-neutral-800 mt-12 pt-6 flex flex-col items-center justify-center text-center text-sm md:text-base text-gray-400 gap-2">
                    <p className="font-medium">
                        2025 © Design & Development by{" "}
                        <span className="font-bold text-white">ABDUL RAHIM</span> All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    );
}
