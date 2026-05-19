"use client";
import Image from "next/image";

const projects = [
    {
        title: "Safar e Dastan",
        description: "A digital storytelling platform that preserves and celebrates the art of narrative, allowing users to embark on a journey through diverse tales and cultural heritage.",
        tech: ["NEXT JS", "TYPESCRIPT", "FIREBASE"],
        image: "/assets/safrar.png",
        link: "https://safrar-e-dastan.vercel.app/i",
        id: "safar-e-dastan"
    },
    {
        title: "Fitness Koncept",
        description: "A high-performance landing page for a modern fitness studio, featuring immersive visuals and seamless user experience for modern athletes.",
        tech: ["NEXT JS", "TAILWIND CSS", "TYPESCRIPT"],
        image: "/fitness-koncept.jpg",
        link: "https://fitness-koncept.vercel.app/",
        id: "fitness-koncept"
    },
    {
        title: "Fertility One",
        description: "A mobile app for fertility tracking with a modern, intuitive UI designed to empower users with data-driven insights.",
        tech: ["WIREFRAMING", "UI DESIGN", "PROTOTYPING"],
        image: "/assets/FertilityOne.png",
        link: "https://apps.apple.com/us/app/fertilityone/id6752598499",
        id: "fertility-one"
    },
    {
        title: "IRTH Advisors",
        description: "A comprehensive business consultancy platform built on the MERN stack, delivering strategic insights and advisory services.",
        tech: ["REACT JS", "FIREBASE", "CLOUDINARY"],
        image: "/IRTH-work-main.jpg",
        link: "https://irthadvisors.com/",
        id: "irth-advisors"
    },
    {
        title: "Travel Tribes",
        description: "A travel community platform connecting explorers worldwide, allowing users to share itineraries and discover hidden gems.",
        tech: ["UI/UX DESIGN", "FIGMA", "Adobe XD"],
        image: "/assets/TravelTribes.png",
        link: "https://www.behance.net/gallery/224617065/Travel-Tribes",
        id: "travel-tribes"
    },
    {
        title: "Matcha Coffee",
        description: "A premium Matcha Coffee landing page showcasing modern web architecture and interactive elements, built with Next.js, Google Flow, Google Whisk, and Google Gemini.",
        tech: ["NEXT JS", "GOOGLE FLOW", "GOOGLE WHISK", "GEMINI AI"],
        image: "/assets/matcha-coffee.jpg",
        link: "https://matcha-coffee.vercel.app/",
        id: "matcha-coffee"
    },
    {
        title: "GoZentric",
        description: "Online store solution with advanced sales analytics and a streamlined e-commerce workflow for growing businesses.",
        tech: ["Next.js", "Firebase", "Cloudinary"],
        image: "/assets/GoZentric.png",
        link: "https://gozentric.vercel.app/",
        id: "gozentric"
    }
];

export default function ModernPortfolioSection() {
    return (
        <section id="work" className="w-full bg-black pt-24 pb-32 px-6 md:px-16 relative z-20">
            {/* Sticky Centered Heading */}
            <div className="sticky top-0 min-h-screen flex items-center justify-center pointer-events-none z-10">
                <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white text-center">
                    Latest w
                    <span className="inline-block align-middle relative mx-1 sm:mx-2 top-[-0.08em]">
                        <span className="inline-block w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-2 border-white rounded-full relative">
                            <span className="absolute inset-1.5 sm:inset-2 bg-white rounded-full opacity-60"></span>
                        </span>
                    </span>
                    rk
                </h2>
            </div>

            {/* Projects Container */}
            <div className="relative z-20 max-w-[1800px] mx-auto space-y-12 sm:space-y-24 md:space-y-32">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="relative bg-white/[0.03] backdrop-blur-2xl rounded-[1.5rem] sm:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-12 lg:p-20 border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-700 overflow-hidden group shadow-2xl"
                    >
                        {/* Subtle inner glow for glass effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center relative z-10">
                            {/* Left Side Content */}
                            <div className="space-y-8 sm:space-y-12 order-2 lg:order-1 flex flex-col">
                                {/* Link Icon */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl cursor-pointer"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-8 sm:h-8">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                </a>

                                <div className="space-y-4 sm:space-y-6">
                                    <h3 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1] sm:leading-[0.9] break-words">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 text-base sm:text-xl md:text-2xl max-w-xl font-medium leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-x-4 sm:gap-x-10 gap-y-3 sm:gap-y-4 pt-4 sm:pt-6">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="text-white font-bold tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-base md:text-lg uppercase whitespace-nowrap">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side Visuals */}
                            <div className="relative order-1 lg:order-2 w-full lg:flex-1">
                                <div className="relative w-full aspect-[4/3] rounded-[1rem] sm:rounded-[2rem] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Extra space */}
            <div className="h-[150vh]"></div>
        </section>
    );
}
