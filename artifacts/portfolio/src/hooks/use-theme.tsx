import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (origin?: { x: number; y: number }) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "theme";
const WIPE_MS = 700;

let activeTransition: ViewTransition | null = null;

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyThemeClass(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyThemeClass(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, []);

  const toggleTheme = (origin?: { x: number; y: number }) => {
    // A wipe already mid-flight fighting a new one is what actually reads as
    // "not smooth" — finish it instantly before starting the next transition.
    if (activeTransition) {
      activeTransition.skipTransition();
      activeTransition = null;
    }

    const next: Theme = theme === "dark" ? "light" : "dark";
    const x = origin?.x ?? window.innerWidth / 2;
    const y = origin?.y ?? window.innerHeight / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const applyChange = () => {
      setTheme(next);
      applyThemeClass(next);
      localStorage.setItem(STORAGE_KEY, next);
    };

    // Prefer the native View Transitions API: it swaps the theme instantly
    // under the hood and lets us animate a clip-path circle revealing the
    // new theme over the old one directly — no flat overlay, no hold.
    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyChange();
      return;
    }

    const transition = document.startViewTransition(applyChange);
    activeTransition = transition;
    transition.finished.finally(() => {
      if (activeTransition === transition) activeTransition = null;
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius + 8}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: WIPE_MS,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
