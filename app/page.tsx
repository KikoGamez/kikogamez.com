"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TimelineSection } from "@/components/timeline-section"
import { CompaniesSection } from "@/components/companies-section"
import { BookSection } from "@/components/book-section"
import { ServicesSection } from "@/components/services-section"
import { WhyKikoSection } from "@/components/why-kiko-section"
import { CTAFooter } from "@/components/cta-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <CompaniesSection />
      <BookSection />
      <ServicesSection />
      <WhyKikoSection />
      <CTAFooter />
    </main>
  )
}
