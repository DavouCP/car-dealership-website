"use client"

import { useState, CSSProperties } from "react"
import { motion } from "framer-motion"
import CarCard from "@/components/car-card"
import InquireModal from "@/components/inquire-modal"
import { CARS, CATEGORIES } from "@/lib/cars-data"
import type { Car } from "@/lib/cars-data"

const styles: Record<string, CSSProperties> = {
  section: {
    padding: "96px 24px",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "64px",
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
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
    fontSize: "clamp(32px, 5vw, 60px)",
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
  description: {
    color: "hsl(0 0% 55%)",
    fontSize: "18px",
    lineHeight: 1.7,
    maxWidth: "560px",
  },
  filterContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
    marginBottom: "48px",
  },
  filterBtn: {
    padding: "8px 20px",
    borderRadius: "9999px",
    fontFamily: "'Space Mono', monospace",
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  filterBtnActive: {
    background: "hsl(200 100% 55%)",
    color: "hsl(0 0% 4%)",
    border: "1px solid hsl(200 100% 55%)",
    boxShadow: "0 0 20px hsl(200 100% 55% / 0.3)",
  },
  filterBtnInactive: {
    background: "hsl(0 0% 100% / 0.05)",
    backdropFilter: "blur(16px)",
    color: "hsl(0 0% 55%)",
    border: "1px solid hsl(0 0% 15%)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
  },
  emptyState: {
    textAlign: "center" as const,
    padding: "80px 0",
    color: "hsl(0 0% 55%)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "14px",
  },
}

export default function ShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)

  const filtered = activeCategory === "All"
    ? CARS
    : CARS.filter((c) => c.category === activeCategory)

  return (
    <>
      <section id="showcase" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.header}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={styles.eyebrow}
            >
              <div style={styles.eyebrowLine} />
              <span style={styles.eyebrowText}>Our Collection</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={styles.headline}
            >
              Curated for the <span style={styles.gradientText}>Extraordinary</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={styles.description}
            >
              Every vehicle in our showroom is handpicked for its engineering excellence, design mastery, and driving thrill.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={styles.filterContainer}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  ...styles.filterBtn,
                  ...(activeCategory === cat ? styles.filterBtnActive : styles.filterBtnInactive),
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = "hsl(200 100% 55% / 0.4)"
                    e.currentTarget.style.color = "hsl(0 0% 95%)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = "hsl(0 0% 15%)"
                    e.currentTarget.style.color = "hsl(0 0% 55%)"
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div layout style={styles.grid}>
            {filtered.map((car, i) => (
              <CarCard
                key={car.id}
                car={car}
                index={i}
                onInquire={setSelectedCar}
              />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={styles.emptyState}
            >
              No vehicles in this category currently available.
            </motion.div>
          )}
        </div>
      </section>

      <InquireModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </>
  )
}
