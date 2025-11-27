import HeaderEnhanced from "@/components/header-enhanced"
import HeroEnhanced from "@/components/hero-enhanced"
import FeaturesHighlight from "@/components/features-highlight"
import About from "@/components/about"
import ServicesEnhanced from "@/components/services-enhanced"
import MineralsSection from "@/components/minerals-section"
import FleetSection from "@/components/fleet-section"
import StatsEnhanced from "@/components/stats-enhanced"
import Contact from "@/components/contact"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 relative">
      <AnimatedBackground />
      <HeaderEnhanced />
      <HeroEnhanced />
      <FeaturesHighlight />
      <MineralsSection />
      <About />
      <ServicesEnhanced />
      <FleetSection />
      <StatsEnhanced />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  )
}
