export function RecommendationsSection() {
  return (
    <section className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground mb-6">Recommendations</h2>

      <div className="p-5 bg-muted/50 rounded-lg border border-border/50 relative">
        <svg className="absolute top-4 left-4 w-6 h-6 text-muted-foreground/20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="italic text-sm text-muted-foreground relative z-10 pl-8 leading-relaxed mb-4">
          "Jakob is a highly dedicated and skilled developer who delivers quality work on every project. His ability to integrate AI technologies with practical software solutions sets him apart. A fast learner and reliable team member — I'd recommend him without hesitation."
        </p>
        <div className="pl-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
            IT
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">Infratratus I.T. Services</div>
            <div className="text-xs text-muted-foreground">Supervisor</div>
          </div>
        </div>
      </div>
    </section>
  );
}
