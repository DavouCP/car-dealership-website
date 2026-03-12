"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const NAV_LINKS = ["Showcase", "About", "Contact"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-panel py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-accent/60 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-accent" />
            </div>
            <span className="text-foreground font-mono text-sm tracking-widest uppercase">
              AutoLux
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-muted-foreground hover:text-foreground text-sm tracking-wider uppercase font-mono transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/+1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 glass-panel px-5 py-2 rounded-full text-sm font-mono tracking-wider text-accent border border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-all duration-300"
          >
            Inquire Now
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-4 right-4 z-40 glass-panel-strong rounded-2xl p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left text-foreground/80 hover:text-accent text-lg font-mono tracking-wider uppercase transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
              <a
                href="https://wa.me/+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center glass-panel px-5 py-3 rounded-full text-sm font-mono tracking-wider text-accent border border-accent/30"
              >
                Inquire Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
