"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

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
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-5 py-3 shadow-[0_4px_30px_hsl(var(--accent)/0.4)] hover:shadow-[0_4px_40px_hsl(var(--accent)/0.6)] transition-shadow duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-mono text-xs tracking-widest uppercase font-bold">WhatsApp</span>
    </motion.a>
  )
}
