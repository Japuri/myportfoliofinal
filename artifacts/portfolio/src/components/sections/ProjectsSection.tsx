const PROJECTS = [
  {
    title: "CodeCred",
    description: "Online certifications for programmers",
    url: "codecred.dev"
  },
  {
    title: "BASE404",
    description: "Online coding bootcamp",
    url: "base-404.com"
  },
  {
    title: "DIIN.PH",
    description: "AI-powered wardrobe assistant",
    url: "diin.ph"
  },
  {
    title: "DYNAMIS Workout Tracker",
    description: "AI-powered workout tracker",
    url: "dynamis-app.online"
  }
];

export function ProjectsSection() {
  return (
    <section className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Recent Projects</h2>
        <a href="#" className="text-sm text-primary hover:underline font-medium">View All &rarr;</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <div key={i} className="p-4 border border-border rounded-lg hover:border-border/80 hover:shadow-sm transition-all bg-card flex flex-col justify-between h-full group cursor-pointer">
            <div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
            </div>
            <span className="text-xs text-muted-foreground/80 font-medium">{project.url}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
