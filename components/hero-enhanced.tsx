"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function HeroEnhanced() {
  const heroImages = [
    "/fleet-images/crawler-wheel-excavators.jpg",
    "/fleet-images/crane-and-lifter.webp",
    "/fleet-images/dump-trucks.jpg",
    "/fleet-images/loader-and-skid.jpg",
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section id="home" className="relative w-full min-h-screen pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {heroImages.map((src, idx) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={{ opacity: idx === 0 ? 1 : 0 }}
            animate={{ opacity: currentImage === idx ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img src={src} alt="Heavy machinery on site" className="w-full h-full object-cover scale-105" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.12),transparent_25%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-start min-h-[calc(100vh-80px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm md:text-base font-bold tracking-widest uppercase text-yellow-400">
            Heavy Equipment, On Demand
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance leading-tight max-w-3xl drop-shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
        >
          Excavators, Dozers & Haulers Ready 24/7
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8 text-pretty leading-relaxed"
        >
          Dispatch-ready fleet across Sierra Leone with certified operators, 24/7 control room, and complete support for
          mining, construction, and infrastructure projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-300 text-black font-bold rounded-lg hover:shadow-[0_15px_45px_rgba(234,179,8,0.35)] transition uppercase tracking-wider"
          >
            Browse Fleet
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-yellow-400/70 text-yellow-200 font-bold rounded-lg hover:bg-yellow-400/10 transition uppercase tracking-wider backdrop-blur-sm"
          >
            Request Quote
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
