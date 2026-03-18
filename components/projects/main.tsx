"use client"

import useReveal from "@/hooks/reveal"
import Header from "./header"
import HireMe from "./hire-me"
import Card from "./card"

export default function Main() {
  useReveal()
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 pt-10">
      <Header />
      <div className="reveal mb-10 flex flex-wrap gap-3 border-b border-primary/10 pb-4">
        <button className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20">
          All Projects
        </button>
        <button className="glass rounded-full px-6 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-primary/10 dark:text-slate-300">
          Web Dev
        </button>
        <button className="glass rounded-full px-6 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-primary/10 dark:text-slate-300">
          UI/UX Design
        </button>
        <button className="glass rounded-full px-6 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-primary/10 dark:text-slate-300">
          AI/ML
        </button>
        <button className="glass rounded-full px-6 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-primary/10 dark:text-slate-300">
          Open Source
        </button>
      </div>
      <div className="reveal grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <HireMe />
      </div>
    </main>
  )
}
