import { ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

export const ALL_PROJECTS = [
  {
    title: "Datacastle",
    description: "Real-Time Spreadsheet Dashboard Platform",
    longDescription: "A powerful real-time dashboard platform for managing and visualizing spreadsheet data with live updates and collaborative features.",
    url: "github.com/Japuri/datacastle",
    href: "https://github.com/Japuri/datacastle",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
  },
  {
    title: "Jeepneyroutes",
    description: "Jeepney route finder and navigation tool for commuters",
    longDescription: "An interactive route-finding application that helps commuters navigate jeepney routes across the Philippines with ease.",
    url: "github.com/Japuri/jeepneyroutes",
    href: "https://github.com/Japuri/jeepneyroutes",
    tags: ["React", "Maps API", "TypeScript"],
  },
  {
    title: "lovelink-connect",
    description: "Social connection and matchmaking web application",
    longDescription: "A modern matchmaking and social connection platform with profile creation, smart matching, and real-time messaging.",
    url: "github.com/Japuri/lovelink-connect",
    href: "https://github.com/Japuri/lovelink-connect",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "workout-generator",
    description: "AI-powered personalized workout plan generator",
    longDescription: "Generates personalized workout plans using AI based on the user's fitness level, goals, and available equipment.",
    url: "github.com/Japuri/workout-generator",
    href: "https://github.com/Japuri/workout-generator",
    tags: ["Python", "OpenAI API", "React"],
  },
  {
    title: "Flooring Services",
    description: "Business website for a flooring services company",
    longDescription: "A professional business website for a flooring services company, featuring service listings, galleries, and contact forms.",
    url: "github.com/Japuri/flooring-services",
    href: "https://github.com/Japuri/flooring-services",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Handyman",
    description: "Home services and handyman booking platform",
    longDescription: "A full-featured home services booking platform connecting clients with handyman professionals for on-demand services.",
    url: "github.com/Japuri/handyman",
    href: "https://github.com/Japuri/handyman",
    tags: ["React", "PHP", "MySQL"],
  },
];

export function ProjectsSection() {
  const [, navigate] = useLocation();

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
        {ALL_PROJECTS.slice(0, 4).map((project, i) => (
          <a
            key={i}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-border rounded-lg hover:border-primary/50 hover:shadow-sm transition-all bg-card flex flex-col justify-between h-full group"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors shrink-0 ml-2" />
              </div>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-1 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-primary/8 text-primary/80 rounded font-medium border border-primary/15">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <button
        onClick={() => navigate("/projects")}
        className="mt-4 w-full py-2.5 text-sm text-muted-foreground border border-dashed border-border rounded-lg hover:border-primary/40 hover:text-primary transition-colors"
      >
        View all {ALL_PROJECTS.length} projects &rarr;
      </button>
    </section>
  );
}
