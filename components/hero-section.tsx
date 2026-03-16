"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808]">
      {/* Photo — right side, with top padding to avoid menu */}
      <div
        className={`absolute top-28 bottom-0 right-0 w-full md:w-[60%] lg:w-[55%] transition-opacity duration-1000 delay-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Guardados%20recientemente%20-%201%20de%201%20%281%29-jIuksoSO3KEVnWJSjN9TBHt2YcGGWh.jpeg"
          alt="Kiko Gamez"
          fill
          className="object-cover object-center grayscale"
          sizes="(max-width: 768px) 100vw, 55vw"
          priority
        />
        {/* Fade left so photo blends into black background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/60 to-transparent" />
        {/* Fade bottom so text overlaps cleanly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />
      </div>

      {/* Content — bottom left, large overlapping text like the reference */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen pb-16 md:pb-20 px-6 md:px-12 lg:px-20">
        {/* Small label top left */}
        <p
          className={`absolute top-32 left-6 md:left-12 lg:left-20 text-xs uppercase tracking-[0.3em] text-[#b49150] transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Senior Digital Executive · AI Transformation
        </p>

        {/* Big headline overlapping bottom */}
        <div className="max-w-3xl">
          <h1
            className={`font-sans font-light text-5xl md:text-6xl lg:text-7xl leading-[1] text-[#f0ece4] mb-8 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            25 años<br />
            transformando<br />
            <span className="text-[#b49150]">empresas.</span>
          </h1>

          <p
            className={`text-base md:text-lg text-[#f0ece4]/60 max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Executive Director, Founder y Advisor. De Motorola a Telefonica,
            de Orange a Tuenti. Hoy ayudo a empresas a implementar IA de forma real.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/kikogamez/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#b49150] text-[#080808] font-medium hover:bg-[#c9a666] transition-colors duration-200"
            >
              Conectar en LinkedIn
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-[#f0ece4]/30 text-[#f0ece4] hover:border-[#f0ece4] transition-colors duration-200"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
