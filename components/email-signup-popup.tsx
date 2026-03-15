"use client"

import { useState, useEffect } from "react"

export default function EmailSignupPopup() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const dismissed = localStorage.getItem("autolux_email_popup")
      if (!dismissed) {
        const timer = setTimeout(() => setVisible(true), 6000)
        return () => clearTimeout(timer)
      }
    } catch {}
  }, [])

  if (!mounted || !visible) return null

  function dismiss() {
    try { localStorage.setItem("autolux_email_popup", "dismissed") } catch {}
    setVisible(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed.includes("@") || !trimmed.includes(".")) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
    try { localStorage.setItem("autolux_email_popup", "subscribed") } catch {}
    setTimeout(() => setVisible(false), 3000)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 10000,
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-popup-title"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "calc(100vw - 32px)",
          maxWidth: "460px",
          background: "rgba(10,10,10,0.98)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "18px",
          padding: "clamp(24px, 6vw, 40px) clamp(20px, 6vw, 36px)",
          zIndex: 10001,
          boxShadow: "0 24px 80px rgba(0,0,0,0.9), 0 0 0 1px rgba(0,191,255,0.08)",
        }}
      >
        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            width: "30px",
            height: "30px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "transparent",
            color: "#666",
            cursor: "pointer",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "inherit",
            lineHeight: 1,
          }}
        >
          &#x2715;
        </button>

        {!submitted ? (
          <>
            {/* Badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(0,191,255,0.08)",
              border: "1px solid rgba(0,191,255,0.22)",
              borderRadius: "20px",
              padding: "4px 12px",
              marginBottom: "18px",
            }}>
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "rgb(0,191,255)",
                display: "inline-block",
                boxShadow: "0 0 6px rgba(0,191,255,0.8)",
              }} />
              <span style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "rgba(0,191,255,0.9)",
                textTransform: "uppercase",
              }}>
                Exclusive Access
              </span>
            </div>

            <h2
              id="email-popup-title"
              style={{
                fontSize: "clamp(20px, 5vw, 26px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "10px",
                letterSpacing: "-0.02em",
              }}
            >
              Get First Access to New Arrivals
            </h2>

            <p style={{
              fontSize: "13px",
              color: "#777",
              lineHeight: 1.65,
              marginBottom: "22px",
            }}>
              Join our private list for early access to exclusive vehicles, VIP events, and curated offers.
            </p>

            {/* Perks */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
              {[
                "New arrivals 48hrs before public listing",
                "Private VIP viewing invitations",
                "Exclusive member-only pricing",
              ].map((perk) => (
                <div key={perk} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "rgba(0,191,255,0.1)",
                    border: "1px solid rgba(0,191,255,0.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="rgb(0,191,255)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "13px", color: "#999" }}>{perk}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError("") }}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  style={{
                    flex: "1 1 160px",
                    padding: "11px 14px",
                    borderRadius: "9px",
                    border: error ? "1px solid rgba(255,80,80,0.6)" : "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#f0f0f0",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    outline: "none",
                    minWidth: 0,
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    flex: "0 0 auto",
                    padding: "11px 20px",
                    borderRadius: "9px",
                    border: "1px solid rgba(0,191,255,0.5)",
                    background: "rgba(0,191,255,0.18)",
                    color: "rgb(0,191,255)",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: loading ? "not-allowed" : "pointer",
                    fontFamily: "inherit",
                    opacity: loading ? 0.7 : 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  {loading ? "Joining..." : "Join Now"}
                </button>
              </div>
              {error && (
                <p style={{ color: "rgba(255,80,80,0.9)", fontSize: "12px", marginTop: "7px" }}>
                  {error}
                </p>
              )}
              <p style={{ fontSize: "11px", color: "#444", marginTop: "12px", textAlign: "center" }}>
                No spam, ever. Unsubscribe at any time.
              </p>
            </form>
          </>
        ) : (
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "20px 0",
            gap: "16px",
          }}>
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "rgba(0,191,255,0.1)",
              border: "2px solid rgba(0,191,255,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgb(0,191,255)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                Welcome to AutoLux
              </h3>
              <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.6 }}>
                You are on the list. Expect exclusive updates and first-access invitations soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
