import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      <div className="grain-overlay" />
      
      <div className="text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12rem] font-display font-bold text-transparent text-outline leading-none"
        >
          404
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl text-muted-foreground font-mono"
        >
          Lost in the void.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Link 
            href="/" 
            className="px-8 py-4 border border-border hover:border-primary hover:text-primary transition-colors text-sm font-mono tracking-widest uppercase"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
