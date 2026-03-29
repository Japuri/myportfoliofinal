import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Datacastle",
    description: "Real-Time Spreadsheet Dashboard Platform",
    url: "github.com/jakobpuri/datacastle",
    href: "https://github.com/jakobpuri/datacastle",
  },
  {
    title: "Jeepneyroutes",
    description: "Jeepney route finder and navigation tool for commuters",
    url: "github.com/jakobpuri/jeepneyroutes",
    href: "https://github.com/jakobpuri/jeepneyroutes",
  },
  {
    title: "lovelink-connect",
    description: "Social connection and matchmaking web application",
    url: "github.com/jakobpuri/lovelink-connect",
    href: "https://github.com/jakobpuri/lovelink-connect",
  },
  {
    title: "workout-generator",
    description: "AI-powered personalized workout plan generator",
    url: "github.com/jakobpuri/workout-generator",
    href: "https://github.com/jakobpuri/workout-generator",
  },
  {
    title: "Flooring Services",
    description: "Business website for a flooring services company",
    url: "github.com/jakobpuri/flooring-services",
    href: "https://github.com/jakobpuri/flooring-services",
  },
  {
    title: "Handyman",
    description: "Home services and handyman booking platform",
    url: "github.com/jakobpuri/handyman",
    href: "https://github.com/jakobpuri/handyman",
  },
];

export function ProjectsSection() {
  return (
    <section className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Recent Projects</h2>
        <a
          href="https://github.com/jakobpuri"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline font-medium"
        >
          View All &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
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
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
            </div>
            <span className="text-xs text-muted-foreground/70 font-medium">{project.url}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
