"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import HeaderEnhanced from "@/components/header-enhanced"
import PageHero from "@/components/page-hero"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <HeaderEnhanced />
      <PageHero title="Contact Us" breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      {/* Contact Content Section */}
      <section className="py-24 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-wider mb-2">Get In Touch</p>
            <h2 className="text-5xl font-bold text-black">For Any Query</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0 }}
                className="p-6 border-l-4 border-yellow-400 bg-slate-900/50 rounded-r-lg"
              >
                <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <span>📍</span> Location
                </h3>
                <p className="text-slate-300 font-medium">7 Siaka Steven Street</p>
                <p className="text-slate-300 font-medium">Freetown, Sierra Leone</p>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-6 border-l-4 border-yellow-400 bg-slate-900/50 rounded-r-lg"
              >
                <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <span>☎️</span> Phone
                </h3>
                <p className="text-slate-300 font-bold">+1 (226) 353-0622</p>
                <p className="text-slate-400 text-sm">24/7 Dispatch & WhatsApp</p>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 border-l-4 border-yellow-400 bg-slate-900/50 rounded-r-lg"
              >
                <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <span>✉️</span> Email
                </h3>
                <p className="text-slate-300 break-all font-medium">maxpreciousmineralsandecports@gmail.com</p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-4 bg-yellow-400 p-8 rounded-lg"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-yellow-300 border border-yellow-500 rounded-lg text-black placeholder:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-black transition"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-yellow-300 border border-yellow-500 rounded-lg text-black placeholder:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-black transition"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-yellow-300 border border-yellow-500 rounded-lg text-black placeholder:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-black transition"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-yellow-300 border border-yellow-500 rounded-lg text-black placeholder:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-black text-yellow-400 font-bold rounded-lg hover:bg-slate-900 transition uppercase tracking-wider"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
