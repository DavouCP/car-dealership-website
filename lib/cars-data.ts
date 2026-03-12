export interface Car {
  id: string
  brand: string
  model: string
  year: number
  price: string
  priceRaw: number
  category: "Sedan" | "SUV" | "Supercar" | "Convertible" | "Electric"
  specs: {
    power: string
    acceleration: string
    topSpeed: string
    range?: string
  }
  image: string
  badge?: string
  available: boolean
}

export const CARS: Car[] = [
  {
    id: "tesla-model-s",
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2025,
    price: "$89,990",
    priceRaw: 89990,
    category: "Electric",
    specs: {
      power: "1,020 HP",
      acceleration: "0–60 in 1.99s",
      topSpeed: "200 mph",
      range: "396 mi",
    },
    image: "/images/cars/tesla-model-s.jpg",
    badge: "Best Seller",
    available: true,
  },
  {
    id: "bmw-m8",
    brand: "BMW",
    model: "M8 Competition",
    year: 2025,
    price: "$133,900",
    priceRaw: 133900,
    category: "Sedan",
    specs: {
      power: "617 HP",
      acceleration: "0–60 in 3.0s",
      topSpeed: "190 mph",
    },
    image: "/images/cars/bmw-m8.jpg",
    available: true,
  },
  {
    id: "mercedes-amg",
    brand: "Mercedes-Benz",
    model: "AMG GT 63",
    year: 2025,
    price: "$170,050",
    priceRaw: 170050,
    category: "Sedan",
    specs: {
      power: "831 HP",
      acceleration: "0–60 in 2.9s",
      topSpeed: "196 mph",
    },
    image: "/images/cars/mercedes-amg.jpg",
    badge: "New Arrival",
    available: true,
  },
  {
    id: "porsche-taycan",
    brand: "Porsche",
    model: "Taycan Turbo GT",
    year: 2025,
    price: "$230,000",
    priceRaw: 230000,
    category: "Electric",
    specs: {
      power: "1,092 HP",
      acceleration: "0–60 in 2.1s",
      topSpeed: "190 mph",
      range: "280 mi",
    },
    image: "/images/cars/porsche-taycan.jpg",
    badge: "Limited",
    available: true,
  },
  {
    id: "lamborghini-urus",
    brand: "Lamborghini",
    model: "Urus SE",
    year: 2025,
    price: "$258,000",
    priceRaw: 258000,
    category: "SUV",
    specs: {
      power: "790 HP",
      acceleration: "0–60 in 3.4s",
      topSpeed: "193 mph",
    },
    image: "/images/cars/lamborghini-urus.jpg",
    available: true,
  },
  {
    id: "range-rover-sv",
    brand: "Range Rover",
    model: "SV PHEV",
    year: 2025,
    price: "$188,750",
    priceRaw: 188750,
    category: "SUV",
    specs: {
      power: "510 HP",
      acceleration: "0–60 in 4.3s",
      topSpeed: "140 mph",
      range: "48 mi EV",
    },
    image: "/images/cars/range-rover-sv.jpg",
    available: true,
  },
  {
    id: "ferrari-sf90",
    brand: "Ferrari",
    model: "SF90 Spider",
    year: 2025,
    price: "$625,000",
    priceRaw: 625000,
    category: "Convertible",
    specs: {
      power: "986 HP",
      acceleration: "0–60 in 2.5s",
      topSpeed: "211 mph",
    },
    image: "/images/cars/ferrari-sf90.jpg",
    badge: "Exclusive",
    available: false,
  },
  {
    id: "audi-rs-etron",
    brand: "Audi",
    model: "RS e-tron GT",
    year: 2025,
    price: "$145,900",
    priceRaw: 145900,
    category: "Electric",
    specs: {
      power: "912 HP",
      acceleration: "0–60 in 2.5s",
      topSpeed: "155 mph",
      range: "298 mi",
    },
    image: "/images/cars/audi-rs-etron.jpg",
    available: true,
  },
]

export const CATEGORIES = ["All", "Electric", "Sedan", "SUV", "Supercar", "Convertible"] as const
