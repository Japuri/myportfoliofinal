import { useLocation, useParams } from "wouter";
import { ArrowLeft, Star, Trophy, Smartphone, Download } from "lucide-react";
import { ALL_PROJECTS } from "@/components/sections/ProjectsSection";
import { Button } from "@/components/ui/button";

const APP_DETAILS: Record<string, {
  tagline: string;
  fullDescription: string[];
  features: string[];
  screenshots: { bg: string; label: string }[];
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
}> = {
  travii: {
    tagline: "Your ultimate travel companion",
    fullDescription: [
      "Travii is a beautifully designed iOS travel companion app built to make every journey smoother, smarter, and more memorable. From trip planning to on-the-go navigation, Travii puts everything you need in one place.",
      "Within just one week of its App Store launch, Travii climbed to #1 in Paid Apps — a testament to the intuitive design and real utility it brings to travelers.",
      "Built with Swift and SwiftUI, Travii delivers a native iOS experience with fluid animations, offline support, and deep integration with Apple Maps and system features.",
    ],
    features: [
      "Smart trip itinerary builder",
      "Offline maps and navigation",
      "Local recommendations engine",
      "Packing list with smart suggestions",
      "Flight and hotel tracking",
      "Travel journal with photo memories",
    ],
    screenshots: [
      { bg: "from-blue-500 to-indigo-600", label: "Home" },
      { bg: "from-indigo-500 to-violet-600", label: "Explore" },
      { bg: "from-sky-500 to-blue-600", label: "Itinerary" },
      { bg: "from-violet-500 to-purple-600", label: "Journal" },
    ],
    accentColor: "text-blue-600",
    gradientFrom: "from-blue-50",
    gradientTo: "to-indigo-50",
  },
  morrii: {
    tagline: "Build better daily habits",
    fullDescription: [
      "Morrii is a minimalist lifestyle and habit-tracking iOS app designed for people who value clarity and intention in their daily routines. With a clean interface and smart reminders, it helps you stay consistent without feeling overwhelmed.",
      "Morrii reached #4 in Paid Apps on the App Store shortly after launch, resonating with users who want a focused, distraction-free tool for personal growth.",
      "Crafted with SwiftUI, Morrii embraces Apple's Human Interface Guidelines to deliver a calm, premium experience that feels right at home on any iPhone.",
    ],
    features: [
      "Minimal daily habit tracker",
      "Streak and progress visualization",
      "Smart notification scheduling",
      "Weekly reflection prompts",
      "Focus mode with Do Not Disturb",
      "iCloud sync across devices",
    ],
    screenshots: [
      { bg: "from-emerald-500 to-teal-600", label: "Dashboard" },
      { bg: "from-teal-500 to-cyan-600", label: "Habits" },
      { bg: "from-green-500 to-emerald-600", label: "Progress" },
      { bg: "from-cyan-500 to-sky-600", label: "Reflect" },
    ],
    accentColor: "text-emerald-600",
    gradientFrom: "from-emerald-50",
    gradientTo: "to-teal-50",
  },
};

export default function AppDetail() {
  const [, navigate] = useLocation();
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const project = ALL_PROJECTS.find(p => p.slug === slug);
  const detail = slug ? APP_DETAILS[slug] : undefined;

  if (!project || !detail) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Project not found</p>
          <Button onClick={() => navigate("/projects")} variant="outline">Back to Projects</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-6">
      <div className="max-w-[900px] mx-auto">

        {/* Back nav */}
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          All Projects
        </button>

        {/* Hero */}
        <div className={`bg-gradient-to-br ${detail.gradientFrom} ${detail.gradientTo} border border-border rounded-2xl p-8 md:p-12 mb-8`}>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${detail.screenshots[0].bg} flex items-center justify-center shadow-lg shrink-0`}>
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">{project.title}</h1>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  <Trophy className="w-3.5 h-3.5" />
                  {project.rank}
                </span>
              </div>
              <p className={`text-lg font-medium ${detail.accentColor} mb-1`}>{detail.tagline}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 bg-white/70 text-foreground rounded-full border border-border/60 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: Description + Features */}
          <div className="lg:col-span-3 space-y-6">

            {/* About */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-base font-semibold text-foreground mb-4">About</h2>
              <div className="space-y-3">
                {detail.fullDescription.map((para, i) => (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed">{para}</p>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-base font-semibold text-foreground mb-4">Key Features</h2>
              <ul className="space-y-2.5">
                {detail.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm text-center">
                <Trophy className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">{project.rank?.split(" ")[0]}</div>
                <div className="text-xs text-muted-foreground">Paid Apps</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm text-center">
                <Star className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">iOS</div>
                <div className="text-xs text-muted-foreground">Platform</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm text-center">
                <Download className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">App Store</div>
                <div className="text-xs text-muted-foreground">Available on</div>
              </div>
            </div>

          </div>

          {/* Right: Screenshots */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-base font-semibold text-foreground mb-4">Screenshots</h2>
              <div className="grid grid-cols-2 gap-3">
                {detail.screenshots.map((screen, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className={`w-full aspect-[9/19] rounded-2xl bg-gradient-to-b ${screen.bg} shadow-md flex flex-col items-center justify-center relative overflow-hidden`}>
                      {/* Phone notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-black/20 rounded-full" />
                      {/* Screen content placeholder */}
                      <div className="flex flex-col items-center gap-2 px-3 mt-4">
                        <div className="w-8 h-8 bg-white/20 rounded-xl" />
                        <div className="w-14 h-1.5 bg-white/30 rounded-full" />
                        <div className="w-10 h-1 bg-white/20 rounded-full" />
                        <div className="mt-2 space-y-1.5 w-full">
                          <div className="h-6 bg-white/15 rounded-lg w-full" />
                          <div className="h-6 bg-white/15 rounded-lg w-full" />
                          <div className="h-6 bg-white/10 rounded-lg w-3/4" />
                        </div>
                      </div>
                      {/* Home indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full" />
                    </div>
                    <span className="text-xs text-center text-muted-foreground font-medium">{screen.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/60 text-center mt-4 italic">
                Upload real screenshots to replace these previews
              </p>
            </div>

            {/* App Store CTA */}
            <div className="mt-4 bg-card border border-border rounded-xl p-5 shadow-sm text-center">
              <Smartphone className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium text-foreground mb-1">Available on the App Store</p>
              <p className="text-xs text-muted-foreground mb-4">iOS · Paid App</p>
              <Button className="w-full gap-2 bg-black text-white hover:bg-black/90">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                View on App Store
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
