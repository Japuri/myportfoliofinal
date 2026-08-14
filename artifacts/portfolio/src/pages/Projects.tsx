import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, ExternalLink, Github, Lock, Maximize2, Smartphone } from "lucide-react";
import { ALL_PROJECTS, type Project, type ProjectCategory } from "@/components/sections/ProjectsSection";

const CATEGORY_ORDER: ProjectCategory[] = ["Mobile Development", "AI Platforms", "Software Platforms"];
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [, navigate] = useLocation();
  const [activeFilter, setActiveFilter] = useState<"all" | "github">("all");

  const visibleProjects = ALL_PROJECTS
    .map((project, index) => ({ project, index }))
    .filter(({ project }) =>
      activeFilter === "all" ? !project.githubRepository : project.githubRepository,
    );

  const handleClick = (project: Project) => {
    if (project.internal) {
      navigate(project.href);
    } else if (project.href) {
      window.open(project.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-6">
      <div className="max-w-[1000px] mx-auto">

        <div className="mb-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Profile
          </button>

          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {activeFilter === "all" ? "Live Projects" : "GitHub repositories"}
              </h1>
              <p className="text-muted-foreground text-sm">
                {activeFilter === "all"
                  ? "Published apps and platforms available to explore."
                  : "Projects built for private use and source-code exploration."}
              </p>
            </div>
            <a href="https://github.com/Japuri" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 shrink-0">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-6" aria-label="Project filters">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            aria-pressed={activeFilter === "all"}
            className={`px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
              activeFilter === "all"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/40"
            }`}
          >
            Live Projects
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("github")}
            aria-pressed={activeFilter === "github"}
            className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
              activeFilter === "github"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/40"
            }`}
          >
            <Github className="w-4 h-4" />
            GitHub repositories
          </button>
        </div>

        <div className="space-y-10">
          {CATEGORY_ORDER.map((category) => {
            const projectsInCategory = visibleProjects.filter(({ project }) => project.category === category);
            if (projectsInCategory.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/50 mb-4">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {projectsInCategory.map(({ project, index }) => {
                    const isClickable = project.internal || Boolean(project.href);
                    return (
                    <button
                      key={project.slug}
                      onClick={() => handleClick(project)}
                      disabled={!isClickable}
                      className={`p-5 border-b border-border rounded-lg transition-colors group flex flex-col text-left ${isClickable ? "hover:bg-muted/30 cursor-pointer" : "cursor-default"}`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-xs font-mono text-muted-foreground/50 bg-muted px-2 py-0.5 rounded">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {project.appStore ? (
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                              {project.rank}
                            </span>
                            <Smartphone className="w-4 h-4 text-primary/60" />
                          </div>
                        ) : project.href ? (
                          <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                        ) : (
                          <Lock className="w-4 h-4 text-muted-foreground/40" />
                        )}
                      </div>

                      {project.image && (
                        <div
                          role="button"
                          tabIndex={0}
                          title="Click to view full size"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(`${import.meta.env.BASE_URL}${project.image}`, "_blank", "noopener,noreferrer");
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.stopPropagation();
                              window.open(`${import.meta.env.BASE_URL}${project.image}`, "_blank", "noopener,noreferrer");
                            }
                          }}
                          className="relative mb-3 rounded-lg overflow-hidden border border-border/60 bg-muted cursor-zoom-in group/img"
                        >
                          <img
                            src={`${import.meta.env.BASE_URL}${project.image}`}
                            alt={`${project.title} screenshot`}
                            className="w-full h-auto object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors flex items-center justify-center">
                            <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      )}

                      <h2 className={`font-semibold text-foreground mb-2 text-base ${isClickable ? "group-hover:text-primary transition-colors" : ""}`}>
                        {project.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                        {project.longDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 bg-primary/8 text-primary/80 rounded font-medium border border-primary/15">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-muted-foreground/60 mt-3 pt-3 border-t border-border/50 font-mono">
                        {project.url}
                      </p>
                    </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
