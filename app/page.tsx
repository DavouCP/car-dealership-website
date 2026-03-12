import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ShowcaseSection from "@/components/showcase-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
