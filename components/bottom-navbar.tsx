"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { FaBlog, FaProjectDiagram, FaUserAlt } from "react-icons/fa"
import { MdLaptopChromebook, MdOutlineHome, MdTimeline } from "react-icons/md"
import { VscFilePdf } from "react-icons/vsc"

const navItems = [
  { label: "Home", icon: MdOutlineHome, href: "/home" },
  { label: "Projects", icon: MdLaptopChromebook, href: "/projects" },
  { label: "Learning", icon: MdTimeline, href: "/learning" },
  { label: "Blogs", icon: FaBlog, href: "/blogs" },
  { label: "Notes", icon: FaBlog, href: "/notes" },
  { label: "About", icon: FaUserAlt, href: "/about" },
]

export default function BottomNavbar() {
  const pathname = usePathname()
  const [activeHref, setActiveHref] = useState("/home")

  useEffect(() => {
    if (!pathname) return

    const matched = navItems.find((item) => pathname.startsWith(item.href))
    if (matched) {
      setActiveHref(matched.href)
    } else if (pathname === "/") {
      setActiveHref("/home")
    }
  }, [pathname])

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full lg:hidden">
      <div className="border-glass-border dark:border-sage-900/40 dark:bg-sage-950/40 mx-0 overflow-hidden rounded-t-2xl border bg-primary/10 p-1 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(18,70,50,0.25)] backdrop-blur-xl">
        <div className="flex w-full flex-wrap items-center justify-between gap-0 overflow-hidden">
          {navItems.map((item) => {
            const isActive = activeHref === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={`flex h-full w-1/6 min-w-0 flex-col items-center justify-center rounded-none px-0 py-2 text-center transition-all duration-200 sm:w-1/6 ${
                  isActive
                    ? "text-primary"
                    : "text-sage-700 dark:text-sage-300 hover:text-primary"
                }`}
              >
                <Icon
                  className={`h-6 w-6 transition duration-200 sm:h-7 sm:w-7 ${
                    isActive
                      ? "scale-110 text-primary"
                      : "text-sage-600 dark:text-sage-200"
                  }`}
                />
                <span
                  className={`font-inter mt-1 text-xs leading-none font-medium tracking-tight transition-colors duration-200 sm:text-sm ${
                    isActive
                      ? "text-primary"
                      : "text-sage-600 dark:text-sage-200"
                  }`}
                  style={{ whiteSpace: "normal", wordBreak: "break-word" }}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
