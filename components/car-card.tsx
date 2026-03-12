"use client"

import { CSSProperties } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Zap, Gauge, ArrowUpRight, Star } from "lucide-react"
import type { Car } from "@/lib/cars-data"

interface CarCardProps {
  car: Car
  index: number
  onInquire: (car: Car) => void
}

const styles: Record<string, CSSProperties> = {
  card: {
    position: "relative",
    background: "hsl(0 0% 100% / 0.05)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid hsl(0 0% 15%)",
    borderRadius: "24px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.5s ease",
  },
  badge: {
    position: "absolute" as const,
    top: "16px",
    left: "16px",
    zIndex: 20,
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "hsl(0 0% 100% / 0.08)",
    backdropFilter: "blur(24px)",
    padding: "6px 12px",
    borderRadius: "9999px",
    border: "1px solid hsl(0 0% 100% / 0.12)",
  },
  badgeIcon: {
    width: "12px",
    height: "12px",
    color: "hsl(200 100% 55%)",
    fill: "hsl(200 100% 55%)",
  },
  badgeText: {
    color: "hsl(200 100% 55%)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "10px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
  },
  availabilityDot: {
    position: "absolute" as const,
    top: "16px",
    right: "16px",
    zIndex: 20,
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  },
  availableDot: {
    background: "hsl(200 100% 55%)",
    boxShadow: "0 0 8px hsl(200 100% 55% / 0.8)",
  },
  unavailableDot: {
    background: "hsl(0 0% 55%)",
  },
  imageContainer: {
    position: "relative" as const,
    height: "208px",
    overflow: "hidden",
  },
  imageGradient: {
    position: "absolute" as const,
    inset: 0,
    background: "linear-gradient(to top, hsl(0 0% 7%), hsl(0 0% 7% / 0.1), transparent)",
  },
  content: {
    padding: "24px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "8px",
  },
  brand: {
    color: "hsl(0 0% 55%)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    marginBottom: "4px",
  },
  model: {
    color: "hsl(0 0% 95%)",
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: 1.2,
  },
  categoryTag: {
    padding: "4px 8px",
    borderRadius: "8px",
    fontSize: "10px",
    fontFamily: "'Space Mono', monospace",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    fontWeight: 600,
    flexShrink: 0,
  },
  categoryElectric: {
    background: "hsl(200 100% 55% / 0.15)",
    color: "hsl(200 100% 55%)",
    border: "1px solid hsl(200 100% 55% / 0.25)",
  },
  categoryOther: {
    background: "hsl(0 0% 12%)",
    color: "hsl(0 0% 55%)",
    border: "1px solid hsl(0 0% 15%)",
  },
  specsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  specItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  specIcon: {
    width: "14px",
    height: "14px",
    color: "hsl(200 100% 55%)",
    flexShrink: 0,
  },
  specLabel: {
    fontSize: "10px",
    color: "hsl(0 0% 55%)",
    fontFamily: "'Space Mono', monospace",
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
  },
  specValue: {
    color: "hsl(0 0% 95%)",
    fontSize: "12px",
    fontWeight: 600,
    fontFamily: "'Space Mono', monospace",
  },
  divider: {
    height: "1px",
    background: "hsl(0 0% 15%)",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceLabel: {
    fontSize: "10px",
    color: "hsl(0 0% 55%)",
    fontFamily: "'Space Mono', monospace",
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
    marginBottom: "2px",
  },
  priceValue: {
    color: "hsl(0 0% 95%)",
    fontFamily: "Inter, sans-serif",
    fontWeight: 900,
    fontSize: "24px",
    lineHeight: 1,
  },
  inquireBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "hsl(200 100% 55% / 0.1)",
    color: "hsl(200 100% 55%)",
    border: "1px solid hsl(200 100% 55% / 0.3)",
    padding: "10px 16px",
    borderRadius: "9999px",
    fontFamily: "'Space Mono', monospace",
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  reservedText: {
    textAlign: "center" as const,
    color: "hsl(0 0% 55% / 0.6)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "10px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
  },
}

export default function CarCard({ car, index, onInquire }: CarCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "hsl(200 100% 55% / 0.3)"
        e.currentTarget.style.boxShadow = "0 8px 60px hsl(200 100% 55% / 0.12)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "hsl(0 0% 15%)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      {car.badge && (
        <div style={styles.badge}>
          <Star style={styles.badgeIcon} />
          <span style={styles.badgeText}>{car.badge}</span>
        </div>
      )}

      <div
        style={{
          ...styles.availabilityDot,
          ...(car.available ? styles.availableDot : styles.unavailableDot),
        }}
      />

      <div style={styles.imageContainer}>
        <Image
          src={car.image}
          alt={`${car.year} ${car.brand} ${car.model}`}
          fill
          style={{ objectFit: "cover", objectPosition: "center", transition: "transform 0.7s ease" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div style={styles.imageGradient} />
      </div>

      <div style={styles.content}>
        <div style={styles.header}>
          <div>
            <p style={styles.brand}>{car.brand} · {car.year}</p>
            <h3 style={styles.model}>{car.model}</h3>
          </div>
          <span
            style={{
              ...styles.categoryTag,
              ...(car.category === "Electric" ? styles.categoryElectric : styles.categoryOther),
            }}
          >
            {car.category}
          </span>
        </div>

        <div style={styles.specsGrid}>
          <div style={styles.specItem}>
            <Zap style={styles.specIcon} />
            <div>
              <p style={styles.specLabel}>Power</p>
              <p style={styles.specValue}>{car.specs.power}</p>
            </div>
          </div>
          <div style={styles.specItem}>
            <Gauge style={styles.specIcon} />
            <div>
              <p style={styles.specLabel}>0-60</p>
              <p style={styles.specValue}>{car.specs.acceleration.replace("0–60 in ", "")}</p>
            </div>
          </div>
          {car.specs.range && (
            <div style={{ ...styles.specItem, gridColumn: "span 2" }}>
              <div style={{ ...styles.specIcon, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", border: "1px solid hsl(200 100% 55%)" }} />
              </div>
              <div>
                <p style={styles.specLabel}>Range</p>
                <p style={styles.specValue}>{car.specs.range}</p>
              </div>
            </div>
          )}
        </div>

        <div style={styles.divider} />

        <div style={styles.footer}>
          <div>
            <p style={styles.priceLabel}>Starting at</p>
            <p style={styles.priceValue}>{car.price}</p>
          </div>
          <button
            onClick={() => onInquire(car)}
            style={styles.inquireBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "hsl(200 100% 55%)"
              e.currentTarget.style.color = "hsl(0 0% 4%)"
              e.currentTarget.style.borderColor = "hsl(200 100% 55%)"
              e.currentTarget.style.boxShadow = "0 0 20px hsl(200 100% 55% / 0.3)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "hsl(200 100% 55% / 0.1)"
              e.currentTarget.style.color = "hsl(200 100% 55%)"
              e.currentTarget.style.borderColor = "hsl(200 100% 55% / 0.3)"
              e.currentTarget.style.boxShadow = "none"
            }}
            aria-label={`Inquire about ${car.brand} ${car.model}`}
          >
            Inquire
            <ArrowUpRight style={{ width: "14px", height: "14px" }} />
          </button>
        </div>

        {!car.available && (
          <p style={styles.reservedText}>Currently Reserved</p>
        )}
      </div>
    </motion.article>
  )
}
