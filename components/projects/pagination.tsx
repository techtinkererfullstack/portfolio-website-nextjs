"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

interface PaginationProps {
  currentPage: number
  totalPages: number
  currentCategory: string
}

export default function Pagination({
  currentPage,
  totalPages,
  currentCategory,
}: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    router.push(`/projects?${params.toString()}`)
  }

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  if (totalPages <= 1) return null

  return (
    <div className="mt-16 flex items-center justify-center gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex size-10 items-center justify-center rounded-lg text-slate-400 hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <IoIosArrowBack />
      </button>

      {getVisiblePages().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && handlePageChange(page)}
          disabled={page === "..."}
          className={`flex size-10 items-center justify-center rounded-lg font-bold transition-colors ${
            page === currentPage
              ? "bg-primary text-white"
              : page === "..."
                ? "cursor-default"
                : "hover:bg-primary/20"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex size-10 items-center justify-center rounded-lg text-slate-400 hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <IoIosArrowForward />
      </button>
    </div>
  )
}
