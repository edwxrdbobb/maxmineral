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
      className="pt-32 pb-16 px-4 md:px-6 bg-gradient-to-b from-yellow-400 to-yellow-300"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-black text-center mb-4">{title}</h1>
        {breadcrumb && (
          <div className="flex justify-center items-center gap-2 text-center text-black">
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
