"use client";
import Image from "next/image";
import fertilityOneImg from "../public/assets/FertilityOne.png";
import irthImage from "../public/assets/irth.png";
import travelTribesImage from "../public/assets/TravelTribes.png";
import weLuxxImage from "../public/assets/WeLuxx.png";
import durkhaElixirsImage from "../public/assets/DurkhaElixirs.png";
import goZentricImage from "../public/assets/GoZentric.png";

export default function ModernPortfolioSection() {
    return (
        <section id="work" className="w-full bg-black pt-6 pb-16 px-6 md:px-16 relative z-20">
            {/* Sticky Centered Heading */}
            <div className="sticky top-0 min-h-screen flex items-center justify-center pointer-events-none z-10">
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white">
                    Latest w
                    <span className="inline-block relative">
                        <span className="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-2 border-white rounded-full mx-2 relative">
                            <span className="absolute inset-2 bg-white rounded-full opacity-60"></span>
                        </span>
                    </span>
                    rk
                </h2>
            </div>

            {/* Projects Grid */}
            <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 md:pb-32">
                {/* Fertility One */}
                <div className="relative bg-gradient-to-br from-cyan-500/90 to-cyan-800/90 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 border border-white/10 hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">Fertility One</h3>
                            <p className="text-white/90 text-xs sm:text-sm mb-1">UI/UX design</p>
                            <p className="text-white/80 text-xs">A mobile app for fertility tracking with a modern, intuitive UI.</p>
                        </div>
                        <a href="/projects/fertility-one" target="_blank" rel="noopener noreferrer"
                            className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">
                            View Project
                        </a>
                    </div>
                    <div className="absolute bottom-2 right-2 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={fertilityOneImg} alt="Fertility One" className="w-full h-auto" />
                    </div>
                </div>

                {/* IRTH Advisors */}
                <div className="relative bg-gradient-to-br from-yellow-700/90 to-yellow-950/90 rounded-xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 border border-white/10 hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">IRTH Advisors</h3>
                            <p className="text-white/70 text-xs sm:text-sm mb-1">MERN Stack</p>
                            <p className="text-white/60 text-xs">A business consultancy platform built on the MERN stack.</p>
                        </div>
                        <a href="https://irthadvisors.com/" target="_blank" rel="noopener noreferrer"
                            className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">
                            View Project
                        </a>
                    </div>
                    <div className="absolute bottom-2 right-2 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={irthImage} alt="Irth Advisors" className="w-full h-auto" />
                    </div>
                </div>

                {/* Travel Tribes */}
                <div className="relative bg-gradient-to-br from-sky-400/90 to-sky-700/90 rounded-xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 border border-white/10 hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">Travel Tribes</h3>
                            <p className="text-white/90 text-xs sm:text-sm mb-1">UI/UX Design</p>
                            <p className="text-white/80 text-xs">A travel community platform connecting explorers worldwide.</p>
                        </div>
                        <a href="https://www.behance.net/gallery/224617065/Travel-Tribes/modules/1283550175" target="_blank" rel="noopener noreferrer"
                            className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">
                            View Project
                        </a>
                    </div>
                    <div className="absolute bottom-2 right-2 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={travelTribesImage} alt="Travel Tribes" className="w-full h-auto" />
                    </div>
                </div>

                {/* WeLux Chauffeur */}
                <div className="relative bg-gradient-to-br from-zinc-700/90 to-zinc-900/90 rounded-xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 border border-white/10 hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">WeLux Chauffeur</h3>
                            <p className="text-white/70 text-xs sm:text-sm mb-1">Web Design</p>
                            <p className="text-white/60 text-xs">Luxury chauffeur booking website with premium design.</p>
                        </div>
                        <a href="/projects/welux-chauffeur" target="_blank" rel="noopener noreferrer"
                            className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">
                            View Project
                        </a>
                    </div>
                    <div className="absolute bottom-2 right-2 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={weLuxxImage} alt="WeLux Chauffeur" className="w-full h-auto" />
                    </div>
                </div>

                {/* Durkha Elixirs */}
                <div className="relative bg-gradient-to-br from-neutral-500/90 to-neutral-900/90 rounded-xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 border border-white/10 hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">Durkha Elixirs</h3>
                            <p className="text-white/70 text-xs sm:text-sm mb-1">UI/UX Design</p>
                            <p className="text-white/60 text-xs">Branding and design for a premium beverage startup.</p>
                        </div>
                        <a href="/projects/durkha-elixirs" target="_blank" rel="noopener noreferrer"
                            className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">
                            View Project
                        </a>
                    </div>
                    <div className="absolute bottom-2 right-2 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={durkhaElixirsImage} alt="Durkha Elixirs" className="w-full h-auto" />
                    </div>
                </div>

                {/* GoZentric */}
                <div className="relative bg-gradient-to-br from-teal-800/90 to-teal-900/90 rounded-xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 border border-white/10 hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">GoZentric</h3>
                            <p className="text-white/70 text-xs sm:text-sm mb-1">E-commerce</p>
                            <p className="text-white/60 text-xs">Online store solution with advanced sales analytics.</p>
                        </div>
                        <a href="https://dribbble.com/shots/26235574-GoZentric?utm_source=Clipboard_Shot&utm_campaign=emrahim&utm_content=GoZentric&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=emrahim&utm_content=GoZentric&utm_medium=Social_Share" target="_blank" rel="noopener noreferrer"
                            className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">
                            View Project
                        </a>
                    </div>
                    <div className="absolute bottom-2 right-2 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={goZentricImage} alt="GoZentric" className="w-full h-auto" />
                    </div>
                </div>

                {/* Extra space */}
                <div className="col-span-full h-186 sm:h-20 md:h-24 lg:h-92"></div>
            </div>
        </section>
    );
}
