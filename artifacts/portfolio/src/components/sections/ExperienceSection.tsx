const EXPERIENCES = [
  { title: "AI Engineer", company: "Standard Chartered", year: "2025" },
  { title: "AI Ops Engineer", company: "Centre of Excellence for GenAI, Cambridge", year: "2025" },
  { title: "Senior Full-Stack Developer", company: "Core Technology, Cambridge", year: "2024" },
  { title: "Software Engineering Lead", company: "PocketDevs", year: "2022" },
  { title: "Lead Application Developer", company: "Bluewind Asia", year: "2021" },
  { title: "Software Engineer", company: "GCM", year: "2020" },
  { title: "BS Information Technology", company: "University of San Carlos", year: "2019" },
  { title: "Hello World!", company: "Wrote my first line of code", year: "2015" }
];

export function ExperienceSection() {
  return (
    <section className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground mb-6">Experience</h2>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[7px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="relative flex items-start gap-4">
            <div className="w-4 h-4 mt-1 rounded-sm border-2 border-primary bg-background shrink-0 z-10" />
            <div className="flex-1 pb-1 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-medium text-foreground text-sm">{exp.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{exp.company}</p>
              </div>
              <span className="text-xs font-medium text-muted-foreground shrink-0">{exp.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
