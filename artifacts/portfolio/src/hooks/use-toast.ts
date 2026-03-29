// Using existing hook from context, but ensuring it's fully defined if missing.
// Based on typical shadcn/ui use-toast implementation.
import { useState, useEffect } from "react";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  duration?: number;
}

// Simple singleton for toast state
let toasts: Toast[] = [];
let listeners: Array<(toasts: Toast[]) => void> = [];

const notifyListeners = () => {
  listeners.forEach(listener => listener(toasts));
};

export const toast = ({ title, description, duration = 3000 }: Omit<Toast, "id">) => {
  const id = Math.random().toString(36).substring(2, 9);
  const newToast = { id, title, description, duration };
  
  toasts = [...toasts, newToast];
  notifyListeners();
  
  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id);
    notifyListeners();
  }, duration);
  
  return id;
};

export function useToast() {
  const [currentToasts, setCurrentToasts] = useState<Toast[]>(toasts);
  
  useEffect(() => {
    listeners.push(setCurrentToasts);
    return () => {
      listeners = listeners.filter(l => l !== setCurrentToasts);
    };
  }, []);
  
  return { toast, toasts: currentToasts };
}
