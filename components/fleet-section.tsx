"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function FleetSection() {
  const equipmentTypes = [
    {
      title: "Crawler & Wheel Excavators",
      image: "/fleet-images/crawler-wheel-excavators.jpg",
    },
    {
      title: "Dozers & Motor Graders",
      image: "/fleet-images/dozer-and-motor-graders.webp",
    },
    {
      title: "Cranes & Lifting",
      image: "/fleet-images/crane-and-lifter.webp",
    },
    {
      title: "Articulated Dump Trucks",
      image: "/fleet-images/dump-trucks.jpg",
    },
    {
      title: "Loaders & Skid Steers",
      image: "/fleet-images/loader-and-skid.jpg",
    },
    {
      title: "Operators & Support",
      image: "/fleet-images/hyundai-adt-on-slope.jpg",
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
    </section>
  )
}
