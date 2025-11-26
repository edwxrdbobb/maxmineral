"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeaderEnhanced() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-lg border-b border-yellow-400/20"
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-yellow-400/40 shadow-lg shadow-yellow-500/10"
          >
            <Image
              src="/logo.png"
              alt="Max Precious Minerals logo"
              width={56}
              height={56}
              className="w-full h-full object-contain p-1.5"
              priority
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white hidden sm:inline group-hover:text-yellow-400 transition">
              Max Precious
            </span>
            <span className="text-xs text-yellow-400">Minerals & Equipment</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "HOME", href: "/" },
            { label: "ABOUT", href: "/about" },
            { label: "FLEET", href: "/fleet" },
            { label: "CONTACT", href: "/contact" },
          ].map((item) => (
            <motion.div key={item.label} whileHover={{ y: -2 }}>
              <Link
                href={item.href}
                className="text-sm font-semibold text-slate-300 hover:text-yellow-400 transition relative group uppercase tracking-wider"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm font-semibold text-yellow-400 border border-yellow-400/50 rounded-lg hover:bg-yellow-400/10 transition"
          >
            Call Dispatch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition shadow-lg hover:shadow-yellow-500/50"
          >
            Request Quote
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden" onClick={() => setIsOpen(!isOpen)} whileHover={{ scale: 1.1 }}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-t border-yellow-400/20 p-4 space-y-4"
        >
          {[
            { label: "HOME", href: "/" },
            { label: "ABOUT", href: "/about" },
            { label: "FLEET", href: "/fleet" },
            { label: "CONTACT", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-sm font-semibold text-slate-300 hover:text-yellow-400 transition uppercase"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 space-y-2 border-t border-yellow-400/20">
            <button className="w-full px-4 py-2 text-sm font-semibold text-yellow-400 border border-yellow-400/50 rounded-lg hover:bg-yellow-400/10 transition">
              Call Dispatch
            </button>
            <button className="w-full px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
              Request Quote
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
