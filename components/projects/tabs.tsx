"use client"

import { useRouter, useSearchParams } from "next/navigation"

interface TabsProps {
  currentCategory: string
}

export default function Tabs({ currentCategory }: TabsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === "all") {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    params.delete("page") // Reset to page 1 when changing category
    router.push(`/projects?${params.toString()}`)
  }

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "uiux", label: "UI/UX" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "mobile", label: "Mobile" },
    { key: "fullstack", label: "FullStack" },
  ]

  return (
    <div className="reveal mb-10 flex flex-wrap gap-3 border-b border-primary/10 pb-4">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => handleCategoryChange(cat.key)}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
            currentCategory === cat.key
              ? "bg-primary text-white shadow-lg shadow-primary/20"
              : "glass text-slate-700 hover:bg-primary/10 dark:text-slate-300"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
