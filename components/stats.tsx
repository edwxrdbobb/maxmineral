export default function Stats() {
  const stats = [
    { number: "15K+", label: "Carats Produced" },
    { number: "98%", label: "Quality Grade" },
    { number: "12", label: "Certifications" },
    { number: "45", label: "Countries Served" },
  ]

  return (
    <section className="py-16 px-4 md:px-6 bg-card">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center py-4">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
            <p className="text-muted-foreground text-sm uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
