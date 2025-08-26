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
            {/* Sticky Centered Heading - Will stay at bottom */}
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

            {/* Projects Grid - Will scroll over the sticky text */}
            <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 md:pb-32">

                {/* Fertility One */}
                <div className="relative bg-gradient-to-br from-cyan-300/90 to-cyan-600/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-pointer border border-white/10 hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0">
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border border-white/10 rounded-full"></div>
                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 border border-white/10 rounded-full"></div>
                    </div>
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">Fertility One</h3>
                            <p className="text-white/70 text-xs sm:text-sm mb-1">UI/UX design</p>
                            <p className="text-white/60 text-xs">A mobile app for fertility tracking with a modern, intuitive UI.</p>
                        </div>
                        <a href="#" className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">View Project</a>
                    </div>
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={fertilityOneImg} alt="Fertility One" className="w-full h-auto" />
                    </div>
                </div>

                {/* IRTH Advisors */}
                <div className="relative bg-gradient-to-br from-yellow-700/90 to-yellow-950/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-pointer border border-white/10 hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0">
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border border-white/10 rounded-full"></div>
                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 border border-white/10 rounded-full"></div>
                    </div>
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">IRTH Advisors</h3>
                            <p className="text-white/70 text-xs sm:text-sm mb-1">MERN Stack</p>
                            <p className="text-white/60 text-xs">A business consultancy platform built on the MERN stack.</p>
                        </div>
                        <a href="#" className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">View Project</a>
                    </div>
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={irthImage} alt="Irth Image" className="w-full h-auto" />
                    </div>
                </div>

                {/* Travel Tribes */}
                <div className="relative bg-gradient-to-br from-sky-200/90 to-sky-500/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-pointer border border-white/10 hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0">
                        <svg className="absolute bottom-0 left-0 w-full h-16 sm:h-24 lg:h-32" viewBox="0 0 300 100" fill="none">
                            <path d="M0 50 Q100 0 200 50 T300 50 V100 H0 V50Z" fill="rgba(255,255,255,0.05)" />
                            <path d="M0 70 Q100 20 200 70 T300 70 V100 H0 V70Z" fill="rgba(255,255,255,0.03)" />
                        </svg>
                    </div>
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">Travel Tribes</h3>
                            <p className="text-white/70 text-xs sm:text-sm mb-1">UI/UX Design</p>
                            <p className="text-white/60 text-xs">A travel community platform connecting explorers worldwide.</p>
                        </div>
                        <a href="#" className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">View Project</a>
                    </div>
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={travelTribesImage} alt="Travel Tribes Image" className="w-full h-auto" />
                    </div>
                </div>

                {/* WeLux Chauffeur */}
                <div className="relative bg-gradient-to-br from-zinc-500/90 to-zinc-700/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-pointer border border-white/10 hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 opacity-20">
                            {[...Array(15)].map((_, i) => (
                                <div key={i} className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent" style={{ top: `${i * 6}%`, left: `${i * 2}%`, right: `${i * 1}%`, transform: `rotate(${i * 3}deg)` }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">WeLux Chauffeur</h3>
                            <p className="text-white/70 text-xs sm:text-sm mb-1">Web Design</p>
                            <p className="text-white/60 text-xs">Luxury chauffeur booking website with premium design.</p>
                        </div>
                        <a href="#" className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">View Project</a>
                    </div>
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={weLuxxImage} alt="WeLux Image" className="w-full h-auto" />
                    </div>
                </div>

                {/* Durkha Elixirs */}
                <div className="relative bg-gradient-to-br from-neutral-300/90 to-neutral-900/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-pointer border border-white/10 hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-full h-full">
                            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-white/5 rounded-full"></div>
                            <div className="absolute top-6 sm:top-12 right-8 sm:right-16 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-white/3 rounded-full"></div>
                            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-16 sm:w-24 lg:w-32 h-1 sm:h-2 bg-white/10 rounded-full transform rotate-45"></div>
                            <div className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 w-12 sm:w-16 lg:w-24 h-1 sm:h-2 bg-white/5 rounded-full transform rotate-45"></div>
                        </div>
                    </div>
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">Durkha Elixirs</h3>
                            <p className="text-white/70 text-xs sm:text-sm mb-1">UI/UX Design</p>
                            <p className="text-white/60 text-xs">Branding and design for a premium beverage startup.</p>
                        </div>
                        <a href="#" className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">View Project</a>
                    </div>
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={durkhaElixirsImage} alt="Durkha Elixirs Image" className="w-full h-auto" />
                    </div>
                </div>

                {/* GoZentric */}
                <div className="relative bg-gradient-to-br from-emerald-100/90 to-green-200/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-pointer border border-white/10 hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-1/4 left-1/4 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border border-white/20 rounded-full"></div>
                            <div className="absolute top-1/3 left-1/3 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 border border-white/15 rounded-full"></div>
                            <div className="absolute top-2/5 left-2/5 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border border-white/10 rounded-full"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-white/10 rounded-full"></div>
                        </div>
                        <svg className="absolute top-2 sm:top-4 left-2 sm:left-4 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="20" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                            <circle cx="50" cy="50" r="35" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                        </svg>
                    </div>
                    <div className="relative h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">GoZentric</h3>
                            <p className="text-white/70 text-xs sm:text-sm mb-1">E-commerce</p>
                            <p className="text-white/60 text-xs">Online store solution with advanced sales analytics.</p>
                        </div>
                        <a href="#" className="inline-block border border-white/30 text-white text-xs px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-fit">View Project</a>
                    </div>
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">
                        <Image src={goZentricImage} alt="GoZentric Image" className="w-full h-auto" />
                    </div>
                </div>

                {/* Extra space */}
                <div className="col-span-full h-16 sm:h-20 md:h-24 lg:h-32"></div>

            </div>
        </section>
    );
}
