"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 relative overflow-hidden">
            {/* Background Text */}
            <h1 className="absolute inset-0 flex justify-center items-center text-[10rem] font-bold text-neutral-900/80 select-none tracking-widest">
                ABDUL RAHIM
            </h1>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h2 className="text-sm font-semibold">ABDUL RAHIM</h2>
                        <p className="mt-4 text-lg font-medium">
                            Keep in touch with <span className="font-bold">ABDUL RAHIM.</span>
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-24 mt-10 md:mt-0">
                        <div>
                            <h3 className="font-semibold mb-4">Features</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="hover:underline">About</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Work</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="hover:underline">Behance</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Dribbble</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>2025 © Copyright Design & Development by ABDUL RAHIM</p>

                    {/* Socials */}
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <span>Connect with</span>
                        <Link href="#" className="hover:text-neutral-400"><FaFacebookF /></Link>
                        <Link href="#" className="hover:text-neutral-400"><FaInstagram /></Link>
                        <Link href="#" className="hover:text-neutral-400"><FaTwitter /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
