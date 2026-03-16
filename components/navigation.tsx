"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Trayectoria", href: "#timeline" },
  { label: "Empresas", href: "#companies" },
  { label: "Servicios", href: "#services" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080808]/95 backdrop-blur-sm border-b border-[#1e1e1e]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="relative h-28 w-80 block">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%2014%2C%202026%2C%2010_54_15%20AM-liFmLiJRucZHgnO8tRoz15fbrw2316.png"
            alt="Kiko Gamez Logo"
            fill
            className="object-contain"
            sizes="320px"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#f0ece4]/70 hover:text-[#b49150] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/kikogamez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-[#b49150] text-[#b49150] hover:bg-[#b49150] hover:text-[#080808] transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-px bg-[#f0ece4] transition-transform duration-200 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-px bg-[#f0ece4] transition-opacity duration-200 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-[#f0ece4] transition-transform duration-200 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#080808] border-t border-[#1e1e1e]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#f0ece4]/70 hover:text-[#b49150] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/kikogamez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 border border-[#b49150] text-[#b49150] text-center hover:bg-[#b49150] hover:text-[#080808] transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
