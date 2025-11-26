"use client"

export default function Hero() {
  return (
    <section className="relative w-full h-screen pt-20 overflow-hidden bg-hero-gradient">
      {/* Background minerals image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/precious-minerals-gold-silver-crystals-mining.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center text-center">
        <p className="text-accent text-sm md:text-base font-semibold mb-4 tracking-wide uppercase">Premium Resources</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
          Precious Minerals
          <br />
          <span className="text-accent">from Sierra Leone</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 text-pretty leading-relaxed">
          World-class mineral extraction with sustainable practices and certified quality standards
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition">
            Explore Minerals
          </button>
          <button className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  )
}
