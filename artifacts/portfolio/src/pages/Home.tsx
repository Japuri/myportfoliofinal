import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  // Smooth scroll logic for anchor links is handled natively or in components,
  // but we can add a simple entry animation here if needed.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full bg-background selection:bg-primary selection:text-primary-foreground min-h-screen">
      {/* Global CSS Grain Overlay */}
      <div className="grain-overlay" />
      
      <CustomCursor />
      <Navbar />
      
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
