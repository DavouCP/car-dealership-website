"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import CarCard from "@/components/car-card"
import InquireModal from "@/components/inquire-modal"
import { CARS, CATEGORIES } from "@/lib/cars-data"
import type { Car } from "@/lib/cars-data"

export default function ShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)

  const filtered = activeCategory === "All"
    ? CARS
    : CARS.filter((c) => c.category === activeCategory)

  return (
    <>
      <section id="showcase" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase">Our Collection</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black font-sans leading-none tracking-tight text-balance mb-6"
            >
              Curated for the{" "}
              <span className="text-gradient">Extraordinary</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-xl text-pretty"
            >
              Every vehicle in our showroom is handpicked for its engineering excellence, design mastery, and driving thrill.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground border-accent shadow-[0_0_20px_hsl(var(--accent)/0.3)]"
                    : "glass-panel text-muted-foreground border-border hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Cars Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((car, i) => (
              <CarCard
                key={car.id}
                car={car}
                index={i}
                onInquire={setSelectedCar}
              />
            ))}
          </motion.div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-muted-foreground font-mono text-sm"
            >
              No vehicles in this category currently available.
            </motion.div>
          )}
        </div>
      </section>

      <InquireModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </>
  )
}
