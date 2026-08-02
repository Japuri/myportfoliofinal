import { ExternalLink, Smartphone } from "lucide-react";
import { useLocation } from "wouter";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  href: string;
  tags: string[];
  internal?: boolean;
  appStore?: boolean;
  rank?: string;
  platform?: string;
  githubRepository?: boolean;
};

export const ALL_PROJECTS: Project[] = [
  {
    slug: "travii",
    title: "Travii",
    description: "Travel companion iOS app — #1 in Paid Apps",
    longDescription: "An iOS travel companion app that reached #1 in Paid Apps on the App Store within a week of launch. Helps travelers plan, discover, and navigate destinations seamlessly.",
    url: "App Store · iOS",
    href: "/projects/travii",
    tags: ["React Native", "Expo", "iOS", "TestFlight"],
    internal: true,
    appStore: true,
    rank: "#1 in Paid Apps",
    platform: "iOS",
  },
  {
    slug: "morrii",
    title: "Morrii",
    description: "Lifestyle iOS app — #4 in Paid Apps",
    longDescription: "A lifestyle iOS app that debuted at #4 in Paid Apps on the App Store. A refined, minimal experience built for daily habits and personal growth.",
    url: "App Store · iOS",
    href: "/projects/morrii",
    tags: ["React Native", "Expo", "iOS", "TestFlight"],
    internal: true,
    appStore: true,
    rank: "#4 in Paid Apps",
    platform: "iOS",
  },
  {
    slug: "kalimot",
    title: "Kalimot",
    description: "Shared pet-care checklist app — #5 in Paid Apps",
    longDescription: "A privacy-first iOS app for households to coordinate shared pet care with a simple daily checklist, no accounts, and a join code that links household devices.",
    url: "App Store · iOS",
    href: "/projects/kalimot",
    tags: ["Swift", "SwiftUI", "Core Data", "CloudKit"],
    internal: true,
    appStore: true,
    rank: "#5 in Paid Apps",
    platform: "iOS",
  },
  {
    slug: "datacastle",
    title: "Datacastle",
    description: "Real-Time Spreadsheet Dashboard Platform",
    longDescription: "A powerful real-time dashboard platform for managing and visualizing spreadsheet data with live updates and collaborative features.",
    url: "datacstle.netlify.app",
    href: "https://datacstle.netlify.app/",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    internal: false,
  },
  {
    slug: "jeepneyroutes",
    title: "Jeepneyroutes",
    description: "Jeepney route finder and navigation tool for commuters",
    longDescription: "An interactive route-finding application that helps commuters navigate jeepney routes across the Philippines with ease.",
    url: "jeeproute.vercel.app",
    href: "https://jeeproute.vercel.app/",
    tags: ["React", "Maps API", "TypeScript"],
    internal: false,
  },
  {
    slug: "lovelink-connect",
    title: "lovelink-connect",
    description: "Social connection and matchmaking web application",
    longDescription: "A modern matchmaking and social connection platform with profile creation, smart matching, and real-time messaging.",
    url: "github.com/Japuri/lovelink-connect",
    href: "https://github.com/Japuri/lovelink-connect",
    tags: ["React", "Node.js", "MongoDB"],
    internal: false,
    githubRepository: true,
  },
  {
    slug: "workout-generator",
    title: "workout-generator",
    description: "AI-powered personalized workout plan generator",
    longDescription: "Generates personalized workout plans using AI based on the user's fitness level, goals, and available equipment.",
    url: "github.com/Japuri/workout-generator",
    href: "https://github.com/Japuri/workout-generator",
    tags: ["Python", "OpenAI API", "React"],
    internal: false,
    githubRepository: true,
  },
  {
    slug: "flooring-services",
    title: "Flooring Services",
    description: "Business website for a flooring services company",
    longDescription: "A professional business website for a flooring services company, featuring service listings, galleries, and contact forms.",
    url: "github.com/Japuri/flooring-services",
    href: "https://github.com/Japuri/flooring-services",
    tags: ["HTML", "CSS", "JavaScript"],
    internal: false,
    githubRepository: true,
  },
  {
    slug: "handyman",
    title: "Handyman",
    description: "Home services and handyman booking platform",
    longDescription: "A full-featured home services booking platform connecting clients with handyman professionals for on-demand services.",
    url: "github.com/Japuri/handyman",
    href: "https://github.com/Japuri/handyman",
    tags: ["React", "PHP", "MySQL"],
    internal: false,
    githubRepository: true,
  },
  {
    slug: "oceanalpha",
    title: "OceanAlpha",
    description: "Self-hosted, multi-tenant DevSecOps platform",
    longDescription: "OceanAlpha — A self-hosted, multi-tenant DevSecOps platform I designed and built solo, from architecture through a working payment system. It indexes infrastructure configs (Docker, Terraform, Kubernetes) and incident history, answers questions with real citations, and safely automates operations — without ever holding customers' SSH keys.",
    url: "oceanalpha.cloudaeri.com",
    href: "https://oceanalpha.cloudaeri.com/",
    tags: ["FastAPI", "ChromaDB", "Ollama", "SQLite", "Docker", "Kubernetes", "Cloudflare", "n8n", "Terraform", "PayMongo"],
    internal: false,
  },
];

export const LIVE_PROJECTS = ALL_PROJECTS.filter(project => !project.githubRepository);

export function ProjectsSection() {
  const [, navigate] = useLocation();

  const handleClick = (project: Project) => {
    if (project.internal) {
      navigate(project.href);
    } else {
      window.open(project.href, "_blank", "noopener,noreferrer");
    }
  };

  const preview = LIVE_PROJECTS.slice(0, 4);

  return (
    <section className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Recent Projects</h2>
        <button
          onClick={() => navigate("/projects")}
          className="text-sm text-primary hover:underline font-medium"
        >
          View All &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {preview.map((project, i) => (
          <button
            key={i}
            onClick={() => handleClick(project)}
            className="p-4 border border-border rounded-lg hover:border-primary/50 hover:shadow-sm transition-all bg-card flex flex-col text-left h-full group"
          >
            <div className="flex items-start justify-between mb-1 w-full">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              {project.appStore ? (
                <Smartphone className="w-3.5 h-3.5 text-primary/60 shrink-0 ml-2 mt-0.5" />
              ) : (
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors shrink-0 ml-2 mt-0.5" />
              )}
            </div>
            {project.rank && (
              <span className="text-xs font-semibold text-primary mb-1">🏆 {project.rank}</span>
            )}
            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-primary/8 text-primary/80 rounded font-medium border border-primary/15">
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate("/projects")}
        className="mt-4 w-full py-2.5 text-sm text-muted-foreground border border-dashed border-border rounded-lg hover:border-primary/40 hover:text-primary transition-colors"
      >
        View all {LIVE_PROJECTS.length} live projects &rarr;
      </button>
    </section>
  );
}
