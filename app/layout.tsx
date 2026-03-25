import { Geist, Geist_Mono, Noto_Sans, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import NavbarGlass from "@/components/navbar-glass"
import Footer from "@/components/footer"
import BottomNavbar from "@/components/bottom-navbar"

const notoSans = Noto_Sans({ variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        notoSans.variable
      )}
    >
      <body className="bg-background-light dark:bg-background-dark">
        <ThemeProvider>
          <div
            className="parallax-element fixed inset-0 -z-10 h-screen w-screen rounded-full bg-emerald-500/3 blur-3xl"
            style={{ top: "20%", left: "10%" }}
            data-speed="0.05"
          />
          <div
            className="parallax-element fixed inset-0 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-xl"
            style={{ bottom: "10%", right: "20%" }}
            data-speed="-0.1"
          />
          <NavbarGlass />
          {children}
          <Footer />
          <BottomNavbar />
        </ThemeProvider>
      </body>
    </html>
  )
}
