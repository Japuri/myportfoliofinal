const EXPERIENCES = [
  {
    title: "Junior Full-Stack Developer",
    company: "Infratratus I.T. Services",
    year: "Present",
    isCurrentJob: true,
    description:
      "Build and maintain web platforms and internal tooling end-to-end — React/TypeScript frontends on FastAPI and Node.js backends, deployed on Docker and AWS. Working on infrastructure automation and safe AI-assisted operations, including RAG pipelines that ground LLM answers in real internal docs and configs instead of hallucinating them.",
  },
  {
    title: "Full-Stack Developer (Freelance)",
    company: "Self-Employed · 3 Years",
    year: "2022–2025",
    isCurrentJob: false,
    description:
      "Designed, built, and shipped software solo for clients and personal ventures — three React Native / Swift iOS apps (Travii, Morrii, Kalimot) that each cracked the Top 5 in Paid Apps within a week of launch, plus web platforms spanning real-time dashboards, route-finding tools, AI-powered generators, and business booking sites. Delivered the full lifecycle: architecture, auth, payments, deployment, and post-launch support.",
  },
  {
    title: "B.S. Computer Engineering",
    company: "Holy Angel University",
    year: "2022–",
    isCurrentJob: false,
    description:
      "Dean's Lister studying computer architecture, networking, and embedded systems alongside software engineering fundamentals — the systems-level grounding that now shows up in how I approach infrastructure, networking, and server administration work.",
  },
  {
    title: "Hello World! 🎉",
    company: "Wrote my first line of code",
    year: "2019",
    isCurrentJob: false,
    description:
      "Started teaching myself to code out of curiosity, well before any of this was a career plan. Everything since has built on that first script.",
  },
];

export function ExperienceSection() {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-foreground mb-6">Experience</h2>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[7px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="relative flex items-start gap-4">
            <div className={`w-4 h-4 mt-1 rounded-sm border-2 shrink-0 z-10 ${
              exp.isCurrentJob
                ? "border-primary bg-primary"
                : "border-primary bg-background"
            }`} />
            <div className="flex-1 pb-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
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
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
