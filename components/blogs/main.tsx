"use client"

import useReveal from "@/hooks/reveal"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Heading from "./heading"
import Articles from "./articles"
import Pagination from "./pagination"
import { Blog } from "@/data/blogs"

interface MainProps {
  blogs: Blog[]
}

export default function Main({ blogs }: MainProps) {
  useReveal()
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 pt-10 sm:px-6 md:py-12 lg:px-8">
      <Heading />
      <div className="reveal grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Articles blogs={blogs} />
      </div>
      <Pagination />
    </main>
  )
}
