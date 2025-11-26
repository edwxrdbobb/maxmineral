"use client"

import { motion } from "framer-motion"

export default function ExtractionEnhanced() {
  const minerals = [
    {
      name: "Diamonds",
      image: "/premium-rough-diamonds-crystals.jpg",
      description: "High-quality rough diamonds",
    },
    {
      name: "Gold",
      image: "/pure-refined-gold-ingots-precious-metal.jpg",
      description: "Pure refined gold ingots",
    },
    {
      name: "Minerals",
      image: "/rare-earth-mineral-ore-extraction.jpg",
      description: "Rare earth elements",
    },
  ]

  return (
    <section id="extraction" className="py-24 px-4 md:px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-2 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
            Product Range
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">Our Minerals</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {minerals.map((mineral, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="h-72 overflow-hidden rounded-xl"
                >
                  <img
                    src={mineral.image || "/placeholder.svg"}
                    alt={mineral.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl flex items-end p-6">
                  <p className="text-white text-sm font-semibold">{mineral.description}</p>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{mineral.name}</h3>
              <p className="text-slate-400">{mineral.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
