"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation" // 1. Import hook
import { motion } from "framer-motion"
import ThemeToggle from "./themeToggle"
import { VscTerminalDebian } from "react-icons/vsc"
import { FaUser, FaWhatsapp } from "react-icons/fa"
import { AiOutlineAndroid } from "react-icons/ai"
import Image from "next/image"
import { CiMenuFries } from "react-icons/ci"
import { IoIosClose } from "react-icons/io"

export default function NavbarGlass() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // 2. Get current URL path

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-10 w-28 p-2" /> // Placeholder

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Projects", href: "/projects" },
    { name: "Learning", href: "/learning" },
    { name: "Blogs", href: "/blogs" },
    { name: "Notes", href: "/notes" },
    { name: "Resume", href: "/resume" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header className="glass-nav dark:bg-background-dark/70 sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-md dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="group flex cursor-pointer items-center gap-0">
              <Image
                alt="Profile Picture"
                className="h-10 w-10 rounded-full object-cover pl-0"
                src="/android1.png"
                width={60}
                height={60}
              />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Shafe Alam
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 md:flex">
              {navLinks.map((link) => {
                const isActive = pathname === link.href // 3. Check if active

                return (
                  <div
                    key={link.name}
                    className="group flex flex-col items-center gap-1"
                  >
                    <Link
                      className={`text-sm transition-colors ${
                        isActive
                          ? "font-bold text-[#10b77f]" // Active Color
                          : "font-medium hover:text-primary dark:hover:text-emerald-400" // Inactive Color
                      }`}
                      href={link.href}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      >
                        {link.name}
                      </motion.div>
                    </Link>
                    {/* The Green Span Underline - Only show if active */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="h-1 w-4 rounded-full bg-[#10b77f]"
                      ></motion.div>
                    )}
                  </div>
                )
              })}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button className="flex items-center gap-3 rounded-xl border border-transparent bg-slate-200/50 py-2 pr-3 pl-3 transition-all hover:border-primary/30 hover:bg-primary/20 dark:bg-white/5">
                <FaUser />
              </button>

              <button className="flex items-center gap-3 rounded-xl border border-transparent bg-slate-200/50 py-2 pr-3 pl-3 transition-all hover:border-primary/30 hover:bg-primary/20 dark:bg-white/5">
                <FaWhatsapp />
              </button>

              <button
                className="p-2 transition-colors hover:text-primary md:hidden dark:hover:text-emerald-400"
                onClick={() => setIsOpen(true)}
              >
                <span className="material-symbols-outlined">
                  <CiMenuFries />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`bg-background-dark/95 fixed inset-0 z-[100] backdrop-blur-xl transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } flex flex-col items-center justify-center lg:hidden`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <span className="material-symbols-outlined text-3xl text-red-500">
            <IoIosClose />
          </span>
        </button>
        <nav className="flex flex-col items-center gap-8 text-2xl font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={
                pathname === link.href
                  ? "text-primary"
                  : "text-primary/80 hover:text-primary"
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
