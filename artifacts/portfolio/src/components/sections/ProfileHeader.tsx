import { MapPin, BadgeCheck, GraduationCap, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProfileHeader() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8 shadow-sm relative">
      <div className="flex justify-end mb-4">
        <div className="flex gap-2">
          <a href="https://github.com/Japuri" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Github className="w-4 h-4" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/jakob-edhel-puri-b6bb78288/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Linkedin className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden border border-border bg-muted">
          <img
            src={`${import.meta.env.BASE_URL}images/avatar.png`}
            alt="Jakob Edhel A Puri"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold">Jakob Edhel A Puri</h1>
              <BadgeCheck className="w-6 h-6 text-primary" />
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
              <MapPin className="w-4 h-4" />
              <span>Philippines</span>
            </div>

            <div className="text-sm font-medium text-foreground mb-3">
              Computer Engineering Student · Software Developer · AI Integration
            </div>

            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 flex w-fit items-center gap-1.5 px-2.5 py-1">
              <GraduationCap className="w-3.5 h-3.5" />
              Dean's Lister – Holy Angel University
            </Badge>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="mailto:japuri0318@gmail.com">
              <Button variant="outline" className="border-border gap-2 shadow-sm">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
            </a>
            <a href="https://github.com/Japuri" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/jakob-edhel-puri-b6bb78288/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
