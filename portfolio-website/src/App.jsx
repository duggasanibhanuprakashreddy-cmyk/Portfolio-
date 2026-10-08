import { useState } from 'react';
import Background3DGrid from './components/Background3DGrid';
import MarqueeTicker from './components/MarqueeTicker';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DeveloperExperienceSection from './components/DeveloperExperienceSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import JourneySection from './components/JourneySection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Ambient 3D Cyber Background & Cursor Spotlight */}
      <Background3DGrid />

      {/* Top Scrolling Infinite Headline Marquee */}
      <MarqueeTicker />

      {/* Floating Glassmorphic Pill Header */}
      <Navbar onResumeClick={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        <HeroSection onResumeClick={() => setIsResumeOpen(true)} />
        <DeveloperExperienceSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
