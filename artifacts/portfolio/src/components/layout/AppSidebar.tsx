import {
  User,
  Layers,
  FolderKanban,
  Briefcase,
  Star,
  Award,
  BookMarked,
  Mail,
  Github,
  Linkedin,
  BadgeCheck,
  Sun,
  Moon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/use-theme";
import type { SectionKey } from "@/pages/Home";

export const NAV_ITEMS: { key: SectionKey; label: string; icon: typeof User }[] = [
  { key: "about", label: "About", icon: User },
  { key: "stack", label: "Tech Stack", icon: Layers },
  { key: "projects", label: "Projects", icon: FolderKanban },
  { key: "experience", label: "Experience", icon: Briefcase },
  { key: "recommendations", label: "Recommendations", icon: Star },
  { key: "certifications", label: "Certifications", icon: Award },
  { key: "resources", label: "Resources", icon: BookMarked },
];

export function AppSidebar({
  active,
  onSelect,
}: {
  active: SectionKey;
  onSelect: (key: SectionKey) => void;
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 shrink-0 rounded-xl overflow-hidden border border-sidebar-border bg-muted transition-colors duration-300">
            <img
              src={`${import.meta.env.BASE_URL}images/avatar-nobg.png`}
              alt="Jakob Edhel A Puri"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm truncate">Jakob Edhel A Puri</span>
              <BadgeCheck className="w-3.5 h-3.5 text-primary shrink-0" />
            </div>
            <p className="text-xs text-muted-foreground truncate">App · Software · AI · Infra</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton
                    isActive={active === item.key}
                    onClick={() => onSelect(item.key)}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 gap-3">
        <a href="mailto:japuri0318@gmail.com" className="w-full">
          <Button className="w-full gap-2" size="sm">
            <Mail className="w-4 h-4" />
            Send Email
          </Button>
        </a>
        <div
          className="flex items-center justify-between gap-2 px-1 py-1.5 rounded-md border border-sidebar-border"
          data-testid="theme-toggle"
        >
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {theme === "dark" ? (
              <Moon className="w-3.5 h-3.5" />
            ) : (
              <Sun className="w-3.5 h-3.5" />
            )}
            <span>{theme === "dark" ? "Dark" : "Light"} mode</span>
          </div>
          <Switch
            checked={theme === "dark"}
            onClick={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
            }}
            onCheckedChange={() => {}}
            aria-label="Toggle dark mode"
          />
        </div>
        <div className="flex items-center justify-center gap-1">
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
      </SidebarFooter>
    </Sidebar>
  );
}
