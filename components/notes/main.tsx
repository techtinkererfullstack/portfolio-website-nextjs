"use client"

import Pagination from "./pagination"
import Card from "./card"
import Search from "./search"
import Tabs from "./tabs"
import useReveal from "@/hooks/reveal"
import Heading from "./heading"

export default function Main() {
  useReveal()
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 pt-10 sm:px-6 md:py-12 lg:px-8">
      <Heading />
      {/* <!-- Search and Filter Bar --> */}
      <div className="mt-6 mb-8 flex flex-col gap-3 sm:mb-10 sm:gap-4 md:mt-8 md:mb-12 md:flex-row md:items-center md:justify-between md:gap-6">
        {/* Wrap components in divs to control their width behavior */}
        <div className="w-full md:w-auto">
          <Search />
        </div>

        <div className="w-full md:w-auto">
          <Tabs />
        </div>
      </div>
      {/* <!-- Notes Grid --> */}
      <div className="reveal grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {/* <!-- Card 1 --> */}
        <Card />
      </div>
      <Pagination />
    </main>
  )
}
