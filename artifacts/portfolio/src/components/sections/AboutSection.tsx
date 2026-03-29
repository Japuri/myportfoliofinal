import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "WebGL"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "REST APIs"]
  },
  {
    title: "Design",
    skills: ["Figma", "UI/UX", "Wireframing", "Prototyping", "Design Systems"]
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-40 bg-card border-y border-border/30 relative">
      {/* Decorative vertical line */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-border/50 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left: Image & Title */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-display"
            >
              The <span className="italic text-primary">Mind</span><br/> Behind the Code
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-square sm:w-3/4 lg:w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group"
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <img 
                src={`${import.meta.env.BASE_URL}images/avatar.png`} 
                alt="Portrait" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Right: Bio & Skills */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-invert prose-lg text-muted-foreground font-sans mb-16"
            >
              <p className="text-foreground text-xl md:text-2xl font-medium leading-relaxed">
                I bridge the gap between design and engineering, crafting products that look beautiful and function flawlessly.
              </p>
              <p>
                With over 5 years of experience in the digital space, I've had the privilege of building software for start-ups, established brands, and creative agencies. My approach is rooted in a deep appreciation for minimal aesthetics and robust, scalable architecture.
              </p>
              <p>
                When I'm not writing code, you'll probably find me exploring typography, reading sci-fi, or trying to perfect my espresso extraction.
              </p>
            </motion.div>

            <div id="skills" className="flex flex-col gap-12 pt-12 border-t border-border/30">
              {SKILL_CATEGORIES.map((category, idx) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12"
                >
                  <h3 className="text-sm font-mono uppercase tracking-widest text-primary w-32 shrink-0">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-background border border-border text-xs font-mono text-muted-foreground rounded-full hover:border-primary hover:text-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
