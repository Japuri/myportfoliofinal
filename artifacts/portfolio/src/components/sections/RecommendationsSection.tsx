export function RecommendationsSection() {
  return (
    <section className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground mb-6">Recommendations</h2>

      <div className="p-5 bg-muted/50 rounded-lg border border-border/50 relative">
        <svg className="absolute top-4 left-4 w-6 h-6 text-muted-foreground/20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="italic text-sm text-muted-foreground relative z-10 pl-8 leading-relaxed mb-4">
          "Alex is an exceptional developer who consistently delivers high-quality work. His deep understanding of both frontend and backend technologies, combined with his recent dive into AI, makes him an invaluable asset to any team. He tackles complex problems with elegance and is always willing to share his knowledge."
        </p>
        <div className="pl-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-border" />
          <div>
            <div className="text-xs font-semibold text-foreground">Sarah Jenkins</div>
            <div className="text-xs text-muted-foreground">CTO at TechFlow</div>
          </div>
        </div>
      </div>
    </section>
  );
}
