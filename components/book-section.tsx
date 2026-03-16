"use client"

import { useRef, useEffect, useState } from "react"

export function BookSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Book Mockup */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#1e1e1e] shadow-2xl">
                <div className="absolute inset-4 border border-[#b49150]/30 flex flex-col items-center justify-center p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#b49150] mb-6">
                    El Libro
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#f0ece4] text-center mb-4">
                    Método AION
                  </h3>
                  <div className="w-12 h-px bg-[#b49150] mb-4" />
                  <p className="text-sm text-[#f0ece4]/60 text-center">
                    Framework para la implementación real de IA en organizaciones
                  </p>
                  <p className="mt-8 text-xs text-[#b49150]">Kiko Gámez</p>
                </div>
              </div>
              {/* Book spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#b49150]/20 to-transparent" />
            </div>
          </div>

          {/* Book Description */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#b49150] mb-4">
              El Método
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#f0ece4] mb-8">
              Un framework probado para implementar IA
            </h2>
            <div className="space-y-6 text-[#f0ece4]/80 leading-relaxed">
              <p>
                El Método AION no es teoría. Es el resultado de años de implementar 
                inteligencia artificial en empresas reales, con equipos reales, y 
                problemas reales.
              </p>
              <p>
                Este framework te guía paso a paso desde la identificación de 
                oportunidades hasta la medición del ROI, pasando por la gestión del 
                cambio y la integración con procesos existentes.
              </p>
              <p>
                Porque el problema de la IA en las empresas no es tecnológico. Es 
                de implementación, cultura y estrategia.
              </p>
              <p className="text-[#b49150] font-medium">
                Próximamente disponible
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#b49150]" />
                <span className="text-sm text-[#f0ece4]/60">Assessment inicial</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#b49150]" />
                <span className="text-sm text-[#f0ece4]/60">Roadmap de implementación</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#b49150]" />
                <span className="text-sm text-[#f0ece4]/60">Métricas de éxito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
