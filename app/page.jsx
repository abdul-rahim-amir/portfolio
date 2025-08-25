import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseMe from "@/components/WhyChooseMe";
import ClientTestimonials from "@/components/ClientTestimonials";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
    return (
        <main>
            {/* Optional Custom Cursor */}
            <CustomCursor />

            {/* Sections */}
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <WhyChooseMe />
            <ClientTestimonials />
            <Footer />
        </main>
    );
}
