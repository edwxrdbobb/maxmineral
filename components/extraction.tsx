export default function Extraction() {
  const minerals = [
    {
      name: "Diamonds",
      image: "/rough-diamonds-crystals.jpg",
      description: "High-quality rough diamonds",
    },
    {
      name: "Gold",
      image: "/gold-ore-precious-metal.jpg",
      description: "Pure refined gold ingots",
    },
    {
      name: "Minerals",
      image: "/mineral-ore-extraction.jpg",
      description: "Rare earth elements",
    },
  ]

  return (
    <section id="extraction" className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-2">Product Range</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Our Minerals</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {minerals.map((mineral, idx) => (
            <div key={idx} className="group overflow-hidden rounded-lg">
              <div className="h-72 overflow-hidden rounded-lg mb-4">
                <img
                  src={mineral.image || "/placeholder.svg"}
                  alt={mineral.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">{mineral.name}</h3>
              <p className="text-muted-foreground">{mineral.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
