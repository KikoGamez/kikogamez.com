"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const stats = [
  { value: "25+", label: "Años de experiencia" },
  { value: "+10", label: "Países" },
  { value: "4", label: "Empresas tecnológicas fundadas" },
]

export function AboutSection() {
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
      id="about"
      className="py-24 md:py-32 px-6 border-t border-[#1e1e1e]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#b49150] mb-4">
            Quien es Kiko
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#f0ece4] mb-12">
            Un ejecutivo que construye
          </h2>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-[#0d0d0d] border border-[#1e1e1e] text-center"
            >
              <p className="font-serif text-5xl text-[#b49150] mb-2">{stat.value}</p>
              <p className="text-sm text-[#f0ece4]/60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Photo + Bio - Two Column Layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Guardados%20recientemente%20-%201%20de%201%20%281%29-r74RV46LXpu451A3pY6auJHHGg95zC.jpeg"
                alt="Kiko Gamez - Executive portrait"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Subtle gold accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#b49150] to-transparent" />
            </div>
          </div>

          {/* Bio Text */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-[#f0ece4]/80 leading-relaxed mb-6">
              No soy consultor de PowerPoints. Soy un ejecutivo que ha estado en las trincheras 
              de la transformacion digital durante mas de dos decadas. He liderado equipos de 
              cientos de personas, he fundado empresas desde cero, y he visto de primera mano 
              que funciona y que no cuando se trata de implementar tecnologia en organizaciones reales.
            </p>
            <p className="text-lg text-[#f0ece4]/80 leading-relaxed mb-6">
              Mi enfoque combina la vision estrategica de un C-Level con la capacidad tecnica 
              de entender que es posible y que es humo. Cuando hablo de IA, hablo desde la 
              experiencia de haberla implementado, no desde un informe de tendencias.
            </p>
            <div className="pt-4 border-t border-[#1e1e1e]">
              <p className="text-sm text-[#b49150] uppercase tracking-wider">
                Executive Director / Founder / Advisor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
