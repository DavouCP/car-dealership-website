import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ShowcaseSection from "@/components/showcase-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", overflowX: "hidden", width: "100%" }}>
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
