"use client"

import { motion } from "framer-motion"
import HeaderEnhanced from "@/components/header-enhanced"
import PageHero from "@/components/page-hero"
import StatsEnhanced from "@/components/stats-enhanced"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

const productCards = [
  {
    title: "Rough Diamonds",
    subtitle: "Parcel supply",
    description: "High-quality rough stones with Kimberley Process compliance and on-request gemological reporting.",
    image: "/rough-diamonds-crystals.jpg",
    meta: "Parcel lots: 5ct - 500ct",
  },
  {
    title: "Refined Gold",
    subtitle: "Bullion & dore",
    description: "99.5%+ refinery output, LBMA-aligned assay certificates, and insured custody until delivery.",
    image: "/pure-refined-gold-ingots-precious-metal.jpg",
    meta: "Bars & dore: 1kg - 12.5kg",
  },
  {
    title: "Gold Ore & Minerals",
    subtitle: "Bulk ore & concentrates",
    description: "Export-ready ore from controlled mine sites with full chain-of-custody and logistics support.",
    image: "/gold-ore-precious-metal.jpg",
    meta: "Containers or break-bulk",
  },
]

const assurancePoints = [
  { title: "ISO-aligned QA", detail: "Sampling, grading, and moisture control overseen by on-site inspectors." },
  { title: "Traceable exports", detail: "Export permits, royalties, and customs handled with transparent paperwork." },
  { title: "Secure logistics", detail: "Armored transfers, bonded storage, and insured airfreight options." },
  { title: "Client reporting", detail: "Live parcel updates, photographic evidence, and shipment milestones." },
]

export default function MineralsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeaderEnhanced />
      <PageHero title="Our Minerals" breadcrumb={[{ label: "Home", href: "/" }, { label: "Minerals" }]} />

      {/* Product Grid */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">Product Range</p>
            <h2 className="text-5xl font-bold text-white">Certified Minerals Supply</h2>
            <p className="text-slate-300 mt-4 max-w-3xl mx-auto">
              Sourced from Sierra Leone with rigorous compliance, on-site stewardship, and export-ready documentation
              for every shipment.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {productCards.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-900/70 border border-yellow-400/20 shadow-lg shadow-yellow-500/10"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover scale-105 group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-200 border border-yellow-400/40">
                    {item.subtitle}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  <p className="text-sm text-yellow-200">{item.meta}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance & Logistics */}
      <section className="py-24 px-4 md:px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider">Chain of Custody</p>
            <h3 className="text-4xl font-bold text-white">Assays, permits, and logistics handled.</h3>
            <p className="text-slate-300 leading-relaxed">
              We coordinate with government regulators, laboratories, and logistics partners to keep every shipment on
              schedule. From sample pulls to bonded storage and export clearance, our team manages the paperwork and
              security so you receive minerals with full provenance.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {assurancePoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-xl border border-yellow-400/30 bg-slate-900/70 p-4 shadow-lg shadow-yellow-500/10"
                >
                  <p className="text-yellow-200 font-semibold mb-1">{point.title}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{point.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-yellow-400/30 shadow-2xl shadow-yellow-500/20">
              <img
                src="/premium-rough-diamonds-crystals.jpg"
                alt="Premium rough diamonds"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-yellow-400/30">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-yellow-200">Quality Control</p>
                  <p className="text-white font-semibold">On-site inspectors & lab partners</p>
                </div>
                <span className="text-yellow-300 text-lg">✓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsEnhanced />
      <Newsletter />
      <Footer />
    </main>
  )
}
