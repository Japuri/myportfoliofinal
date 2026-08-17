import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (origin?: { x: number; y: number }) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = (origin?: { x: number; y: number }) => {
    const next = theme === "dark" ? "light" : "dark";

    const root = document.documentElement;
    const x = origin?.x ?? window.innerWidth / 2;
    const y = origin?.y ?? window.innerHeight / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.style.setProperty("--theme-origin-x", `${x}px`);
    root.style.setProperty("--theme-origin-y", `${y}px`);
    root.style.setProperty("--theme-max-radius", `${maxRadius}px`);

    root.classList.add("theme-transitioning");
    if (next === "dark") {
      root.classList.add("theme-turning-dark");
    } else {
      root.classList.add("theme-turning-light");
    }

    window.setTimeout(() => setTheme(next), 20);

    window.setTimeout(() => {
      root.classList.remove("theme-transitioning", "theme-turning-dark", "theme-turning-light");
    }, 1400);
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
