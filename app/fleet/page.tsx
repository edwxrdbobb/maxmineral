"use client"

import { motion } from "framer-motion"
import HeaderEnhanced from "@/components/header-enhanced"
import PageHero from "@/components/page-hero"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import { useState } from "react"

export default function FleetPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const equipmentCategories = [
    {
      title: "Excavators",
      description: "Crawler & Wheel Excavators",
      image: "/fleet-images/crawler-wheel-excavators.jpg",
    },
    {
      title: "Cranes & Lifting",
      description: "Heavy lifting solutions",
      image: "/fleet-images/crane-and-lifter.webp",
    },
    {
      title: "Bulldozers & Dozers",
      description: "Dozers & Motor Graders",
      image: "/fleet-images/dozer-and-motor-graders.webp",
    },
    {
      title: "Dump Trucks & Haulers",
      description: "Articulated Dump Trucks",
      image: "/fleet-images/dump-trucks.jpg",
    },
    {
      title: "Loaders & Skid Steers",
      description: "Compact & medium loaders",
      image: "/fleet-images/loader-and-skid.jpg",
    },
    {
      title: "Operators & Support",
      description: "Certified operators available",
      image: "/fleet-images/hyundai-adt-on-slope.jpg",
    },
  ]

  const faqs = [
    { question: "What services does Max's Precious Minerals offer?", category: "left" },
    { question: "How can I request a quote for equipment rental?", category: "left" },
    { question: "Does Max's Precious Minerals handle both small and large-scale equipment needs?", category: "left" },
    { question: "What sets Max's Precious Minerals apart from other equipment rental companies?", category: "left" },
    { question: "Is Max's Precious Minerals licensed and insured?", category: "left" },
    { question: "How long does a typical equipment rental take to deliver?", category: "right" },
    {
      question: "Does Max's Precious Minerals provide maintenance and support for rented equipment?",
      category: "right",
    },
    { question: "What are the equipment rental rates?", category: "right" },
    { question: "What areas does Max's Precious Minerals serve?", category: "right" },
    { question: "What factors affect equipment rental pricing?", category: "right" },
  ]

  return (
    <main className="min-h-screen bg-slate-950">
      <HeaderEnhanced />
      <PageHero title="Our Equipment Fleet" breadcrumb={[{ label: "Home", href: "/" }, { label: "Equipment Fleet" }]} />

      {/* Equipment Grid Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">
              Complete Equipment Solutions
            </p>
            <h2 className="text-5xl font-bold text-white">Rental Machinery Available</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {equipmentCategories.map((equipment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative group overflow-hidden rounded-2xl h-64 cursor-pointer shadow-lg hover:shadow-yellow-500/25 border border-yellow-400/20 bg-slate-900/60"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-black/70 group-hover:via-slate-900/40 transition duration-300" />
                <div className="absolute inset-0">
                  <img
                    src={equipment.image}
                    alt={equipment.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-500 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <p className="text-xs tracking-[0.2em] text-yellow-300 uppercase mb-2">Category</p>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition">
                    {equipment.title}
                  </h3>
                  <p className="text-slate-200 text-sm mb-4 max-w-[240px]">{equipment.description}</p>
                  <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold text-sm shadow-lg shadow-yellow-500/40 group-hover:translate-y-[-2px] transition">
                    View fleet
                    <span className="text-lg leading-none">↗</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-wider mb-2">Frequently Asked Question</p>
            <h2 className="text-5xl font-bold text-white">You May Ask</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="p-6 border-l-4 border-yellow-400/70 bg-slate-950 text-white cursor-pointer hover:shadow-yellow-500/30 hover:shadow-lg transition rounded-r-lg"
              >
                <h3 className="font-bold text-white text-lg flex justify-between items-start gap-4">
                  <span>{faq.question}</span>
                  <span className={`text-yellow-400 text-2xl transition ${expandedFaq === idx ? "rotate-45" : ""}`}>
                    +
                  </span>
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
