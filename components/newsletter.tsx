"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl p-12 md:p-16 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border border-yellow-400/30"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-600/5" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Receive the latest updates and news directly to your inbox. Get exclusive content about equipment
              availability and maintenance tips.
            </p>

            <motion.form
              onSubmit={(e) => {
                e.preventDefault()
                setEmail("")
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:border-yellow-400/60 transition"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition uppercase tracking-wider"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
