"use client"

import { CSSProperties } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const STAT_ITEMS = [
  { value: "200+", label: "Premium Cars" },
  { value: "12", label: "Brands" },
  { value: "8K+", label: "Happy Clients" },
]

const styles: Record<string, CSSProperties> = {
  section: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  bgContainer: {
    position: "absolute",
    inset: 0,
  },
  overlay1: {
    position: "absolute",
    inset: 0,
    background: "hsl(0 0% 4% / 0.6)",
  },
  overlay2: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, hsl(0 0% 4% / 0.8), transparent, hsl(0 0% 4%))",
  },
  overlay3: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, hsl(0 0% 4% / 0.7), transparent, transparent)",
  },
  accentLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(to right, transparent, hsl(200 100% 55% / 0.4), transparent)",
  },
  content: {
    position: "relative",
    zIndex: 10,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "128px 24px 96px",
    width: "100%",
  },
  innerContent: {
    maxWidth: "768px",
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
  },
  eyebrowLine: {
    height: "1px",
    width: "48px",
    background: "hsl(200 100% 55%)",
  },
  eyebrowText: {
    color: "hsl(200 100% 55%)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "12px",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
  },
  headline: {
    fontSize: "clamp(48px, 8vw, 96px)",
    fontFamily: "Inter, sans-serif",
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    marginBottom: "24px",
    color: "hsl(0 0% 95%)",
  },
  gradientText: {
    background: "linear-gradient(135deg, hsl(0 0% 95%) 0%, hsl(200 100% 55%) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subheadline: {
    color: "hsl(0 0% 55%)",
    fontSize: "18px",
    lineHeight: 1.7,
    maxWidth: "560px",
    marginBottom: "40px",
  },
  ctaContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "16px",
  },
  primaryBtn: {
    position: "relative" as const,
    padding: "16px 32px",
    background: "hsl(200 100% 55%)",
    color: "hsl(0 0% 4%)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "14px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    borderRadius: "9999px",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  secondaryBtn: {
    padding: "16px 32px",
    background: "hsl(0 0% 100% / 0.05)",
    backdropFilter: "blur(16px)",
    color: "hsl(0 0% 95%)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "14px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    borderRadius: "9999px",
    border: "1px solid hsl(0 0% 95% / 0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
  },
  statsRow: {
    marginTop: "64px",
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "32px",
  },
  statItem: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
  },
  statValue: {
    fontSize: "30px",
    fontWeight: 900,
    fontFamily: "Inter, sans-serif",
    color: "hsl(200 100% 60%)",
    textShadow: "0 0 20px hsl(200 100% 60% / 0.5)",
  },
  statLabel: {
    color: "hsl(0 0% 55%)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
  },
  scrollIndicator: {
    position: "relative" as const,
    zIndex: 10,
    margin: "0 auto 32px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "8px",
    color: "hsl(0 0% 55%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  scrollText: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
  },
}

export default function HeroSection() {
  const scrollToShowcase = () => {
    document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section style={styles.section}>
      <div style={styles.bgContainer}>
        <Image
          src="/images/hero-car.jpg"
          alt="Luxury car at night"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={styles.overlay1} />
        <div style={styles.overlay2} />
        <div style={styles.overlay3} />
      </div>

      <div style={styles.accentLine} />

      <div style={styles.content}>
        <div style={styles.innerContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={styles.eyebrow}
          >
            <div style={styles.eyebrowLine} />
            <span style={styles.eyebrowText}>Premium Car Showcase</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={styles.headline}
          >
            Drive the <span style={styles.gradientText}>Future</span>
            <br />
            Today.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={styles.subheadline}
          >
            Discover our exclusive collection of the world&apos;s most prestigious automobiles.
            Every car is curated for performance, luxury, and style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            style={styles.ctaContainer}
          >
            <button
              onClick={scrollToShowcase}
              style={styles.primaryBtn}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px hsl(200 100% 55% / 0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              View Collection
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              style={styles.secondaryBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "hsl(200 100% 55% / 0.4)"
                e.currentTarget.style.color = "hsl(200 100% 55%)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "hsl(0 0% 95% / 0.1)"
                e.currentTarget.style.color = "hsl(0 0% 95%)"
              }}
            >
              Contact Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={styles.statsRow}
          >
            {STAT_ITEMS.map((stat) => (
              <div key={stat.label} style={styles.statItem}>
                <span style={styles.statValue}>{stat.value}</span>
                <span style={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollToShowcase}
        style={styles.scrollIndicator}
        aria-label="Scroll to showcase"
        onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(200 100% 55%)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 55%)")}
      >
        <span style={styles.scrollText}>Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown style={{ width: "20px", height: "20px" }} />
        </motion.div>
      </motion.button>
    </section>
  )
}
