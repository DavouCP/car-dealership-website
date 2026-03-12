import type { Metadata, Viewport } from "next"
import { GlobalStyles } from "@/components/global-styles"

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
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ minHeight: "100vh" }}>
        <GlobalStyles />
        {children}
      </body>
    </html>
  )
}
