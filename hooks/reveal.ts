"use client"

import { useEffect } from "react"

export default function useReveal() {
  useEffect(() => {
    // --- 1. Intersection Observer (Reveal Logic) ---
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 }
    )

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => revealObserver.observe(el))

    // --- 2. Parallax Logic ---
    const handleScroll = () => {
      const scrollY = window.scrollY
      const parallaxElements = document.querySelectorAll(".parallax-element")

      parallaxElements.forEach((el) => {
        // Read the custom data-speed attribute (e.g., -0.1 or 0.15)
        const speed = parseFloat(el.getAttribute("data-speed") || "0")
        const yPos = scrollY * speed

        // Apply the transformation
        ;(el as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)

    // --- 3. Cleanup ---
    return () => {
      revealObserver.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
}
