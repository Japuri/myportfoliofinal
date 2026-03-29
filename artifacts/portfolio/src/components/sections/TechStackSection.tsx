export function TechStackSection() {
  return (
    <section className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Tech Stack</h2>
        <a href="#" className="text-sm text-primary hover:underline font-medium">View All &rarr;</a>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">DevOps & Cloud</h3>
          <div className="flex flex-wrap gap-2">
            {["AWS", "Docker", "Kubernetes", "GitHub Actions"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
