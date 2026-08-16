import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type LoadingContextValue = {
  isLoading: boolean;
  /** Briefly show the loading bar, then run the action (navigation, external link, etc). */
  withLoading: (action: () => void, delayMs?: number) => void;
};

const LoadingContext = createContext<LoadingContextValue | null>(null);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const withLoading = useCallback((action: () => void, delayMs = 350) => {
    setIsLoading(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      action();
      setIsLoading(false);
    }, delayMs);
  }, []);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <LoadingContext.Provider value={{ isLoading, withLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error("useLoading must be used within a LoadingProvider");
  return ctx;
}

export function TopLoadingBar() {
  const { isLoading } = useLoading();
  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-primary/10 overflow-hidden">
      <div className="h-full w-1/3 bg-primary animate-[loading-bar_0.9s_ease-in-out_infinite]" />
    </div>
  );
}
