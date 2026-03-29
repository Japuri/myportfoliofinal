import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "hello@johndoe.com";
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: "Email copied to clipboard",
      description: "Looking forward to hearing from you!",
      duration: 3000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-widest text-primary mb-8"
        >
          04. WHAT'S NEXT?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display mb-8"
        >
          Get In <span className="italic text-outline hover:text-foreground">Touch</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto mb-16 text-lg"
        >
          Although I'm currently not looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative group"
        >
          <button 
            onClick={handleCopy}
            className="flex items-center gap-4 text-2xl md:text-4xl font-mono border-b-2 border-primary/30 pb-2 hover:border-primary transition-colors text-foreground"
          >
            {email}
            <span className="text-muted-foreground group-hover:text-primary transition-colors">
              {copied ? <CheckCircle size={24} /> : <Copy size={24} />}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
