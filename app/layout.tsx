import type { Metadata, Viewport } from "next"

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
        {children}
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            background-color: #0a0a0a;
            color: #f5f5f5;
            font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            line-height: 1.6;
          }
          
          ::selection {
            background: rgba(0, 191, 255, 0.3);
            color: #f5f5f5;
          }
          
          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background: #0a0a0a;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #262626;
            border-radius: 3px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 191, 255, 0.6);
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 20px rgba(0, 191, 255, 0.3); }
            50% { box-shadow: 0 0 40px rgba(0, 191, 255, 0.6); }
          }
        `}</style>
      </body>
    </html>
  )
}
