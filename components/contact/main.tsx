"use client"

import useReveal from "@/hooks/reveal"
import Hero from "./hero"
import Form from "./form"

export default function Main() {
  useReveal()
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 pt-10 sm:px-6 md:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Hero />
        <Form />
      </div>
    </main>
  )
}
