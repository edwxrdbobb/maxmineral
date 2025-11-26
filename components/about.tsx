"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-80 md:h-96 rounded-xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 z-10 rounded-xl" />
            <img
              src="/mining-operation-sierra-leone.jpg"
              alt="Heavy Machinery Rentals"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">
              About Max's Precious Minerals
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Heavy Machinery Rentals & Field Support
            </h2>

            <p className="text-slate-300 text-lg mb-4 leading-relaxed">
              For more than 15 years, Max's Precious Minerals has supplied mission-critical earthmoving, lifting, and
              material-handling equipment to miners, civil contractors, and infrastructure owners across Sierra Leone
              and the wider Mano River region.
            </p>

            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Our fleet of late-model excavators, dozers, cranes, articulated dump trucks, concrete equipment, and
              specialty attachments is paired with certified operators, in-house mechanics, and telemetry-backed
              preventative maintenance so you can mobilize with confidence.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition uppercase tracking-wider"
            >
              Explore the Fleet
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
