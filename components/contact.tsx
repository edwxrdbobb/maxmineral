"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  return (
    <section id="contact" className="py-24 px-4 md:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">For Any Query</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-yellow-400/20"
          >
            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <span>📍</span> Location
              </h3>
              <p className="text-slate-300">7 Siaka Steven Street</p>
              <p className="text-slate-300">Freetown, Sierra Leone</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <span>☎️</span> Phone
              </h3>
              <p className="text-slate-300 font-bold">+1 (226) 353-0622</p>
              <p className="text-slate-400 text-sm">24/7 Dispatch & WhatsApp</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <span>✉️</span> Email
              </h3>
              <p className="text-slate-300 break-all">maxpreciousmineralsandecports@gmail.com</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-slate-800/50 border border-yellow-400/20 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-400/50 focus:bg-slate-800/80 transition"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-slate-800/50 border border-yellow-400/20 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-400/50 focus:bg-slate-800/80 transition"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-slate-800/50 border border-yellow-400/20 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-400/50 focus:bg-slate-800/80 transition"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 bg-slate-800/50 border border-yellow-400/20 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-400/50 focus:bg-slate-800/80 transition resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition uppercase tracking-wider"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
