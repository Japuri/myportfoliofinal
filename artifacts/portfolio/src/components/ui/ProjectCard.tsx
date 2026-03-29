import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  index: number;
}

export function ProjectCard({ title, category, description, image, year, index }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-6"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent z-10 transition-colors duration-500" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Hover Reveal Link */}
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()}
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={`View ${title} project`}
        >
          <div className="w-20 h-20 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center text-foreground group-hover:scale-100 scale-50 transition-transform duration-500 delay-100">
            <ArrowUpRight size={24} />
          </div>
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-display mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm max-w-md">{description}</p>
        </div>
        
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 pt-1 sm:pt-0 border-t sm:border-none border-border/50">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">{category}</span>
          <span className="font-mono text-xs text-muted-foreground">{year}</span>
        </div>
      </div>
    </motion.div>
  );
}
