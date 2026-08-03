import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { ProfileHeader } from "@/components/sections/ProfileHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { RecommendationsSection } from "@/components/sections/RecommendationsSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-6 relative">
      <div className="max-w-[1000px] mx-auto">
        <ProfileHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <AboutSection />
            <TechStackSection />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <ProjectsSection />
            <ExperienceSection />
            <RecommendationsSection />
            <CertificationsSection />
          </div>
        </div>
      </div>

      <a href="mailto:japuri0318@gmail.com">
        <Button
          className="fixed bottom-6 right-6 rounded-full shadow-lg gap-2 h-12 px-6 bg-foreground text-background hover:bg-foreground/90 transition-all z-50"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Chat with Jakob</span>
        </Button>
      </a>
    </div>
  );
}
