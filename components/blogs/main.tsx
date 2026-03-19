"use client"

import useReveal from "@/hooks/reveal"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Heading from "./heading"
import Articles from "./articles"
import Pagination from "./pagination"

export default function Main() {
  useReveal()
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 pt-10 sm:px-6 md:py-12 lg:px-8">
      <Heading />
      <div className="reveal grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Articles />
      </div>
      <Pagination />
    </main>
  )
}
