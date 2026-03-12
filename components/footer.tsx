"use client"

import { CSSProperties } from "react"
import { MessageCircle } from "lucide-react"

const styles: Record<string, CSSProperties> = {
  footer: {
    position: "relative",
    borderTop: "1px solid hsl(0 0% 15%)",
    padding: "48px 16px",
    width: "100%",
    boxSizing: "border-box" as const,
    overflowX: "hidden" as const,
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    width: "100%",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "32px 48px",
    justifyContent: "flex-start",
    width: "100%",
  },
  brandSection: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  logoCircle: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: "1px solid hsl(200 100% 55% / 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "hsl(200 100% 55%)",
  },
  logoText: {
    color: "hsl(0 0% 95%)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "14px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
  },
  brandDescription: {
    color: "hsl(0 0% 55%)",
    fontSize: "14px",
    maxWidth: "280px",
    lineHeight: 1.7,
    width: "100%",
  },
  sectionTitle: {
    color: "hsl(0 0% 95% / 0.4)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "10px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.2em",
    marginBottom: "12px",
  },
  navList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  navBtn: {
    textAlign: "left" as const,
    color: "hsl(0 0% 55%)",
    fontSize: "14px",
    fontFamily: "'Space Mono', monospace",
    letterSpacing: "0.1em",
    background: "none",
    border: "none",
    cursor: "pointer",
    transition: "color 0.2s ease",
    padding: 0,
  },
  contactLink: {
    display: "block",
    color: "hsl(0 0% 55%)",
    fontSize: "14px",
    fontFamily: "'Space Mono', monospace",
    textDecoration: "none",
    transition: "color 0.2s ease",
    marginBottom: "8px",
  },
  whatsappLink: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "hsl(0 0% 55%)",
    fontSize: "14px",
    fontFamily: "'Space Mono', monospace",
    textDecoration: "none",
    transition: "color 0.2s ease",
  },
  bottomBar: {
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid hsl(0 0% 15%)",
    display: "flex",
    flexWrap: "wrap" as const,
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    width: "100%",
    textAlign: "center" as const,
  },
  copyright: {
    color: "hsl(0 0% 55% / 0.5)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "12px",
  },
  disclaimer: {
    color: "hsl(0 0% 55% / 0.3)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "12px",
  },
}

export default function Footer() {
  return (
    <footer id="about" style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.brandSection}>
            <div style={styles.logoRow}>
              <div style={styles.logoCircle}>
                <div style={styles.logoDot} />
              </div>
              <span style={styles.logoText}>AutoLux</span>
            </div>
            <p style={styles.brandDescription}>
              The finest premium and luxury vehicles, curated for discerning drivers. No compromise. Only excellence.
            </p>
          </div>

          <div>
            <p style={styles.sectionTitle}>Navigate</p>
            <nav style={styles.navList}>
              {["Showcase", "About", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  style={styles.navBtn}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 95%)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 55%)")}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <p style={styles.sectionTitle}>Contact</p>
            <div>
              <a
                href="tel:+1234567890"
                style={styles.contactLink}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(200 100% 55%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 55%)")}
              >
                +1 (234) 567-890
              </a>
              <a
                href="mailto:info@autolux.com"
                style={styles.contactLink}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(200 100% 55%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 55%)")}
              >
                info@autolux.com
              </a>
              <a
                href="https://wa.me/+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.whatsappLink}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(200 100% 55%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 55%)")}
              >
                <MessageCircle style={{ width: "14px", height: "14px" }} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div style={styles.bottomBar}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} AutoLux. All rights reserved.
          </p>
          <p style={styles.disclaimer}>
            Display only. No purchases processed on site.
          </p>
        </div>
      </div>
    </footer>
  )
}
