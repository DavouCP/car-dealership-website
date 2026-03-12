"use client"

import { CSSProperties } from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const styles: Record<string, CSSProperties> = {
  button: {
    position: "fixed",
    bottom: "16px",
    right: "16px",
    zIndex: 40,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "hsl(200 100% 55%)",
    color: "hsl(0 0% 4%)",
    borderRadius: "9999px",
    padding: "12px 16px",
    boxShadow: "0 4px 30px hsl(200 100% 55% / 0.4)",
    textDecoration: "none",
    transition: "box-shadow 0.3s ease",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
  text: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    fontWeight: 700,
  },
}

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/+1234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={styles.button}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 40px hsl(200 100% 55% / 0.6)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 30px hsl(200 100% 55% / 0.4)")}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle style={styles.icon} />
      <span style={styles.text}>WhatsApp</span>
    </motion.a>
  )
}
