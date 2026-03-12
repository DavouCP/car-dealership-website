"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react"
import type { Car } from "@/lib/cars-data"

interface InquireModalProps {
  car: Car | null
  onClose: () => void
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

  return (
    <AnimatePresence>
      {car && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="glass-panel-strong rounded-3xl p-8 w-full max-w-md pointer-events-auto border border-accent/20">
              {/* Close */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase mb-1">{car.brand} · {car.year}</p>
                  <h2 className="text-foreground font-black text-2xl">{car.model}</h2>
                  <p className="text-accent font-black text-3xl mt-1">{car.price}</p>
                </div>
                <button
                  onClick={onClose}
                  className="glass-panel rounded-full p-2 text-muted-foreground hover:text-foreground hover:border-border transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Interested in this vehicle? Reach out to us through any of the channels below and our team will get back to you promptly.
              </p>

              {/* Contact Options */}
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/+1234567890?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass-panel rounded-2xl p-4 border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold text-sm">WhatsApp</p>
                    <p className="text-muted-foreground text-xs">+1 (234) 567-890</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>

                <a
                  href="tel:+1234567890"
                  className="group flex items-center gap-4 glass-panel rounded-2xl p-4 border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:border-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold text-sm">Phone Call</p>
                    <p className="text-muted-foreground text-xs">+1 (234) 567-890</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>

                <a
                  href={`mailto:info@autolux.com?subject=${emailSubject}&body=${emailBody}`}
                  className="group flex items-center gap-4 glass-panel rounded-2xl p-4 border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:border-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold text-sm">Email</p>
                    <p className="text-muted-foreground text-xs">info@autolux.com</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
