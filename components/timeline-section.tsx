"use client"

import { useRef, useEffect, useState } from "react"

const milestones = [
  { period: "2000 - 2006", company: "Motorola",            role: "Innovation Business Development 3G" },
  { period: "2006 - 2014", company: "Orange España",       role: "Director de Líneas de Negocio (P&L)" },
  { period: "2011 - 2015", company: "Tuenti",              role: "Director de monetización y expansión" },
  { period: "2012",        company: "ASPA Commerce",       role: "Socio Fundador" },
  { period: "2015 - 2025", company: "Telefónica",          role: "Director Global de E-commerce, Martech y Growth Marketing" },
  { period: "2022",        company: "49 Marketing & Brands", role: "Socio Fundador" },
  { period: "2024",        company: "AI Growth Studio",    role: "Socio Fundador" },
  { period: "2024",        company: "Intervia AI",         role: "Socio Fundador" },
  { period: "2025 +",      company: "Proeduca Summa",      role: "Executive Director of Digital Growth" },
]

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="py-24 md:py-32 px-6 border-t border-[#1e1e1e]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f0ece4]">
            Trayectoria
          </h2>
        </div>

        {/* Table rows */}
        <div>
          {milestones.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-[140px_1fr_1fr] md:grid-cols-[180px_1fr_1fr] items-center border-t border-[#1e1e1e] py-6 group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="text-sm text-[#8a8a8a] tabular-nums">
                {item.period}
              </span>
              <span className="text-base md:text-lg text-[#f0ece4] font-medium pr-4">
                {item.company}
              </span>
              <span className="text-sm md:text-base text-[#8a8a8a] group-hover:text-[#b49150] transition-colors duration-200">
                {item.role}
              </span>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-[#1e1e1e]" />
        </div>
      </div>
    </section>
  )
}
