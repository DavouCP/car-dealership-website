"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const STAT_ITEMS = [
  { value: "200+", label: "Premium Cars" },
  { value: "12", label: "Brands" },
  { value: "8K+", label: "Happy Clients" },
]

export default function HeroSection() {
  const scrollToShowcase = () => {
    document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Luxury car at night"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay layers */}
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      {/* Subtle neon accent lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase">
              Premium Car Showcase
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-black leading-none tracking-tight text-balance mb-6"
          >
            Drive the{" "}
            <span className="text-gradient">Future</span>
            <br />
            Today.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mb-10 text-pretty"
          >
            Discover our exclusive collection of the world&apos;s most prestigious automobiles.
            Every car is curated for performance, luxury, and style.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToShowcase}
              className="group relative px-8 py-4 bg-accent text-accent-foreground font-mono text-sm tracking-widest uppercase rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)]"
            >
              <span className="relative z-10">View Collection</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-4 glass-panel text-foreground font-mono text-sm tracking-widest uppercase rounded-full border border-foreground/10 hover:border-accent/40 hover:text-accent transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap gap-8"
        >
          {STAT_ITEMS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1"
            >
              <span className="text-3xl font-black font-sans neon-text">{stat.value}</span>
              <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollToShowcase}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
        aria-label="Scroll to showcase"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
