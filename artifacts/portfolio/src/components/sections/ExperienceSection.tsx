const EXPERIENCES = [
  {
    title: "Junior Full-Stack Developer",
    company: "Infratratus I.T. Services",
    year: "Present",
    isCurrentJob: true,
  },
  {
    title: "Full-Stack Developer (Freelance)",
    company: "Self-Employed · 3 Years",
    year: "2022–2025",
    isCurrentJob: false,
  },
  {
    title: "Dean's Lister",
    company: "Computer Engineering – University",
    year: "Ongoing",
    isCurrentJob: false,
  },
  {
    title: "B.S. Computer Engineering",
    company: "University (Current Student)",
    year: "2022–",
    isCurrentJob: false,
  },
  {
    title: "Hello World! 🎉",
    company: "Wrote my first line of code",
    year: "2019",
    isCurrentJob: false,
  },
];

export function ExperienceSection() {
  return (
    <section className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground mb-6">Experience</h2>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[7px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="relative flex items-start gap-4">
            <div className={`w-4 h-4 mt-1 rounded-sm border-2 shrink-0 z-10 ${
              exp.isCurrentJob
                ? "border-primary bg-primary"
                : "border-primary bg-background"
            }`} />
            <div className="flex-1 pb-1 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-medium text-foreground text-sm">{exp.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{exp.company}</p>
              </div>
              <span className={`text-xs font-medium shrink-0 ${
                exp.isCurrentJob ? "text-primary" : "text-muted-foreground"
              }`}>
                {exp.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
