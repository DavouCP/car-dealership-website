"use client"

import { useState, useEffect } from "react"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const consent = localStorage.getItem("autolux_cookie_consent")
      if (!consent) {
        const timer = setTimeout(() => setVisible(true), 1500)
        return () => clearTimeout(timer)
      }
    } catch {}
  }, [])

  if (!mounted || !visible) return null

  function accept() {
    try { localStorage.setItem("autolux_cookie_consent", "accepted") } catch {}
    setVisible(false)
  }

  function decline() {
    try { localStorage.setItem("autolux_cookie_consent", "declined") } catch {}
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100vw - 32px)",
        maxWidth: "720px",
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "14px",
        padding: "20px 22px",
        zIndex: 9999,
        boxShadow: "0 8px 40px rgba(0,0,0,0.7)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "16px",
      }}
    >
      {/* Icon */}
      <div style={{
        width: "40px",
        height: "40px",
        borderRadius: "10px",
        background: "rgba(0,191,255,0.1)",
        border: "1px solid rgba(0,191,255,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,191,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8.5 8.5v.01M12 12v.01M16 15.5v.01" />
        </svg>
      </div>

      {/* Text */}
      <p style={{
        flex: 1,
        minWidth: "220px",
        fontSize: "13px",
        color: "#aaa",
        lineHeight: 1.6,
        margin: 0,
      }}>
        <strong style={{ color: "#f0f0f0" }}>We use cookies</strong> to enhance your experience and analyze traffic.{" "}
        <a href="#" style={{ color: "rgba(0,191,255,0.8)", textDecoration: "underline" }}>Privacy Policy</a>
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            padding: "9px 16px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "transparent",
            color: "#888",
            fontSize: "13px",
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            padding: "9px 18px",
            borderRadius: "8px",
            border: "1px solid rgba(0,191,255,0.5)",
            background: "rgba(0,191,255,0.15)",
            color: "rgb(0,191,255)",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
