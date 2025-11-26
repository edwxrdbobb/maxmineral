"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Dispatch & Office",
      items: [
        { label: "Address", value: "7 Sioka Steven Street, Freetown, Sierra Leone" },
        { label: "Tel", value: "+1 (226) 353-0622" },
        { label: "Email", value: "maxpreciousmineralsandecports@gmail.com" },
      ],
    },
    {
      title: "Fleet Highlights",
      items: [
        { label: "Crawler & Wheel Excavators", href: "#" },
        { label: "Dozers & Motor Graders", href: "#" },
        { label: "Cranes & Lifting", href: "#" },
        { label: "Articulated Dump Trucks", href: "#" },
        { label: "Concrete & Power Solutions", href: "#" },
      ],
    },
    {
      title: "Useful Pages",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Our Team", href: "#" },
        { label: "Projects", href: "#" },
        { label: "Testimonial", href: "#" },
      ],
    },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white py-16 px-4 md:px-6 border-t border-yellow-400/20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(234,179,8,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(234,179,8,0.08),transparent_30%)]" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 rounded-2xl border border-yellow-400/30 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-yellow-300 mb-2">Mobilize in hours</p>
            <h3 className="text-2xl font-bold text-white">Ready to dispatch equipment to your site?</h3>
            <p className="text-slate-300 text-sm mt-2">
              Contact our control room for availability, rates, and mobilization timelines.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30"
            >
              Contact Dispatch
            </Link>
            <Link
              href="/fleet"
              className="px-5 py-3 rounded-lg border border-yellow-400/60 text-yellow-200 hover:bg-yellow-400/10 transition"
            >
              Browse Fleet
            </Link>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-yellow-400/40 shadow-lg shadow-yellow-500/10">
                <Image
                  src="/logo.png"
                  alt="Max Precious Minerals logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain p-1.5"
                />
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-none">Max Precious</p>
                <p className="text-xs text-yellow-400">Minerals & Equipment</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Premium heavy equipment rentals and mineral extraction services across Sierra Leone.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (sectionIdx + 1) * 0.1 }}
            >
              <h4 className="font-bold mb-4 text-yellow-400 uppercase text-sm tracking-wider">{section.title}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link href={item.href} className="hover:text-yellow-400 transition">
                        {item.label}
                      </Link>
                    ) : (
                      <span>
                        {item.label}: {item.value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-yellow-400/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 Max's Precious Minerals. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {[
              { name: "Twitter", icon: Twitter },
              { name: "Facebook", icon: Facebook },
              { name: "LinkedIn", icon: Linkedin },
              { name: "Instagram", icon: Instagram },
              { name: "YouTube", icon: Youtube },
            ].map((social) => (
              <Link
                key={social.name}
                href="#"
                className="text-slate-400 hover:text-yellow-300 transition text-lg font-bold border border-yellow-400/0 hover:border-yellow-400/40 rounded-full p-2 bg-white/5"
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
