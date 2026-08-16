import { ExternalLink, Smartphone } from "lucide-react";
import { useLocation } from "wouter";
import { useLoading } from "@/lib/loading";

export type ProjectCategory = "Mobile Development" | "AI Platforms" | "Software Platforms";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  href: string;
  tags: string[];
  category: ProjectCategory;
  internal?: boolean;
  appStore?: boolean;
  rank?: string;
  platform?: string;
  githubRepository?: boolean;
  image?: string;
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
    category: "Mobile Development",
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
    category: "Mobile Development",
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
    category: "Mobile Development",
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
    category: "Software Platforms",
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
    category: "Software Platforms",
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
    category: "Software Platforms",
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
    category: "AI Platforms",
    internal: false,
    githubRepository: true,
  },
  {
    slug: "vaulti",
    title: "Vaulti",
    description: "Self-hosted, privacy-focused cloud storage — live with paying customers",
    longDescription: "A subscription-based, privacy-focused cloud storage platform I designed, built, and operate solo under my company, CloudAeri, as a private alternative to Google Photos/Drive. Runs on a self-managed Dell PowerEdge R630 with a Dockerized Nextcloud stack behind a Cloudflare Tunnel and no exposed inbound ports, RAID1-backed automated backups, and custom monitoring/alerting — live with real, paying customers.",
    url: "vaulti.cloudaeri.com",
    href: "https://vaulti.cloudaeri.com/",
    tags: ["Nextcloud", "Proxmox", "Docker", "PostgreSQL", "Cloudflare Tunnel", "mdadm RAID1", "Postfix"],
    category: "Software Platforms",
    internal: false,
  },
  {
    slug: "flooring-services",
    title: "Flooring Services",
    description: "Business website for a flooring services company",
    longDescription: "A professional business website for a flooring services company, featuring service listings, galleries, and contact forms.",
    url: "github.com/Japuri/flooring-services",
    href: "https://github.com/Japuri/flooring-services",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Software Platforms",
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
    category: "Software Platforms",
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
    category: "AI Platforms",
    internal: false,
  },
  {
    slug: "job-discovery-pipeline",
    title: "Job Discovery Pipeline",
    description: "Automated internship/job discovery pipeline built on n8n",
    longDescription: "A self-hosted n8n pipeline that pulls listings from 3 job APIs and an RSS feed every 6 hours, normalizes each source's differently-shaped data into a common schema, scores relevance with a weighted keyword system (title matches weighted above description matches), and deduplicates against an existing Notion database by URL before writing new matches into a tracker.",
    url: "Self-hosted · n8n workflow",
    href: "",
    tags: ["n8n", "Docker", "Tailscale", "Notion API", "JavaScript", "REST/RSS"],
    category: "AI Platforms",
    internal: false,
    image: "images/job-pipeline-screenshot.png",
  },
];

export const LIVE_PROJECTS = ALL_PROJECTS.filter(project => !project.githubRepository);

export function ProjectsSection() {
  const [, navigate] = useLocation();
  const { withLoading } = useLoading();

  const handleClick = (project: Project) => {
    if (project.internal) {
      withLoading(() => navigate(project.href));
    } else if (project.href) {
      withLoading(() => window.open(project.href, "_blank", "noopener,noreferrer"));
    }
  };

  const preview = LIVE_PROJECTS.slice(0, 4);

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Recent Projects</h2>
        <button
          onClick={() => withLoading(() => navigate("/projects"))}
          className="text-sm text-primary hover:underline font-medium"
        >
          View All &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border">
        {preview.map((project, i) => (
          <button
            key={i}
            onClick={() => handleClick(project)}
            className="py-4 first:pt-0 hover:bg-muted/30 -mx-2 px-2 rounded-lg transition-colors flex flex-col text-left group"
          >
            <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground/50 mb-1">
              {project.category}
            </span>
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
        onClick={() => withLoading(() => navigate("/projects"))}
        className="mt-4 w-full py-2.5 text-sm text-muted-foreground border border-dashed border-border rounded-lg hover:border-primary/40 hover:text-primary transition-colors"
      >
        View all {LIVE_PROJECTS.length} live projects &rarr;
      </button>
    </section>
  );
}
