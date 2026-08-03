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
        description: "The reference for HTML, CSS, and JavaScript — still the most reliable source when you need the real spec, not a blog's summary of it.",
        href: "https://developer.mozilla.org/",
      },
      {
        name: "roadmap.sh",
        description: "Visual, up-to-date roadmaps for frontend, backend, DevOps, and more — useful for spotting gaps in what you know.",
        href: "https://roadmap.sh/",
      },
      {
        name: "freeCodeCamp",
        description: "Free, structured, project-based curriculum covering web development fundamentals through full stacks.",
        href: "https://www.freecodecamp.org/",
      },
      {
        name: "The Odin Project",
        description: "A free full-stack curriculum built around actually shipping projects, not just watching videos.",
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
        description: "Machine learning research paired with the code that implements it — good for going past the marketing layer of AI.",
        href: "https://paperswithcode.com/",
      },
    ],
  },
  {
    category: "Staying Current",
    resources: [
      {
        name: "Hacker News",
        description: "Where a lot of the software industry argues about what actually matters, in real time.",
        href: "https://news.ycombinator.com/",
      },
      {
        name: "dev.to",
        description: "A community-driven feed of practical, often refreshingly unglamorous engineering writing.",
        href: "https://dev.to/",
      },
      {
        name: "GitHub Trending",
        description: "A daily pulse on what the developer community is actually building and adopting right now.",
        href: "https://github.com/trending",
      },
      {
        name: "TLDR Newsletter",
        description: "A short daily roundup of tech, startup, and AI news for people who don't have time to read ten sites a day.",
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
        A hand-picked list of the resources I keep coming back to — for learning to build software,
        getting into AI engineering, and staying current. Free or freemium, and genuinely worth your time.
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
