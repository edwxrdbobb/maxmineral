"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
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
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">Get In Touch</p>
            <h2 className="text-5xl font-bold text-white">For Any Query</h2>
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
                className="p-6 border-l-4 border-yellow-400/70 bg-slate-900/60 rounded-r-lg shadow-lg shadow-black/30"
              >
                <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Location
                </h3>
                <p className="text-slate-300 font-medium">7 Siaka Steven Street</p>
                <p className="text-slate-300 font-medium">Freetown, Sierra Leone</p>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-6 border-l-4 border-yellow-400/70 bg-slate-900/60 rounded-r-lg shadow-lg shadow-black/30"
              >
                <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Phone
                </h3>
                <p className="text-slate-300 font-bold">+1 (226) 353-0622</p>
                <p className="text-slate-400 text-sm">24/7 Dispatch & WhatsApp</p>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 border-l-4 border-yellow-400/70 bg-slate-900/60 rounded-r-lg shadow-lg shadow-black/30"
              >
                <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Email
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
              className="space-y-4 bg-slate-900/70 p-8 rounded-2xl border border-yellow-400/25 shadow-lg shadow-black/30"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-yellow-400/30 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-400/70 focus:bg-slate-800/90 transition"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-yellow-400/30 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-400/70 focus:bg-slate-800/90 transition"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-yellow-400/30 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-400/70 focus:bg-slate-800/90 transition"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-yellow-400/30 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-400/70 focus:bg-slate-800/90 transition resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold rounded-lg hover:shadow-[0_15px_45px_rgba(234,179,8,0.35)] transition uppercase tracking-wider"
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
