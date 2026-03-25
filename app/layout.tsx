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
          <NavbarGlass />
          {children}
          <Footer />
          <BottomNavbar />
        </ThemeProvider>
      </body>
    </html>
  )
}
