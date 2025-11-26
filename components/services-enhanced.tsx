"use client"

import { motion } from "framer-motion"
import { ClipboardList, Globe2, HardHat, Wrench } from "lucide-react"

export default function ServicesEnhanced() {
  const services = [
    {
      icon: HardHat,
      title: "Operator Assurance",
      description: "Skill-tested operators, riggers, and signalers for every crane, hauler, or lifting scope.",
    },
    {
      icon: Wrench,
      title: "Maintenance Fleet",
      description: "OEM diagnostics, on-site service trucks, and spare parts hubs cut downtime to minutes.",
    },
    {
      icon: ClipboardList,
      title: "Flexible Contracts",
      description: "Daily, weekly, or multi-year agreements with bundled fueling, insurance, and telemetry.",
    },
    {
      icon: Globe2,
      title: "Regional Coverage",
      description:
        "From mining operations to construction projects, infrastructure development, and industrial facilities.",
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
    <section id="services" className="py-24 px-4 md:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">More Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">Complete Solutions</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-yellow-400/20 hover:border-yellow-400/50 transition hover:shadow-lg hover:shadow-yellow-500/20"
            >
              <motion.div
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 8 }}
                className="w-12 h-12 mb-4 rounded-full bg-yellow-500/10 border border-yellow-400/40 flex items-center justify-center text-yellow-300"
              >
                <service.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
