"use client"

import { useRef, useEffect, useState } from "react"

const companies = [
  {
    name: "AION Growth Studio",
    description:
      "Consultora de crecimiento especializada en IA. Ayudamos a empresas a identificar oportunidades de implementación de inteligencia artificial con impacto real en su negocio.",
    type: "AI Growth Consultancy",
  },
  {
    name: "Intervia.ai",
    description:
      "Plataforma de IA conversacional para sectores B2B regulados. Automatización de procesos de atención y cualificación con cumplimiento normativo.",
    type: "Conversational AI Platform",
  },
  {
    name: "49 Marketing & Brands",
    description:
      "Agencia de marketing estratégico que combina creatividad con datos. Performance, branding y growth para empresas que quieren escalar.",
    type: "Marketing Agency",
  },
]

export function CompaniesSection() {
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
      id="companies"
      className="py-24 md:py-32 px-6 border-t border-[#1e1e1e]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#b49150] mb-4">
            Empresas Fundadas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#f0ece4] mb-16">
            Construyo lo que predico
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`group bg-[#0d0d0d] border border-[#1e1e1e] transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Gold top border */}
              <div className="h-1 bg-[#b49150]" />
              <div className="p-8">
                <p className="text-xs uppercase tracking-wider text-[#b49150] mb-3">
                  {company.type}
                </p>
                <h3 className="font-serif text-xl text-[#f0ece4] mb-4">
                  {company.name}
                </h3>
                <p className="text-[#f0ece4]/60 text-sm leading-relaxed">
                  {company.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
