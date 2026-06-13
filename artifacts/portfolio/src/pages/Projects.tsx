import { useLocation } from "wouter";
import { ArrowLeft, ExternalLink, Github, Smartphone } from "lucide-react";
import { ALL_PROJECTS, type Project } from "@/components/sections/ProjectsSection";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [, navigate] = useLocation();

  const handleClick = (project: Project) => {
    if (project.internal) {
      navigate(project.href);
    } else {
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
              <h1 className="text-3xl font-bold text-foreground mb-2">All Projects</h1>
              <p className="text-muted-foreground text-sm">
                Web apps, iOS apps, and everything in between.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL_PROJECTS.map((project, i) => (
            <button
              key={i}
              onClick={() => handleClick(project)}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all group flex flex-col text-left cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-mono text-muted-foreground/50 bg-muted px-2 py-0.5 rounded">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {project.appStore ? (
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                      {project.rank}
                    </span>
                    <Smartphone className="w-4 h-4 text-primary/60" />
                  </div>
                ) : (
                  <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                )}
              </div>

              <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 text-base">
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
          ))}
        </div>

      </div>
    </div>
  );
}
