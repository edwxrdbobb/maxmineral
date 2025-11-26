"use client"

import { motion } from "framer-motion"
import HeaderEnhanced from "@/components/header-enhanced"
import PageHero from "@/components/page-hero"
import StatsEnhanced from "@/components/stats-enhanced"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeaderEnhanced />
      <PageHero title="About Us" breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      {/* About Content Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-wider">
              Welcome to Max's Precious Minerals
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                15+ Years Rental Machinery Excellence
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Max's Precious Minerals is a leading rental machinery provider with a rich history of delivering
                  premium equipment and support across diverse sectors. With over 15 years of experience in the
                  industry, we have established ourselves as a trusted partner for clients seeking reliable heavy
                  equipment solutions.
                </p>
                <p>
                  At Max's Precious Minerals, we are committed to exceeding expectations and setting new standards in
                  equipment rental and operator support. Our team of skilled professionals brings expertise, innovation,
                  and a passion for excellence to every rental and project we undertake.
                </p>
                <p>
                  From mining operations to construction projects, infrastructure development, and industrial
                  facilities, we have successfully supported a wide range of projects, earning a reputation for
                  reliability, integrity, and superior equipment quality.
                </p>
                <p>
                  Our dedication to customer satisfaction is evident in our transparent communication, attention to
                  detail, and commitment to delivering equipment on time and within budget. We take pride in our ability
                  to understand our clients' needs and tailor rental solutions that meet their unique requirements.
                </p>
                <p>
                  Choose Max's Precious Minerals for your next equipment rental and experience the difference that
                  expertise, professionalism, and dedication can make.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-300 text-black font-bold rounded-lg hover:shadow-[0_15px_45px_rgba(234,179,8,0.35)] transition"
              >
                Learn More
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-2xl border border-yellow-400/20"
            >
              <img
                src="/industrial-machinery-rental-equipment.jpg"
                alt="Max's Precious Minerals Equipment"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StatsEnhanced />

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
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
            {[
              "What equipment does Max's Precious Minerals offer for rental?",
              "How can I request a quote for equipment rental?",
              "Does Max's Precious Minerals handle both small and large-scale equipment needs?",
              "What sets Max's Precious Minerals apart from other equipment rental companies?",
              "Is Max's Precious Minerals licensed and insured?",
              "How long does a typical equipment rental take to deliver?",
            ].map((question, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 border-l-4 border-yellow-400/70 bg-slate-950 text-white cursor-pointer hover:shadow-yellow-500/30 hover:shadow-lg transition rounded-r-lg"
              >
                <h3 className="font-bold text-white text-lg flex justify-between items-start gap-4">
                  <span>{question}</span>
                  <span className="text-yellow-400 text-2xl">+</span>
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
