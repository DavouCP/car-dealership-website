import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AutoLux — Premium Car Showcase",
  description:
    "Discover our exclusive collection of the world's most prestigious automobiles. 2025 luxury, supercar, EV, and SUV models curated for discerning drivers.",
  keywords: ["luxury cars", "premium cars", "car showcase", "supercars", "electric vehicles", "BMW", "Ferrari", "Porsche", "Tesla"],
  openGraph: {
    title: "AutoLux — Premium Car Showcase",
    description: "Explore our curated collection of 2025 luxury and high-performance vehicles.",
    type: "website",
  },
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
