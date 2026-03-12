"use client"

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
    description: "Mon–Sat, 9am–7pm",
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

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Subtle top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase">Get in Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black font-sans leading-none tracking-tight text-balance mb-6"
            >
              Let&apos;s Find Your{" "}
              <span className="text-gradient">Dream Car</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-md text-pretty mb-8"
            >
              Our team of automotive specialists is ready to help you find the perfect vehicle.
              Reach out via any channel — we respond fast.
            </motion.p>

            {/* Info extras */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">123 Luxury Drive, Beverly Hills, CA 90210</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">Mon–Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Cards */}
          <div className="flex flex-col gap-4">
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
                className={`group flex items-center gap-5 rounded-2xl p-5 border transition-all duration-300 ${
                  method.accentColor
                    ? "glass-panel border-accent/25 hover:border-accent/60 hover:bg-accent/5 hover:shadow-[0_4px_40px_hsl(var(--accent)/0.15)]"
                    : "glass-panel border-border hover:border-accent/30 hover:bg-accent/3"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  method.accentColor
                    ? "bg-accent/15 border border-accent/30 group-hover:bg-accent/25"
                    : "bg-muted border border-border group-hover:bg-accent/15 group-hover:border-accent/25"
                }`}>
                  <method.icon className={`w-5 h-5 transition-colors duration-300 ${
                    method.accentColor ? "text-accent" : "text-muted-foreground group-hover:text-accent"
                  }`} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-foreground font-semibold">{method.label}</p>
                    {method.accentColor && (
                      <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/70 text-sm font-mono">{method.value}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{method.description}</p>
                </div>

                <div className="w-8 h-8 rounded-full border border-border group-hover:border-accent/40 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
