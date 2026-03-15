"use client"

import { useEffect, useState, CSSProperties } from "react"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = ["Showcase", "About", "Contact"]

const styles: Record<string, CSSProperties> = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.5s ease",
  },
  headerScrolled: {
    background: "hsl(0 0% 100% / 0.05)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderBottom: "1px solid hsl(0 0% 15%)",
    padding: "12px 0",
  },
  headerNotScrolled: {
    padding: "20px 0",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    boxSizing: "border-box" as const,
  },
  logoContainer: {
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
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
  },
  navLink: {
    color: "hsl(0 0% 55%)",
    fontSize: "14px",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    fontFamily: "'Space Mono', monospace",
    transition: "color 0.2s ease",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  cta: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "hsl(0 0% 100% / 0.05)",
    backdropFilter: "blur(16px)",
    padding: "8px 20px",
    borderRadius: "9999px",
    fontSize: "14px",
    fontFamily: "'Space Mono', monospace",
    letterSpacing: "0.15em",
    color: "hsl(200 100% 55%)",
    border: "1px solid hsl(200 100% 55% / 0.3)",
    transition: "all 0.3s ease",
    textDecoration: "none",
  },
  mobileMenu: {
    position: "fixed" as const,
    top: "64px",
    left: "12px",
    right: "12px",
    zIndex: 40,
    background: "hsl(0 0% 100% / 0.08)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    border: "1px solid hsl(0 0% 100% / 0.12)",
    borderRadius: "16px",
    padding: "20px",
    boxSizing: "border-box" as const,
  },
  mobileNav: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
  },
  mobileLink: {
    textAlign: "left" as const,
    color: "hsl(0 0% 95% / 0.8)",
    fontSize: "18px",
    fontFamily: "'Space Mono', monospace",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    background: "none",
    border: "none",
    cursor: "pointer",
    transition: "color 0.2s ease",
  },
  burger: {
    color: "hsl(0 0% 55%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px",
  },
  burgerLine: {
    display: "block",
    height: "1px",
    background: "currentColor",
    marginBottom: "6px",
    width: "24px",
    transition: "all 0.3s ease",
  },
}

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
        style={{
          ...styles.header,
          ...(scrolled ? styles.headerScrolled : styles.headerNotScrolled),
        }}
      >
        <div style={styles.container}>
          <div style={styles.logoContainer}>
            <div style={styles.logoCircle}>
              <div style={styles.logoDot} />
            </div>
            <span style={styles.logoText}>AutoLux</span>
          </div>

          <nav style={{ ...styles.nav, display: "none" }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={styles.navLink}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 95%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 55%)")}
              >
                {link}
              </button>
            ))}
          </nav>

          <a
            href="https://wa.me/+1234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.cta, display: "none" }}
            className="desktop-cta"
          >
            Inquire Now
          </a>

          <button
            style={styles.burger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="mobile-burger"
          >
            <span style={{ ...styles.burgerLine, transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ ...styles.burgerLine, opacity: menuOpen ? 0 : 1 }} />
            <span style={{ ...styles.burgerLine, marginBottom: 0, transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={styles.mobileMenu}
            className="mobile-menu"
          >
            <nav style={styles.mobileNav}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  style={styles.mobileLink}
                >
                  {link}
                </button>
              ))}
              <a
                href="https://wa.me/+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.cta, marginTop: "8px", justifyContent: "center" }}
              >
                Inquire Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-burger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-burger { display: block !important; }
        }
      `}</style>
    </>
  )
}
