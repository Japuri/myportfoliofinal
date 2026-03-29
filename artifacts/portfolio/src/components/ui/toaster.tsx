import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-card border border-border shadow-lg p-4 rounded-lg pointer-events-auto min-w-[300px]"
          >
            {t.title && <h4 className="font-medium text-foreground text-sm">{t.title}</h4>}
            {t.description && <p className="text-xs text-muted-foreground mt-1">{t.description}</p>}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
