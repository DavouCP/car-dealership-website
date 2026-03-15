"use client"

import { useState, useEffect, type MouseEvent, type FormEvent, type ChangeEvent, type FocusEvent } from "react"

export default function EmailSignupPopup(): JSX.Element | null {
  const [visible, setVisible] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const dismissed = localStorage.getItem("autolux_email_popup")
    if (!dismissed) {
      // Show after 5 seconds on page
      const timer = setTimeout(() => setVisible(true), 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  function dismiss() {
    localStorage.setItem("autolux_email_popup", "dismissed")
    setVisible(false)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")
    setLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
    localStorage.setItem("autolux_email_popup", "subscribed")
    setTimeout(() => {
      setVisible(false)
    }, 2800)
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 10000,
          animation: "fadeIn 0.3s ease forwards",
        }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "calc(100% - 40px)",
          maxWidth: "480px",
          background: "rgba(10, 10, 10, 0.97)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          padding: "40px 36px",
          zIndex: 10001,
          boxShadow: "0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,191,255,0.1)",
          animation: "slideUp 0.4s ease forwards",
        }}
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close popup"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "transparent",
            color: "#666",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            lineHeight: 1,
            fontFamily: "inherit",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
            const el = e.currentTarget
            el.style.color = "#f5f5f5"
            el.style.borderColor = "rgba(255,255,255,0.25)"
          }}
          onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
            const el = e.currentTarget
            el.style.color = "#666"
            el.style.borderColor = "rgba(255,255,255,0.1)"
          }}
        >
          &#x2715;
        </button>

        {!submitted ? (
          <>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(0,191,255,0.1)",
                border: "1px solid rgba(0,191,255,0.25)",
                borderRadius: "20px",
                padding: "4px 12px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(0,191,255,1)",
                  display: "inline-block",
                  boxShadow: "0 0 6px rgba(0,191,255,0.8)",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "rgba(0,191,255,0.9)",
                  textTransform: "uppercase",
                }}
              >
                Exclusive Access
              </span>
            </div>

            {/* Heading */}
            <h2
              id="popup-title"
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              Get First Access to New Arrivals
            </h2>

            {/* Subtext */}
            <p
              style={{
                fontSize: "14px",
                color: "#888",
                lineHeight: 1.65,
                marginBottom: "28px",
              }}
            >
              Join our private list for early access to exclusive vehicles, VIP events, and curated offers before anyone else.
            </p>

            {/* Perks */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: "28px",
              }}
            >
              {[
                "New arrivals 48hrs before public listing",
                "Private VIP viewing invitations",
                "Exclusive member-only pricing",
              ].map((perk) => (
                <div key={perk} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "rgba(0,191,255,0.12)",
                      border: "1px solid rgba(0,191,255,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="rgba(0,191,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "13px", color: "#aaa" }}>{perk}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                    setError("")
                  }}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: error
                      ? "1px solid rgba(255,80,80,0.6)"
                      : "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#f5f5f5",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e: FocusEvent<HTMLInputElement>) => {
                    if (!error) e.currentTarget.style.borderColor = "rgba(0,191,255,0.4)"
                  }}
                  onBlur={(e: FocusEvent<HTMLInputElement>) => {
                    if (!error) e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "10px",
                    border: "1px solid rgba(0,191,255,0.5)",
                    background: loading ? "rgba(0,191,255,0.08)" : "rgba(0,191,255,0.18)",
                    color: "rgba(0,191,255,1)",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: loading ? "not-allowed" : "pointer",
                    fontFamily: "inherit",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s ease",
                    opacity: loading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
                    if (!loading) {
                      e.currentTarget.style.background = "rgba(0,191,255,0.28)"
                      e.currentTarget.style.borderColor = "rgba(0,191,255,0.8)"
                    }
                  }}
                  onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
                    if (!loading) {
                      e.currentTarget.style.background = "rgba(0,191,255,0.18)"
                      e.currentTarget.style.borderColor = "rgba(0,191,255,0.5)"
                    }
                  }}
                >
                  {loading ? "Joining..." : "Join Now"}
                </button>
              </div>
              {error && (
                <p style={{ color: "rgba(255,80,80,0.9)", fontSize: "12px", marginTop: "8px" }}>
                  {error}
                </p>
              )}
              <p style={{ fontSize: "11px", color: "#555", marginTop: "12px", textAlign: "center" }}>
                No spam, ever. Unsubscribe at any time.
              </p>
            </form>
          </>
        ) : (
          /* Success state */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "16px 0",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(0,191,255,0.12)",
                border: "2px solid rgba(0,191,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "glowPulse 2s ease-in-out infinite",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(0,191,255,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "8px",
                }}
              >
                Welcome to AutoLux
              </h3>
              <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6 }}>
                You are on the list. Expect exclusive updates and first-access invitations in your inbox soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
