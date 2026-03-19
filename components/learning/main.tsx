"use client"

import useReveal from "@/hooks/reveal"
import Card from "./card"
import Header from "./header"
import Tabs from "./tabs"
import Timeline from "./timeline"

export default function () {
  useReveal()
  return (
    <div className="reveal relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <main className="mx-auto max-w-7xl px-4 py-10 pt-10 sm:px-6 md:py-12 lg:px-8">
        {/* <!-- Page Header --> */}
        <Header />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* <!-- Left Column: Main Content --> */}
          <div className="space-y-12 lg:col-span-8">
            <Tabs />

            {/* <!-- Milestone Card 2 --> */}
            <Card />
          </div>
          {/* <!-- Right Column: Sticky Timeline --> */}
          <Timeline />
        </div>
      </main>
    </div>
  )
}
