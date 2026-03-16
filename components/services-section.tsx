"use client"

import { useRef, useEffect, useState } from "react"

const services = [
  {
    title: "AI Advisory",
    description:
      "Asesoramiento estratégico para la implementación de IA en tu organización. Desde el assessment inicial hasta el roadmap de ejecución.",
    features: ["Diagnóstico de madurez IA", "Identificación de casos de uso", "Roadmap de implementación", "Due diligence tecnológica"],
  },
  {
    title: "Formación & Workshops",
    description:
      "Programas formativos para equipos directivos y técnicos. Porque la transformación empieza por las personas.",
    features: ["Workshops ejecutivos", "Formación técnica", "Programas a medida", "Mentoring de equipos"],
  },
  {
    title: "Speaking & Keynotes",
    description:
      "Conferencias sobre transformación digital, IA y liderazgo tecnológico. Para eventos corporativos, congresos y universidades.",
    features: ["Keynotes", "Paneles de expertos", "Masterclasses", "Eventos privados"],
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 md:py-32 px-6 border-t border-[#1e1e1e]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#b49150] mb-4">
            Servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#f0ece4] mb-16">
            Cómo puedo ayudarte
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="h-full p-8 bg-[#0d0d0d] border border-[#1e1e1e] hover:border-[#b49150]/30 transition-colors duration-300">
                <h3 className="font-serif text-2xl text-[#f0ece4] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#f0ece4]/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-[#f0ece4]/70"
                    >
                      <div className="w-1.5 h-1.5 bg-[#b49150]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
