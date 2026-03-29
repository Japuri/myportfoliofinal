const CERTIFICATIONS = [
  { name: "AWS Certified Solutions Architect", provider: "Amazon Web Services" },
  { name: "Google Cloud Professional Developer", provider: "Google" },
  { name: "Meta Front-End Developer Professional", provider: "Meta" }
];

export function CertificationsSection() {
  return (
    <section className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Recent Certifications</h2>
        <a href="#" className="text-sm text-primary hover:underline font-medium">View All &rarr;</a>
      </div>

      <div className="space-y-4">
        {CERTIFICATIONS.map((cert, i) => (
          <div key={i} className="flex justify-between items-center border-b border-border/50 pb-4 last:border-0 last:pb-0">
            <div>
              <h3 className="font-medium text-foreground text-sm">{cert.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{cert.provider}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
