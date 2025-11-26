"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-header-bg/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <span className="text-header-bg font-bold text-sm">M</span>
          </div>
          <span className="text-lg font-bold text-foreground hidden sm:inline">Max Precious Minerals</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
            About
          </Link>
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition">
            Services
          </Link>
          <Link href="#extraction" className="text-sm text-muted-foreground hover:text-foreground transition">
            Minerals
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
            Contact
          </Link>
        </div>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="hidden md:inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition text-sm font-medium"
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border p-4 space-y-4">
          <Link href="#about" className="block text-sm text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="#services" className="block text-sm text-muted-foreground hover:text-foreground">
            Services
          </Link>
          <Link href="#extraction" className="block text-sm text-muted-foreground hover:text-foreground">
            Minerals
          </Link>
          <Link href="#contact" className="block text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
