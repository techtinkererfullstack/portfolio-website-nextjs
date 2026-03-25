import { Navbar } from "@/components/navbar"

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="relative mx-auto flex w-full max-w-7xl items-start justify-between px-6 py-4 pb-24 md:pb-8">
        <div className="w-full">{children}</div>
      </main>
    </>
  )
}
