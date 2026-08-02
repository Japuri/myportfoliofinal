export function AboutSection() {
  return (
    <section className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8 shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-foreground">About Me</h2>
      <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
        <p>
          I'm a founder and full-stack software developer with a passion for building practical, impactful applications — from clean, responsive frontends to architecting reliable backend systems and RESTful APIs.
        </p>
        <p>
          Currently building OceanAlpha, a self-hosted DevSecOps platform that grounds infrastructure knowledge and safe automation in a user's own configs — architected and built solo, from the core RAG pipeline through a working multi-tenant SaaS with real payment integration.
        </p>
        <p>
          I've been freelancing for 3 years, delivering web solutions for businesses ranging from service companies to AI-powered platforms. I enjoy solving real-world problems through code — automating workflows, building dashboards, and integrating AI into everyday tools.
        </p>
        <p>
          Lately, I've been deeply focused on AI integration — exploring how large language models and intelligent systems can enhance the products I build, while staying grounded in real, defensible engineering: proper security architecture, genuine data isolation, and honest tradeoffs over hype.
        </p>
        <p>
          I'm driven by continuous learning and turning complex ideas into clean, working software.
        </p>
      </div>
    </section>
  );
}
