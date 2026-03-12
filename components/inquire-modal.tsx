"use client"

import { CSSProperties } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react"
import type { Car } from "@/lib/cars-data"

interface InquireModalProps {
  car: Car | null
  onClose: () => void
}

const styles: Record<string, CSSProperties> = {
  backdrop: {
    position: "fixed" as const,
    inset: 0,
    zIndex: 50,
    background: "hsl(0 0% 4% / 0.8)",
    backdropFilter: "blur(8px)",
  },
  modalContainer: {
    position: "fixed" as const,
    inset: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
    pointerEvents: "none" as const,
    boxSizing: "border-box" as const,
  },
  modal: {
    background: "hsl(0 0% 100% / 0.08)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    border: "1px solid hsl(200 100% 55% / 0.2)",
    borderRadius: "20px",
    padding: "24px",
    width: "100%",
    maxWidth: "420px",
    pointerEvents: "auto" as const,
    boxSizing: "border-box" as const,
    maxHeight: "90vh",
    overflowY: "auto" as const,
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "24px",
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
    fontWeight: 900,
    fontSize: "24px",
  },
  price: {
    color: "hsl(200 100% 55%)",
    fontWeight: 900,
    fontSize: "30px",
    marginTop: "4px",
  },
  closeBtn: {
    background: "hsl(0 0% 100% / 0.05)",
    backdropFilter: "blur(16px)",
    borderRadius: "50%",
    padding: "8px",
    border: "1px solid hsl(0 0% 15%)",
    color: "hsl(0 0% 55%)",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  description: {
    color: "hsl(0 0% 55%)",
    fontSize: "14px",
    lineHeight: 1.7,
    marginBottom: "24px",
  },
  contactList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    width: "100%",
  },
  contactCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "hsl(0 0% 100% / 0.05)",
    backdropFilter: "blur(16px)",
    borderRadius: "14px",
    padding: "14px",
    border: "1px solid hsl(0 0% 15%)",
    textDecoration: "none",
    transition: "all 0.3s ease",
    width: "100%",
    boxSizing: "border-box" as const,
  },
  contactIconBox: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.3s ease",
  },
  contactIconBoxAccent: {
    background: "hsl(200 100% 55% / 0.1)",
    border: "1px solid hsl(200 100% 55% / 0.2)",
  },
  contactIconBoxDefault: {
    background: "hsl(0 0% 12%)",
    border: "1px solid hsl(0 0% 15%)",
  },
  contactIcon: {
    width: "20px",
    height: "20px",
  },
  contactContent: {
    flex: 1,
    minWidth: 0,
    overflow: "hidden" as const,
  },
  contactLabel: {
    color: "hsl(0 0% 95%)",
    fontWeight: 600,
    fontSize: "14px",
  },
  contactValue: {
    color: "hsl(0 0% 55%)",
    fontSize: "12px",
    overflow: "hidden" as const,
    textOverflow: "ellipsis" as const,
    whiteSpace: "nowrap" as const,
  },
  arrowIcon: {
    width: "16px",
    height: "16px",
    color: "hsl(0 0% 55%)",
    transition: "color 0.3s ease",
  },
}

export default function InquireModal({ car, onClose }: InquireModalProps) {
  if (!car) return null

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the ${car.year} ${car.brand} ${car.model} listed at ${car.price}. Can you provide more details?`
  )
  const emailSubject = encodeURIComponent(
    `Inquiry: ${car.year} ${car.brand} ${car.model}`
  )
  const emailBody = encodeURIComponent(
    `Hello,\n\nI'm interested in the ${car.year} ${car.brand} ${car.model} listed at ${car.price}.\n\nPlease provide more details.\n\nThank you.`
  )

  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+1 (234) 567-890",
      href: `https://wa.me/+1234567890?text=${whatsappMessage}`,
      accent: true,
    },
    {
      icon: Phone,
      label: "Phone Call",
      value: "+1 (234) 567-890",
      href: "tel:+1234567890",
      accent: false,
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@autolux.com",
      href: `mailto:info@autolux.com?subject=${emailSubject}&body=${emailBody}`,
      accent: false,
    },
  ]

  return (
    <AnimatePresence>
      {car && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={styles.backdrop}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={styles.modalContainer}
          >
            <div style={styles.modal}>
              <div style={styles.header}>
                <div>
                  <p style={styles.brand}>{car.brand} · {car.year}</p>
                  <h2 style={styles.model}>{car.model}</h2>
                  <p style={styles.price}>{car.price}</p>
                </div>
                <button
                  onClick={onClose}
                  style={styles.closeBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "hsl(0 0% 95%)"
                    e.currentTarget.style.borderColor = "hsl(0 0% 25%)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "hsl(0 0% 55%)"
                    e.currentTarget.style.borderColor = "hsl(0 0% 15%)"
                  }}
                  aria-label="Close modal"
                >
                  <X style={{ width: "20px", height: "20px" }} />
                </button>
              </div>

              <p style={styles.description}>
                Interested in this vehicle? Reach out to us through any of the channels below and our team will get back to you promptly.
              </p>

              <div style={styles.contactList}>
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={styles.contactCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "hsl(200 100% 55% / 0.4)"
                      e.currentTarget.style.background = "hsl(200 100% 55% / 0.05)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "hsl(0 0% 15%)"
                      e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)"
                    }}
                  >
                    <div
                      style={{
                        ...styles.contactIconBox,
                        ...(contact.accent ? styles.contactIconBoxAccent : styles.contactIconBoxDefault),
                      }}
                    >
                      <contact.icon
                        style={{
                          ...styles.contactIcon,
                          color: contact.accent ? "hsl(200 100% 55%)" : "hsl(0 0% 55%)",
                        }}
                      />
                    </div>
                    <div style={styles.contactContent}>
                      <p style={styles.contactLabel}>{contact.label}</p>
                      <p style={styles.contactValue}>{contact.value}</p>
                    </div>
                    <ArrowUpRight style={styles.arrowIcon} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
