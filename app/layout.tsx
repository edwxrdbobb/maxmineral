import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Max Precious Minerals | Premium Diamonds & Gold from Sierra Leone",
  description:
    "Trusted provider of high-quality precious minerals including diamonds, gold, and rare earth elements. ISO certified mining company based in Freetown, Sierra Leone.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.png", rel: "shortcut icon", type: "image/png" },
    ],
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
