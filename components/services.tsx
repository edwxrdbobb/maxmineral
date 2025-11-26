export default function Services() {
  const services = [
    {
      icon: "◆",
      title: "Diamond Extraction",
      description: "Premium quality diamonds sourced and certified to international standards",
    },
    {
      icon: "✦",
      title: "Gold Mining",
      description: "High-purity gold extraction with modern processing techniques",
    },
    {
      icon: "▲",
      title: "Mineral Processing",
      description: "State-of-the-art refinement and quality assurance protocols",
    },
    {
      icon: "◎",
      title: "Logistics & Export",
      description: "Secure transportation and international certification services",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-2">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Complete Solutions</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-card rounded-lg border border-border hover:border-accent transition group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:text-accent transition">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
