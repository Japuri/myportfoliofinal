import { useLocation } from "wouter";
import { Github, FolderKanban, Award, CalendarDays } from "lucide-react";
import { ALL_PROJECTS } from "@/components/sections/ProjectsSection";
import { CERTIFICATIONS } from "@/components/sections/CertificationsSection";

const EVENTS = CERTIFICATIONS.filter((cert) => cert.type === "participation");
const CERTS = CERTIFICATIONS.filter((cert) => cert.type === "certificate");
const GITHUB_USERNAME = "Japuri";

export function AboutSection() {
  const [, navigate] = useLocation();

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-foreground">About Me</h2>
      <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
        <p>
          I'm a full-stack software developer and founder. I build modern web and mobile applications, with a focus on system design, infrastructure, networking, and generative AI.
        </p>
        <p>
          I'm currently building OceanAlpha and constantly exploring new technologies, solving real-world problems, and turning ideas into software that people can actually use.
        </p>
        <p>
          In my free time, my hobby is building apps that people actually use — I like picking apart fun, tricky problems and shipping something real out the other end.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button
          onClick={() => navigate("/projects")}
          className="text-left p-4 rounded-lg border border-border/50 hover:border-primary/40 hover:bg-muted/30 transition-all group"
        >
          <div className="flex items-center gap-2 mb-2 text-muted-foreground">
            <FolderKanban className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">Projects</span>
          </div>
          <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {ALL_PROJECTS.length}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Shipped across mobile, AI, and software platforms
          </p>
        </button>

        <div className="p-4 rounded-lg border border-border/50">
          <div className="flex items-center gap-2 mb-2 text-muted-foreground">
            <CalendarDays className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">Events Attended</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{EVENTS.length}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Seminars, workshops &amp; tech talks
          </p>
        </div>

        <div className="p-4 rounded-lg border border-border/50">
          <div className="flex items-center gap-2 mb-2 text-muted-foreground">
            <Award className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">Certifications</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{CERTS.length}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Udacity, Alison &amp; Simplilearn
          </p>
        </div>
      </div>

      {EVENTS.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/50 mb-3">
            Recent Events
          </h3>
          <div className="grid grid-cols-1 divide-y divide-border">
            {EVENTS.map((event, i) => (
              <div key={i} className="py-3 first:pt-0 flex items-start gap-3">
                <CalendarDays className="w-3.5 h-3.5 text-primary/60 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground leading-snug">{event.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{event.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="flex items-center gap-2 mb-3 text-muted-foreground">
          <Github className="w-4 h-4" />
          <h3 className="text-xs font-semibold uppercase tracking-wide">GitHub Activity</h3>
        </div>
        <div className="p-4 rounded-lg border border-border/50 overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/2563eb/${GITHUB_USERNAME}`}
            alt={`${GITHUB_USERNAME}'s GitHub contribution activity`}
            className="w-full min-w-[640px]"
            loading="lazy"
          />
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline font-medium mt-2 inline-block"
        >
          View full profile on GitHub &rarr;
        </a>
      </div>
    </section>
  );
}
