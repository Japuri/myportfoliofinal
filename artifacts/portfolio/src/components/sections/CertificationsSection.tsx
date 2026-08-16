import { FileText, Award, ExternalLink } from "lucide-react";

export type Cert = {
  name: string;
  provider: string;
  href: string;
  type: "certificate" | "participation";
};

export const CERTIFICATIONS: Cert[] = [
  {
    name: "LLMOps: Building Real-World Applications With Large Language Models",
    provider: "Udacity",
    href: "https://www.udacity.com/certificate/e/b45c79ca-921b-11f1-895e-1f8def29d172",
    type: "certificate",
  },
  {
    name: "Operationalizing Cloud Security with Deepfence ThreatMapper",
    provider: "Udacity",
    href: "https://www.udacity.com/certificate/e/81875302-921c-11f1-8629-0b792aeae211",
    type: "certificate",
  },
  {
    name: "Certified Social Media (Network) Cyber Security & Analysis: Level 1",
    provider: "Alison",
    href: "https://alison.com",
    type: "certificate",
  },
  {
    name: "Introduction to Cyber Security",
    provider: "Simplilearn",
    href: "https://simplilearn.com",
    type: "certificate",
  },
  {
    name: 'General Assembly: "Level Up: Pioneering Computer Engineering in a Digital World"',
    provider: "Participation Certificate",
    href: "#",
    type: "participation",
  },
  {
    name: "ALAB Interactive Robotic Museum Tour",
    provider: "Participation Certificate",
    href: "#",
    type: "participation",
  },
  {
    name: "Python Powered Robotics",
    provider: "Participation Certificate",
    href: "#",
    type: "participation",
  },
  {
    name: "From Code to Community Impact in the Digital Era",
    provider: "Participation Certificate – Seminar",
    href: "#",
    type: "participation",
  },
];

export function CertificationsSection() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Certifications</h2>
      </div>

      <div className="space-y-3">
        {CERTIFICATIONS.map((cert, i) => (
          <a
            key={i}
            href={cert.href}
            target={cert.href !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/40 hover:bg-muted/30 transition-all group cursor-pointer"
            onClick={cert.href === "#" ? (e) => e.preventDefault() : undefined}
          >
            <div className="mt-0.5 shrink-0">
              {cert.type === "certificate" ? (
                <Award className="w-4 h-4 text-primary" />
              ) : (
                <FileText className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">{cert.provider}</p>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-0.5" />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground/60 mt-4 italic">Click any certificate to view or download</p>
    </section>
  );
}
