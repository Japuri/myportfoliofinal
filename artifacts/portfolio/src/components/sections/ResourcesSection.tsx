import { ExternalLink } from "lucide-react";

type Resource = {
  name: string;
  description: string;
  href: string;
};

type ResourceGroup = {
  category: string;
  resources: Resource[];
};

const RESOURCE_GROUPS: ResourceGroup[] = [
  {
    category: "Learning to Build Software",
    resources: [
      {
        name: "MDN Web Docs",
        description: "The definitive reference for HTML, CSS, and JavaScript — the most reliable source when you need the actual specification, not a secondhand summary.",
        href: "https://developer.mozilla.org/",
      },
      {
        name: "roadmap.sh",
        description: "Visual, up-to-date roadmaps for frontend, backend, DevOps, and more — useful for identifying gaps in your knowledge.",
        href: "https://roadmap.sh/",
      },
      {
        name: "freeCodeCamp",
        description: "Free, structured, project-based curriculum covering web development fundamentals through full stacks.",
        href: "https://www.freecodecamp.org/",
      },
      {
        name: "The Odin Project",
        description: "A free full-stack curriculum built around shipping real projects rather than passively watching videos.",
        href: "https://www.theodinproject.com/",
      },
    ],
  },
  {
    category: "Getting into AI Engineering",
    resources: [
      {
        name: "Anthropic Documentation",
        description: "Docs for building with Claude — prompting, tool use, agents, and the API itself.",
        href: "https://docs.anthropic.com/",
      },
      {
        name: "OpenAI Documentation",
        description: "The API reference and guides for building with OpenAI's models.",
        href: "https://platform.openai.com/docs",
      },
      {
        name: "LangChain Docs",
        description: "Practical patterns for chaining LLM calls, retrieval, and agents into real applications.",
        href: "https://python.langchain.com/",
      },
      {
        name: "Papers with Code",
        description: "Machine learning research paired with its reference implementation — useful for understanding AI beyond the marketing narrative.",
        href: "https://paperswithcode.com/",
      },
    ],
  },
  {
    category: "Staying Current",
    resources: [
      {
        name: "Hacker News",
        description: "A real-time forum where much of the software industry debates what genuinely matters.",
        href: "https://news.ycombinator.com/",
      },
      {
        name: "dev.to",
        description: "A community-driven feed of practical, grounded engineering writing.",
        href: "https://dev.to/",
      },
      {
        name: "GitHub Trending",
        description: "A daily snapshot of what the developer community is currently building and adopting.",
        href: "https://github.com/trending",
      },
      {
        name: "TLDR Newsletter",
        description: "A concise daily roundup of tech, startup, and AI news for readers with limited time.",
        href: "https://tldr.tech/",
      },
    ],
  },
];

export function ResourcesSection() {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-foreground mb-2">Resources</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-[640px]">
        A curated list of resources I return to regularly — for learning to build software,
        getting into AI engineering, and staying current. All free or freemium, and worth the time.
      </p>

      <div className="space-y-8">
        {RESOURCE_GROUPS.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/50 mb-4">
              {group.category}
            </h3>
            <div className="grid grid-cols-1 divide-y divide-border">
              {group.resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 first:pt-0 hover:bg-muted/30 -mx-2 px-2 rounded-lg transition-colors flex items-start justify-between gap-4 group"
                >
                  <div className="min-w-0">
                    <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                      {resource.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
