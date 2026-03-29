import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";

const PROJECTS = [
  {
    title: "Aura E-Commerce",
    category: "Full-Stack Dev",
    description: "A high-performance headless e-commerce platform built with Next.js, tailored for a luxury fashion brand with complex product variations.",
    image: `${import.meta.env.BASE_URL}images/project-4.png`,
    year: "2024",
  },
  {
    title: "Nexus Dashboard",
    category: "Frontend UI",
    description: "Real-time analytics dashboard for a fintech startup featuring complex data visualizations and a heavily customized component library.",
    image: `${import.meta.env.BASE_URL}images/project-3.png`,
    year: "2023",
  },
  {
    title: "Lumina App",
    category: "Mobile Design",
    description: "A wellness application focusing on mindfulness. Implemented smooth gesture animations and a calming dark-mode aesthetic.",
    image: `${import.meta.env.BASE_URL}images/project-2.png`,
    year: "2023",
  },
  {
    title: "Syntax Studio",
    category: "Creative Dev",
    description: "A digital agency portfolio featuring WebGL particle systems, custom cursor interactions, and seamless page transitions.",
    image: `${import.meta.env.BASE_URL}images/project-1.png`,
    year: "2022",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-32"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-display">Selected <span className="italic text-muted-foreground">Work</span></h2>
          </div>
          <p className="text-muted-foreground max-w-sm font-sans text-sm md:text-base">
            A curated selection of recent projects focusing on exceptional user interfaces and scalable architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-y-24 md:gap-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 flex justify-center"
        >
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="group flex items-center gap-3 px-6 py-3 border border-border hover:border-primary text-sm font-mono transition-colors"
          >
            View GitHub Archive
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 group-hover:text-primary transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Temporary import for the icon used in the button below the projects
import { ArrowUpRight } from "lucide-react";
