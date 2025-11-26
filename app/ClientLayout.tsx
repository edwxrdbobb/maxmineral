"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { AnimatePresence } from "framer-motion" // Added Framer Motion import

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AnimatePresence>{children}</AnimatePresence> {/* Wrapped children with AnimatePresence for animations */}
        <Analytics />
      </body>
    </html>
  )
}
