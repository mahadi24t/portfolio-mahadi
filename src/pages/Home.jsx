import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { PublicationsSection } from "../components/PublicationsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { FloatingChat } from "../components/FloatingChat";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient Star Background */}
      <StarBackground />

      {/* Top Floating Navbar & Floating Dock */}
      <Navbar />

      {/* Main Narrative Sections Flow */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PublicationsSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer & Chat Widget */}
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Home;
