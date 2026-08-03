import { useEffect, useState } from "react";
import { ProfileHeader } from "@/components/sections/ProfileHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { RecommendationsSection } from "@/components/sections/RecommendationsSection";
import { AppSidebar, NAV_ITEMS } from "@/components/layout/AppSidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export type SectionKey =
  | "about"
  | "stack"
  | "projects"
  | "experience"
  | "recommendations"
  | "certifications";

export default function Home() {
  const [active, setActive] = useState<SectionKey>("about");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  const activeLabel = NAV_ITEMS.find((item) => item.key === active)?.label ?? "";

  return (
    <SidebarProvider>
      <AppSidebar active={active} onSelect={setActive} />
      <SidebarInset className="bg-[#fafafa]">
        <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4 bg-card">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4" />
          <h1 className="text-sm font-medium text-foreground">{activeLabel}</h1>
        </header>

        <div className="flex-1 p-4 sm:p-8">
          <div className="max-w-[760px] mx-auto">
            {active === "about" && (
              <>
                <ProfileHeader />
                <AboutSection />
              </>
            )}
            {active === "stack" && <TechStackSection />}
            {active === "projects" && <ProjectsSection />}
            {active === "experience" && <ExperienceSection />}
            {active === "recommendations" && <RecommendationsSection />}
            {active === "certifications" && <CertificationsSection />}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
