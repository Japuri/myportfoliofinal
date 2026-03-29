import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-background pt-8 pb-6 mt-8">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {currentYear} Jakob Edhel A Puri. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:japuri0318@gmail.com" className="hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
          </a>
          <a href="https://github.com/Japuri" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/jakob-edhel-puri-b6bb78288/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
