import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WebShowcaseSlider } from './components/WebShowcaseSlider';
import { AiAutomationSection } from './components/AiAutomationSection';
import { BusinessSystemsSection } from './components/BusinessSystemsSection';
import { CreativeDesignSection } from './components/CreativeDesignSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PortfolioSection } from './components/PortfolioSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#080B14] text-[#F8FAFC]">
      {/* Background Ambient Grid & Glow Canvas */}
      <div className="ambient-grid"></div>
      <div className="ambient-bg">
        <div className="ambient-orb ambient-orb-1"></div>
        <div className="ambient-orb ambient-orb-2"></div>
        <div className="ambient-orb ambient-orb-3"></div>
      </div>

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Experience Flow */}
      <main className="relative z-10">
        <Hero />
        <WebShowcaseSlider />
        <AiAutomationSection />
        <BusinessSystemsSection />
        <CreativeDesignSection />
        <ProcessTimeline />
        <WhyChooseUs />
        <PortfolioSection />
        <CtaSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
