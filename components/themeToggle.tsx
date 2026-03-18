"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { HiMoon, HiSun } from "react-icons/hi"

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 1. Critical: Wait for mount to avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-10 w-32" /> // Prevents layout jump

  // 2. Logic to determine what the button SHOULD do
  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")} // This MUST match your hotkey logic
      className="flex items-center gap-3 rounded-xl border border-transparent bg-slate-200/50 px-4 py-2 transition-all hover:border-primary/30 hover:bg-primary/20 dark:bg-white/5"
    >
      {isDark ? (
        <>
          <HiSun className="text-xl text-yellow-400" />
          <span className="text-sm font-bold text-white"></span>
        </>
      ) : (
        <>
          <HiMoon className="text-xl text-slate-700" />
          <span className="text-sm font-bold text-slate-900"></span>
        </>
      )}
    </button>
  )
}
