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
        <section className="w-full bg-black pt-6 pb-16 px-6 md:px-16 relative z-20">
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
            <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-16 pb-32">

    {/* Fertility One */}
    <div className="relative bg-gradient-to-br from-cyan-400/90 to-cyan-600/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 h-80 md:h-96 overflow-hidden cursor-pointer border border-white/10">
        <div className="absolute inset-0">
            <div className="absolute top-4 right-4 w-32 h-32 border border-white/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/10 rounded-full"></div>
        </div>
        <div className="relative h-full flex flex-col justify-between">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Fertility One</h3>
                <p className="text-white/70 text-sm">UI/UX design</p>
            </div>
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <Image src={fertilityOneImg} alt="Fertility One" width={400} height={400}/>
        </div>
    </div>

    {/* IRTH Advisors */}
    <div className="relative bg-gradient-to-br from-yellow-700/90 to-yellow-950/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 h-80 md:h-96 overflow-hidden cursor-pointer border border-white/10">
        <div className="absolute inset-0">
            <div className="absolute top-4 right-4 w-32 h-32 border border-white/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/10 rounded-full"></div>
        </div>
        <div className="relative h-full flex flex-col justify-between">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">IRTH Advisors</h3>
                <p className="text-white/70 text-sm">MERN Stack</p>
            </div>
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <Image src={irthImage} alt="Irth Image" width={400} height={400}/>
        </div>
    </div>

    {/* Travel Tribes */}
    <div className="relative bg-gradient-to-br from-sky-200/90 to-sky-500/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 h-80 md:h-96 overflow-hidden cursor-pointer border border-white/10">
        <div className="absolute inset-0">
            <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 400 100" fill="none">
                <path d="M0 50 Q100 0 200 50 T400 50 V100 H0 V50Z" fill="rgba(255,255,255,0.05)" />
                <path d="M0 70 Q100 20 200 70 T400 70 V100 H0 V70Z" fill="rgba(255,255,255,0.03)" />
            </svg>
        </div>
        <div className="relative h-full flex flex-col justify-between">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Travel Tribes</h3>
                <p className="text-white/70 text-sm">UI/UX Design</p>
            </div>
            <div className="absolute right-4 top-4 w-32 h-20 bg-black/20 rounded-lg border border-white/10">
                <div className="p-2">
                    <div className="w-full h-2 bg-white/20 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-white/10 rounded mb-1"></div>
                    <div className="w-1/2 h-2 bg-white/10 rounded"></div>
                </div>
            </div>
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <Image src={travelTribesImage} alt="We Lux Image" width={400} height={400}/>
        </div>
    </div>

    {/* WeLux Chauffeur */}
    <div className="relative bg-gradient-to-br from-zinc-500/90 to-zinc-700/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 h-80 md:h-96 overflow-hidden cursor-pointer border border-white/10">
        <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent" style={{ top: `${i * 5}%`, left: `${i * 2}%`, right: `${i * 1}%`, transform: `rotate(${i * 3}deg)` }}></div>
                ))}
            </div>
        </div>
        <div className="relative h-full flex flex-col justify-between">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">WeLux Chauffeur</h3>
                <p className="text-white/70 text-sm">Web Design</p>
            </div>
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <Image src={weLuxxImage} alt="Irth Image" width={400} height={400}/>
        </div>
    </div>

    {/* Durkha Elixirs */}
    <div className="relative bg-gradient-to-br from-neutral-400/90 to-neutral-900/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 h-80 md:h-96 overflow-hidden cursor-pointer border border-white/10">
        <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-full h-full">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full"></div>
                <div className="absolute top-12 right-16 w-16 h-16 bg-white/3 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-32 h-2 bg-white/10 rounded-full transform rotate-45"></div>
                <div className="absolute bottom-16 left-16 w-24 h-2 bg-white/5 rounded-full transform rotate-45"></div>
            </div>
        </div>
        <div className="relative h-full flex flex-col justify-between">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Durkha Elixirs</h3>
                <p className="text-white/70 text-sm">UI/UX Design</p>
            </div>
            <div className="flex items-end justify-between">
                <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-24 bg-white/10 rounded-lg border border-white/20">
                        <div className="p-2">
                            <div className="w-full h-3 bg-white/30 rounded mb-1"></div>
                            <div className="w-full h-2 bg-white/15 rounded mb-1"></div>
                            <div className="w-3/4 h-2 bg-white/15 rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-white/60 text-xs mb-1">Innovation</p>
                    <p className="text-2xl md:text-4xl font-bold text-white/30">2024</p>
                </div>
            </div>
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <Image src={durkhaElixirsImage} alt="Irth Image" width={400} height={400}/>
        </div>
    </div>

    {/* GoZentric */}
    <div className="relative bg-gradient-to-br from-emerald-100/90 to-green-200/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 h-80 md:h-96 overflow-hidden cursor-pointer border border-white/10">
        <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/3 left-1/3 w-24 h-24 border border-white/15 rounded-full"></div>
                <div className="absolute top-2/5 left-2/5 w-16 h-16 border border-white/10 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-white/10 rounded-full"></div>
            </div>
            <svg className="absolute top-4 left-4 w-24 h-24" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="20" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="35" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
            </svg>
        </div>
        <div className="relative h-full flex flex-col justify-between">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">GoZentric</h3>
                <p className="text-white/70 text-sm">E-commerce</p>
            </div>
            <div className="absolute bottom-6 right-6 flex space-x-2">
                <div className="w-3 h-16 bg-white/20 rounded"></div>
                <div className="w-3 h-12 bg-white/15 rounded"></div>
                <div className="w-3 h-20 bg-white/10 rounded"></div>
                <div className="w-3 h-8 bg-white/5 rounded"></div>
            </div>
            <div className="absolute bottom-6 left-6">
                <p className="text-white/60 text-xs mb-1">Sales Growth</p>
                <p className="text-3xl md:text-5xl font-bold text-white/20">+127%</p>
            </div>
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <Image src={goZentricImage} alt="Irth Image" width={400} height={400}/>
        </div>
    </div>

    {/* Extra space */}
    <div className="col-span-full h-86"></div>

</div>

        </section>
    );
}
