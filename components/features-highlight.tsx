"use client"

import { motion } from "framer-motion"
import { SatelliteDish, ShieldCheck, Truck } from "lucide-react"

export default function FeaturesHighlight() {
  const features = [
    {
      icon: Truck,
      title: "Rapid Deployment",
      description:
        "Dispatch-ready fleet staged across Sierra Leone with lowboy haulage and customs clearing handled for you.",
    },
    {
      icon: ShieldCheck,
      title: "Certified Operators",
      description:
        "All machines come with NCCCO/OSHA-trained operators, preventative maintenance, and telemetry tracking.",
    },
    {
      icon: SatelliteDish,
      title: "24/7 Control Room",
      description:
        "Real-time dispatch, fuel, and service coordination keeps your pit, port, or site online day and night.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-yellow-400/20 hover:border-yellow-400/50 transition"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-yellow-500/10 border border-yellow-400/40 flex items-center justify-center text-yellow-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
