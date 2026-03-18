import { Navbar } from "@/components/navbar"

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div>{children}</div>
      </main>
    </>
  )
}
