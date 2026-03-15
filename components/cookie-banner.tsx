"use client"

import { useState, useEffect, type CSSProperties, type MouseEvent } from "react"

export default function CookieBanner(): JSX.Element | null {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const consent = localStorage.getItem("autolux_cookie_consent")
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  function acceptAll() {
    localStorage.setItem("autolux_cookie_consent", "accepted")
    setVisible(false)
  }

  function declineAll() {
    localStorage.setItem("autolux_cookie_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <div
        role="dialog"
        aria-label="Cookie consent"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 48px)",
          maxWidth: "760px",
          background: "rgba(12, 12, 12, 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "24px 28px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "24px",
          flexWrap: "wrap",
          boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,191,255,0.08)",
          animation: "slideUp 0.4s ease forwards",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: "rgba(0,191,255,0.12)",
            border: "1px solid rgba(0,191,255,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(0,191,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
          </svg>
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          <p
            style={{
              color: "#f5f5f5",
              fontSize: "14px",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            <span style={{ fontWeight: 600, color: "#fff" }}>We use cookies</span> to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking{" "}
            <span style={{ color: "rgba(0,191,255,0.9)" }}>Accept All</span>, you consent to our use of cookies.{" "}
            <a
              href="#"
              style={{
                color: "rgba(0,191,255,0.7)",
                textDecoration: "underline",
                fontSize: "13px",
              }}
            >
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
          <button
            onClick={declineAll}
            style={{
              padding: "9px 18px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
              color: "#999",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
              const el = e.currentTarget
              el.style.borderColor = "rgba(255,255,255,0.3)"
              el.style.color = "#f5f5f5"
            }}
            onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
              const el = e.currentTarget
              el.style.borderColor = "rgba(255,255,255,0.15)"
              el.style.color = "#999"
            }}
          >
            Decline
          </button>
          <button
            onClick={acceptAll}
            style={{
              padding: "9px 20px",
              borderRadius: "8px",
              border: "1px solid rgba(0,191,255,0.5)",
              background: "rgba(0,191,255,0.15)",
              color: "rgba(0,191,255,1)",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
              const el = e.currentTarget
              el.style.background = "rgba(0,191,255,0.25)"
              el.style.borderColor = "rgba(0,191,255,0.8)"
            }}
            onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
              const el = e.currentTarget
              el.style.background = "rgba(0,191,255,0.15)"
              el.style.borderColor = "rgba(0,191,255,0.5)"
            }}
          >
            Accept All
          </button>
        </div>
      </div>
    </>
  )
}
