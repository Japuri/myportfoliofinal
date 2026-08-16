import { useLocation, useParams } from "wouter";
import { ArrowLeft, Trophy, Download } from "lucide-react";
import { ALL_PROJECTS } from "@/components/sections/ProjectsSection";
import { Button } from "@/components/ui/button";
import { useLoading } from "@/lib/loading";

const APP_DETAILS: Record<string, {
  tagline: string;
  fullDescription: string[];
  features: string[];
  appStoreUrl?: string;
  icon: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
}> = {
  travii: {
    tagline: "Your Personal Travel Book",
    fullDescription: [
      "Travii turns your flights and trips into beautiful, keepsake-style boarding passes. A simple travel tracking app that lets you log every journey and build a private digital collection of your travels — right on your phone.",
      "Meet Ravi, your travel companion, who helps you make the most of every journey. Whether you fly frequently or travel occasionally, Travii keeps your adventures organized and accessible without clutter or complexity.",
      "All data stays on your device. No cloud, no tracking, no ads — your memories are yours alone.",
      "Within just one week of its App Store launch, Travii climbed to #1 in Paid Apps.",
    ],
    features: [
      "Flight & trip logging with departure, arrival, and trip details",
      "Boarding pass-style keepsake tickets for every journey",
      "Trip organization by grouping related flights and trips",
      "Travel statistics at a glance",
      "100% private & local — all data stays on your phone",
      "Add notes and stories with Ravi, your travel companion",
    ],
    appStoreUrl: "https://apps.apple.com/ph/app/travii/id6769711933",
    icon: "images/travii-icon.png",
    accentColor: "text-blue-600",
    gradientFrom: "from-blue-50",
    gradientTo: "to-indigo-50",
  },
  morrii: {
    tagline: "Your Private Journal, Your Memories",
    fullDescription: [
      "Morrii is a beautifully simple journal app designed for those who want to document their daily life without compromising their privacy. Capture your moments, replay your memories, and reflect on the person you've become — all without ever leaving your device.",
      "In a world where everything you write is uploaded, analyzed, and monetized, Morrii offers something radical: complete privacy. Every thought, every memory, every reflection stays entirely on your device. No cloud. No syncing. No servers. Just you and your stories.",
      "No ads. No tracking. No compromise. One-time payment with lifetime updates.",
      "Morrii reached #4 in Paid Apps on the App Store shortly after launch.",
    ],
    features: [
      "Private journal with complete on-device data storage",
      "Capture moments, replay memories, and reflect on your journey",
      "No cloud, no syncing, no servers — total privacy",
      "No ads, no analytics, no tracking of any kind",
      "Clean, distraction-free interface",
      "One-time purchase with lifetime updates",
    ],
    appStoreUrl: "https://apps.apple.com/ph/app/morrii/id6768354843",
    icon: "images/morrii-icon.png",
    accentColor: "text-emerald-600",
    gradientFrom: "from-emerald-50",
    gradientTo: "to-teal-50",
  },
  kalimot: {
    tagline: "Shared Pet Care, Without the Guesswork",
    fullDescription: [
      "Kalimot is a privacy-first iOS app for households to manage shared pet care, built and shipped end-to-end as a solo project — from architecture to App Store submission.",
      "Multi-person households can lose track of who fed, walked, or medicated a pet and when. Kalimot solves that with a simple shared daily checklist, helping prevent double-feeding, missed care, and unclear accountability.",
      "There are no accounts and no logins. A join code connects a household's devices, keeping the experience simple while allowing everyone to stay in sync.",
      "Kalimot is currently ranked #5 in Paid Apps.",
    ],
    features: [
      "Shared daily checklist for feeding, walking, medication, and other care",
      "Household device linking with a simple join code",
      "Clear record of who completed each care task and when",
      "Designed to prevent double-feeding and missed care",
      "No accounts, no logins, and a privacy-first experience",
      "Built and shipped end-to-end as a solo iOS project",
    ],
    icon: "images/kalimot-icon.png",
    accentColor: "text-stone-700",
    gradientFrom: "from-stone-50",
    gradientTo: "to-amber-50",
  },
};

export default function AppDetail() {
  const [, navigate] = useLocation();
  const { withLoading } = useLoading();
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const project = ALL_PROJECTS.find(p => p.slug === slug);
  const detail = slug ? APP_DETAILS[slug] : undefined;

  if (!project || !detail) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Project not found</p>
          <Button onClick={() => withLoading(() => navigate("/projects"))} variant="outline">Back to Projects</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto">

        {/* Back nav */}
        <button
          onClick={() => withLoading(() => navigate("/projects"))}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          All Projects
        </button>

        {/* Hero */}
        <div className={`bg-gradient-to-br ${detail.gradientFrom} ${detail.gradientTo} border border-border rounded-2xl p-8 md:p-12 mb-8`}>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border border-border/30 shadow-lg shrink-0 bg-white">
              <img
                src={`${import.meta.env.BASE_URL}${detail.icon}`}
                alt={`${project.title} icon`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">{project.title}</h1>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  <Trophy className="w-3.5 h-3.5" />
                  {project.rank}
                </span>
              </div>
              <p className={`text-lg font-medium ${detail.accentColor} mb-3`}>{detail.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 bg-white/70 text-foreground rounded-full border border-border/60 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mb-6 pb-6 border-b border-border">
          <h2 className="text-base font-semibold text-foreground mb-4">About</h2>
          <div className="space-y-3">
            {detail.fullDescription.map((para, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">{para}</p>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6 pb-6 border-b border-border">
          <h2 className="text-base font-semibold text-foreground mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {detail.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 divide-x divide-border mb-6 pb-6 border-b border-border">
          <div className="text-center">
            <Trophy className="w-5 h-5 text-amber-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-foreground">{project.rank?.split(" ")[0]}</div>
            <div className="text-xs text-muted-foreground">Paid Apps</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-foreground mb-1">iOS</div>
            <div className="text-xs text-muted-foreground">Platform</div>
          </div>
          <div className="text-center">
            <Download className="w-5 h-5 text-primary mx-auto mb-2" />
            <div className="text-lg font-bold text-foreground">App Store</div>
            <div className="text-xs text-muted-foreground">Available on</div>
          </div>
        </div>

        {/* App Store CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-14 h-14 rounded-2xl overflow-hidden border border-border/30 shadow shrink-0 bg-white">
            <img
              src={`${import.meta.env.BASE_URL}${detail.icon}`}
              alt={`${project.title} icon`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm font-semibold text-foreground">{project.title}</p>
            <p className="text-xs text-muted-foreground">
              {detail.appStoreUrl ? "iOS · Paid App · App Store" : "iOS · Paid App · App Store listing"}
            </p>
          </div>
          {detail.appStoreUrl ? (
            <a href={detail.appStoreUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gap-2 bg-black text-white hover:bg-black/90 px-6">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                View on App Store
              </Button>
            </a>
          ) : (
            <span className="text-xs text-muted-foreground text-center sm:text-right max-w-[180px]">
              App Store link coming soon
            </span>
          )}
        </div>

      </div>
    </div>
  );
}
