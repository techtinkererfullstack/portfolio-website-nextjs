"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { name: "Projects", Link: "/projects" },
  { name: "Learning", Link: "/learning" },
  { name: "Blogs", Link: "/blogs" },
  { name: "Notes", Link: "/notes" },
  { name: "Contact", Link: "/contact" },
  { name: "Resume", Link: "/resume" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 overflow-hidden">
      {/* Glass morphism background with blur and gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/0 dark:from-black/20 dark:via-black/10 dark:to-black/0" />
        <div className="absolute inset-0 backdrop-blur-xl backdrop-saturate-180" />
      </div>

      {/* Subtle border with glass effect */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 via-50% to-transparent dark:via-white/10" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/home"
          className="group relative text-xl font-bold transition-all duration-300 hover:text-foreground/90"
        >
          <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 blur-md transition-all duration-300 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-purple-500/10 group-hover:blur-lg" />
          <span className="relative">Shafe</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.Link}
              className="group relative text-sm font-medium transition-all duration-300 hover:text-foreground"
            >
              <span className="relative z-10 transition-colors group-hover:text-foreground/90">
                {link.name}
              </span>
              <span className="absolute -inset-2 rounded-md bg-white/5 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 dark:bg-white/0" />
            </Link>
          ))}
        </div>

        {/* Desktop Social Links & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop Social Links */}
          <div className="hidden gap-2 md:flex">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative rounded-lg p-2.5 transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-white/5 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100" />
                <Icon className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-foreground/90" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 border-l border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl dark:from-black/20 dark:to-black/10"
            >
              <div className="flex flex-col gap-6 py-6">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold">Navigation</h3>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.Link}
                      onClick={() => setIsOpen(false)}
                      className="group relative rounded-md px-3 py-2 transition-all duration-300 hover:text-foreground"
                    >
                      <span className="absolute inset-0 rounded-md bg-white/5 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 dark:bg-white/0" />
                      <span className="relative">{link.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile Social Links */}
                <div className="flex flex-col gap-3 border-t border-white/20 pt-6">
                  <h3 className="font-semibold">Connect</h3>
                  <div className="flex gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="group relative rounded-lg p-2.5 transition-all duration-300"
                      >
                        <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100" />
                        <Icon className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
