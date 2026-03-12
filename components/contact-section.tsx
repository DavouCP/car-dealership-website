"use client"

import { CSSProperties } from "react"
import { motion } from "framer-motion"
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react"

const CONTACT_METHODS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+1 (234) 567-890",
    href: "https://wa.me/+1234567890",
    description: "Fastest response",
    accentColor: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
    description: "Mon-Sat, 9am-7pm",
    accentColor: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@autolux.com",
    href: "mailto:info@autolux.com",
    description: "Reply within 24h",
    accentColor: false,
  },
]

const styles: Record<string, CSSProperties> = {
  section: {
    position: "relative",
    padding: "96px 24px",
  },
  topLine: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(to right, transparent, hsl(0 0% 15%), transparent)",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gap: "64px",
    alignItems: "center",
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
    maxWidth: "420px",
    marginBottom: "32px",
  },
  infoRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "hsl(0 0% 55%)",
    marginBottom: "12px",
  },
  infoIcon: {
    width: "16px",
    height: "16px",
    color: "hsl(200 100% 55%)",
    flexShrink: 0,
  },
  infoText: {
    fontSize: "14px",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    borderRadius: "16px",
    padding: "20px",
    background: "hsl(0 0% 100% / 0.05)",
    backdropFilter: "blur(16px)",
    border: "1px solid hsl(0 0% 15%)",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  cardAccent: {
    borderColor: "hsl(200 100% 55% / 0.25)",
  },
  iconBox: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.3s ease",
  },
  iconBoxAccent: {
    background: "hsl(200 100% 55% / 0.15)",
    border: "1px solid hsl(200 100% 55% / 0.3)",
  },
  iconBoxDefault: {
    background: "hsl(0 0% 12%)",
    border: "1px solid hsl(0 0% 15%)",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "2px",
  },
  cardLabel: {
    color: "hsl(0 0% 95%)",
    fontWeight: 600,
    fontSize: "15px",
  },
  recommendedBadge: {
    fontSize: "10px",
    fontFamily: "'Space Mono', monospace",
    color: "hsl(200 100% 55%)",
    background: "hsl(200 100% 55% / 0.1)",
    border: "1px solid hsl(200 100% 55% / 0.2)",
    padding: "2px 8px",
    borderRadius: "9999px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
  },
  cardValue: {
    color: "hsl(0 0% 95% / 0.7)",
    fontSize: "14px",
    fontFamily: "'Space Mono', monospace",
  },
  cardDescription: {
    color: "hsl(0 0% 55%)",
    fontSize: "12px",
    marginTop: "2px",
  },
  arrowBox: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: "1px solid hsl(0 0% 15%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  },
  arrow: {
    width: "14px",
    height: "14px",
    color: "hsl(0 0% 55%)",
  },
}

export default function ContactSection() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.topLine} />

      <div style={styles.container}>
        <div style={styles.grid} className="contact-grid">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={styles.eyebrow}
            >
              <div style={styles.eyebrowLine} />
              <span style={styles.eyebrowText}>Get in Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={styles.headline}
            >
              Let&apos;s Find Your <span style={styles.gradientText}>Dream Car</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={styles.description}
            >
              Our team of automotive specialists is ready to help you find the perfect vehicle.
              Reach out via any channel - we respond fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div style={styles.infoRow}>
                <MapPin style={styles.infoIcon} />
                <span style={styles.infoText}>123 Luxury Drive, Beverly Hills, CA 90210</span>
              </div>
              <div style={styles.infoRow}>
                <Clock style={styles.infoIcon} />
                <span style={styles.infoText}>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </motion.div>
          </div>

          <div style={styles.cardsContainer}>
            {CONTACT_METHODS.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  ...styles.card,
                  ...(method.accentColor ? styles.cardAccent : {}),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = method.accentColor ? "hsl(200 100% 55% / 0.6)" : "hsl(200 100% 55% / 0.3)"
                  e.currentTarget.style.background = "hsl(200 100% 55% / 0.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = method.accentColor ? "hsl(200 100% 55% / 0.25)" : "hsl(0 0% 15%)"
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)"
                }}
              >
                <div
                  style={{
                    ...styles.iconBox,
                    ...(method.accentColor ? styles.iconBoxAccent : styles.iconBoxDefault),
                  }}
                >
                  <method.icon style={{ ...styles.icon, color: method.accentColor ? "hsl(200 100% 55%)" : "hsl(0 0% 55%)" }} />
                </div>

                <div style={styles.cardContent}>
                  <div style={styles.cardHeader}>
                    <p style={styles.cardLabel}>{method.label}</p>
                    {method.accentColor && (
                      <span style={styles.recommendedBadge}>Recommended</span>
                    )}
                  </div>
                  <p style={styles.cardValue}>{method.value}</p>
                  <p style={styles.cardDescription}>{method.description}</p>
                </div>

                <div style={styles.arrowBox}>
                  <svg style={styles.arrow} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
