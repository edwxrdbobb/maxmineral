"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function StatsEnhanced() {
  const [isInView, setIsInView] = useState(false)

  const stats = [
    { number: 109, label: "Expert Workers", suffix: "" },
    { number: 485, label: "Happy Clients", suffix: "" },
    { number: 189, label: "Completed Projects", suffix: "" },
    { number: 20, label: "Running Projects", suffix: "" },
  ]

  const AnimatedNumber = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return

      const duration = 2000
      const increment = end / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)

      return () => clearInterval(timer)
    }, [isInView, end])

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <motion.section
      onViewportEnter={() => setIsInView(true)}
      className="py-16 px-4 md:px-6 bg-gradient-to-r from-slate-950 via-yellow-950/40 to-slate-950"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="text-center py-4"
          >
            <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-2">
              <AnimatedNumber end={stat.number} suffix={stat.suffix} />
            </div>
            <p className="text-slate-300 text-sm uppercase font-bold tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
