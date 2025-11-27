"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const minerals = [
  {
    title: "Diamonds",
    description: "High-quality rough diamonds",
    image: "/premium-rough-diamonds-crystals.jpg",
    badge: "Rough Stones",
  },
  {
    title: "Gold",
    description: "Pure refined gold ingots",
    image: "/pure-refined-gold-ingots-precious-metal.jpg",
    badge: "Bullion",
  },
  {
    title: "Minerals",
    description: "Rare earth elements",
    image: "/gold-ore-precious-metal.jpg",
    badge: "Ore Supply",
  },
]

export default function MineralsSection() {
  return (
    <section id="minerals" className="relative py-24 px-4 md:px-6 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.08),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(234,179,8,0.06),transparent_30%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">Product Range</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Minerals</h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Certified sourcing across Sierra Leone with full chain-of-custody reporting for every parcel.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {minerals.map((mineral, idx) => (
            <motion.article
              key={mineral.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/70 border border-yellow-400/20 shadow-lg shadow-yellow-500/10"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={mineral.image}
                  alt={mineral.title}
                  className="h-full w-full object-cover scale-105 group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-200 border border-yellow-400/40">
                  {mineral.badge}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition">
                  {mineral.title}
                </h3>
                <p className="text-slate-300">{mineral.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-yellow-400/30 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 px-6 py-5 shadow-lg shadow-yellow-500/10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-300">Traceable Supply</p>
            <p className="text-white font-semibold">Book a parcel inspection or request assay certificates.</p>
          </div>
          <Link href="/minerals" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition">
            Explore Minerals
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
