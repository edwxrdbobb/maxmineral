"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, X } from "lucide-react"
import { useState } from "react"

export default function FleetSection() {
  const [selectedEquipment, setSelectedEquipment] = useState<null | (typeof equipmentTypes)[number]>(null)

  const equipmentTypes = [
    {
      title: "Crawler & Wheel Excavators",
      image: "/fleet-images/crawler-wheel-excavators.jpg",
      description: "Versatile digging power with multiple boom configurations and quick couplers.",
    },
    {
      title: "Dozers & Motor Graders",
      image: "/fleet-images/dozer-and-motor-graders.webp",
      description: "Precision grading and heavy push capacity for haul roads and pads.",
    },
    {
      title: "Cranes & Lifting",
      image: "/fleet-images/crane-and-lifter.webp",
      description: "All-terrain cranes, rough terrain units, and lifting specialists for complex picks.",
    },
    {
      title: "Articulated Dump Trucks",
      image: "/fleet-images/dump-trucks.jpg",
      description: "High-capacity haulers for tough underfoot conditions and steep gradients.",
    },
    {
      title: "Loaders & Skid Steers",
      image: "/fleet-images/loader-and-skid.jpg",
      description: "Material handling with quick-attach buckets, forks, and specialty tools.",
    },
    {
      title: "Operators & Support",
      image: "/fleet-images/hyundai-adt-on-slope.jpg",
      description: "Certified operators, riggers, and 24/7 maintenance coverage on every job.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="fleet" className="py-24 px-4 md:px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">Fleet Categories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">Premium Machinery Rentals</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {equipmentTypes.map((equipment, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onClick={() => setSelectedEquipment(equipment)}
              className="group relative overflow-hidden rounded-2xl h-52 cursor-pointer border border-yellow-400/15 bg-slate-900/60 shadow-lg shadow-black/30"
            >
              <div className="absolute inset-0">
                <Image
                  src={equipment.image}
                  alt={equipment.title}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover scale-105 group-hover:scale-110 transition duration-700"
                  priority={idx < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-slate-950/70 group-hover:via-black/50 transition" />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-2">Equipment</p>
                <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition">{equipment.title}</h3>
              </div>

              <div className="absolute bottom-4 right-4 text-yellow-300 bg-yellow-500/10 backdrop-blur-md border border-yellow-400/30 rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedEquipment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedEquipment(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-slate-950 border border-yellow-400/30 rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20"
          >
            <button
              onClick={() => setSelectedEquipment(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/60 border border-yellow-400/40 text-yellow-200 hover:bg-yellow-500/20 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative h-64">
              <Image
                src={selectedEquipment.image}
                alt={selectedEquipment.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            <div className="p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-yellow-300">Fleet Category</p>
              <h3 className="text-2xl font-bold text-white">{selectedEquipment.title}</h3>
              <p className="text-slate-300">{selectedEquipment.description}</p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="border border-yellow-400/20 rounded-lg p-3 bg-slate-900/60">
                  <p className="text-yellow-300 font-semibold mb-1">Availability</p>
                  <p>Dispatch-ready with operator and transport.</p>
                </div>
                <div className="border border-yellow-400/20 rounded-lg p-3 bg-slate-900/60">
                  <p className="text-yellow-300 font-semibold mb-1">Typical Use</p>
                  <p>Mining, civil earthworks, and heavy lift logistics.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
