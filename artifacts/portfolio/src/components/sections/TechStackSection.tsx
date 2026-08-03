export function TechStackSection() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Tech Stack</h2>
      </div>

      <div className="columns-1 md:columns-2 gap-x-8">
        <div className="mb-6 break-inside-avoid">
          <h3 className="text-sm font-medium text-foreground mb-3">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 break-inside-avoid">
          <h3 className="text-sm font-medium text-foreground mb-3">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Node.js",
              "Express.js",
              "FastAPI",
              "Django / Django REST Framework",
              "REST APIs",
              "WebSockets",
            ].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 break-inside-avoid">
          <h3 className="text-sm font-medium text-foreground mb-3">DevOps, Cloud & Infrastructure</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "AWS",
              "Docker",
              "Docker Compose",
              "Proxmox",
              "Linux",
              "GitHub Actions",
              "Vercel",
              "Netlify",
              "Render",
              "Railway",
              "Heroku",
              "AWS S3",
              "AWS Lambda",
              "AWS DynamoDB",
              "AWS Cognito",
              "AWS Amplify",
            ].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 break-inside-avoid">
          <h3 className="text-sm font-medium text-foreground mb-3">Networking & Systems</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "TCP/IP networking",
              "DNS",
              "Static IP configuration",
              "Netplan",
              "SSH",
              "SSH key authentication",
              "VPN / Tailscale",
              "Virtual machines",
              "Network interfaces / bridges",
              "Linux server administration",
              "RAID / storage concepts",
              "iDRAC",
              "Dell PowerEdge servers",
            ].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 break-inside-avoid">
          <h3 className="text-sm font-medium text-foreground mb-3">AI & Machine Learning</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "RAG (Retrieval-Augmented Generation)",
              "LLM integration",
              "AI automation",
              "LangChain",
              "OpenAI",
              "Anthropic / Claude",
              "Claude Code",
              "Codex",
              "AI-powered APIs",
              "Vector / knowledge-base concepts",
            ].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 break-inside-avoid">
          <h3 className="text-sm font-medium text-foreground mb-3">Databases & Data</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "PostgreSQL",
              "SQLite",
              "Supabase",
              "DynamoDB",
              "Database architecture",
              "Offline-first data storage",
            ].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 break-inside-avoid">
          <h3 className="text-sm font-medium text-foreground mb-3">Automation & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {["n8n", "Git", "GitHub", "Visual Studio Code"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 break-inside-avoid">
          <h3 className="text-sm font-medium text-foreground mb-3">Mobile</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React Native",
              "Expo",
              "iOS development",
              "iOS Simulator",
              "Apple App Store deployment",
            ].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 break-inside-avoid">
          <h3 className="text-sm font-medium text-foreground mb-3">Security</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Authentication & authorization concepts",
              "JWT",
              "OAuth concepts",
              "IAM concepts",
              "Data isolation",
              "Multi-tenant security",
              "DevSecOps concepts",
              "Privacy-first architecture",
            ].map((tech) => (
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
