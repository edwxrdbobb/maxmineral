"use client"

import { motion } from "framer-motion"

interface PageHeroProps {
  title: string
  breadcrumb?: { label: string; href?: string }[]
}

export default function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden pt-32 pb-16 px-4 md:px-6 bg-gradient-to-b from-slate-950 via-slate-950 to-black"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(234,179,8,0.08),transparent_25%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">{title}</h1>
        {breadcrumb && (
          <div className="flex justify-center items-center gap-2 text-center text-yellow-200">
            {breadcrumb.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {idx > 0 && <span>/</span>}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
}
