"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Zap, Gauge, ArrowUpRight, Star } from "lucide-react"
import type { Car } from "@/lib/cars-data"

interface CarCardProps {
  car: Car
  index: number
  onInquire: (car: Car) => void
}

export default function CarCard({ car, index, onInquire }: CarCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="group relative glass-panel rounded-3xl overflow-hidden cursor-pointer hover:border-accent/30 transition-all duration-500 hover:shadow-[0_8px_60px_hsl(var(--accent)/0.12)]"
    >
      {/* Badge */}
      {car.badge && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 glass-panel-strong px-3 py-1.5 rounded-full">
          <Star className="w-3 h-3 text-accent fill-accent" />
          <span className="text-accent font-mono text-[10px] tracking-widest uppercase">{car.badge}</span>
        </div>
      )}

      {/* Availability dot */}
      <div className={`absolute top-4 right-4 z-20 w-2.5 h-2.5 rounded-full ${car.available ? "bg-accent shadow-[0_0_8px_hsl(var(--accent)/0.8)]" : "bg-muted-foreground"}`} />

      {/* Car Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={car.image}
          alt={`${car.year} ${car.brand} ${car.model}`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Brand & Model */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase mb-1">{car.brand} · {car.year}</p>
            <h3 className="text-foreground font-sans font-bold text-xl leading-tight">{car.model}</h3>
          </div>
          <span className={`px-2 py-1 rounded-lg text-[10px] font-mono tracking-wider uppercase font-semibold flex-shrink-0 ${
            car.category === "Electric"
              ? "bg-accent/15 text-accent border border-accent/25"
              : "bg-muted text-muted-foreground border border-border"
          }`}>
            {car.category}
          </span>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-accent flex-shrink-0" />
            <div>
              <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Power</p>
              <p className="text-foreground text-xs font-semibold font-mono">{car.specs.power}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-3.5 h-3.5 text-accent flex-shrink-0" />
            <div>
              <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">0–60</p>
              <p className="text-foreground text-xs font-semibold font-mono">{car.specs.acceleration.replace("0–60 in ", "")}</p>
            </div>
          </div>
          {car.specs.range && (
            <div className="flex items-center gap-2 col-span-2">
              <div className="w-3.5 h-3.5 flex-shrink-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full border border-accent" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Range</p>
                <p className="text-foreground text-xs font-semibold font-mono">{car.specs.range}</p>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mb-0.5">Starting at</p>
            <p className="text-foreground font-black font-sans text-2xl leading-none">{car.price}</p>
          </div>
          <button
            onClick={() => onInquire(car)}
            className="group/btn flex items-center gap-2 bg-accent/10 hover:bg-accent text-accent hover:text-accent-foreground border border-accent/30 hover:border-accent px-4 py-2.5 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)]"
            aria-label={`Inquire about ${car.brand} ${car.model}`}
          >
            Inquire
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>

        {/* Availability */}
        {!car.available && (
          <p className="text-center text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase">
            Currently Reserved
          </p>
        )}
      </div>
    </motion.article>
  )
}
