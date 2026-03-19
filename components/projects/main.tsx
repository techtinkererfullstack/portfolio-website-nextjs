"use client"

import useReveal from "@/hooks/reveal"
import Header from "./header"
import HireMe from "./hire-me"
import Card from "./card"
import Tabs from "./tabs"

export default function Main() {
  useReveal()
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 pt-10">
      <Header />
      <Tabs />
      <div className="reveal grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <HireMe />
      </div>
    </main>
  )
}
