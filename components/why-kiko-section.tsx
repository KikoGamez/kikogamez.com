"use client"

import { useRef, useEffect, useState } from "react"

const reasons = [
  {
    title: "Ejecutivo, no consultor",
    description:
      "He estado del otro lado. Conozco la presión de los resultados trimestrales, la política corporativa y las limitaciones reales de los equipos.",
  },
  {
    title: "Técnico y estratégico",
    description:
      "Puedo hablar de arquitecturas de datos con tu CTO y de modelos de negocio con tu CEO. En la misma reunión.",
  },
  {
    title: "Background Big Tech",
    description:
      "Telefónica, Orange, Motorola. Sé cómo funcionan las grandes organizaciones y cómo conseguir que las cosas se hagan.",
  },
  {
    title: "Framework probado",
    description:
      "El Método AION no es teoría. Es el resultado de implementaciones reales, errores cometidos y lecciones aprendidas.",
  },
]

export function WhyKikoSection() {
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
      className="py-24 md:py-32 px-6 border-t border-[#1e1e1e]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#b49150] mb-4">
            Por qué Kiko
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#f0ece4] mb-16">
            Lo que me diferencia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group flex transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Left gold border accent */}
              <div className="w-1 bg-[#b49150] flex-shrink-0" />
              <div className="flex-1 p-8 bg-[#0d0d0d] border-t border-r border-b border-[#1e1e1e]">
                <h3 className="font-serif text-xl text-[#f0ece4] mb-3">
                  {reason.title}
                </h3>
                <p className="text-[#f0ece4]/60 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
