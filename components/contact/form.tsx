"use client"
import { useState } from "react"
import { MdSend } from "react-icons/md"
import dynamic from "next/dynamic"
import type { MapProps } from "../Map"
import { FaLocationCrosshairs, FaLocationPinLock } from "react-icons/fa6"

const Map = dynamic(() => import("../Map"), { ssr: false })

export default function Form() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL
      if (!API_URL) throw new Error("API_URL not set")

      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error(`Server error: ${res.status}`)

      setSuccess(true)
      ;(e.currentTarget as HTMLFormElement).reset()
    } catch (err) {
      console.error("Contact form error:", err)
      setError("Failed to send message. Will fallback to email later.")
      // Fallback: console log for now, later EmailJS
      console.log("Contact form data:", data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="reveal flex flex-col justify-center lg:col-span-7">
      <div className="glass rounded-2xl p-8 shadow-2xl md:p-12">
        {success && (
          <div className="mb-4 rounded-lg bg-green-100 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-200">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {error && (
          <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-200">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="form-floating-label relative">
              <input
                className="block w-full border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-slate-900 transition-all focus:border-primary focus:ring-0 dark:text-white"
                id="fullname"
                name="fullname"
                placeholder=" "
                type="text"
                required
              />
              <label className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all dark:text-slate-400">
                Full Name
              </label>
            </div>
            <div className="form-floating-label relative">
              <input
                className="block w-full border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-slate-900 transition-all focus:border-primary focus:ring-0 dark:text-white"
                id="email"
                name="email"
                placeholder=" "
                type="email"
                required
              />
              <label className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all dark:text-slate-400">
                Email Address
              </label>
            </div>
          </div>
          <div className="form-floating-label relative">
            <input
              className="block w-full border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-slate-900 transition-all focus:border-primary focus:ring-0 dark:text-white"
              id="subject"
              name="subject"
              placeholder=" "
              type="text"
              required
            />
            <label className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all dark:text-slate-400">
              Subject
            </label>
          </div>
          <div className="form-floating-label relative">
            <textarea
              className="block w-full resize-none border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-slate-900 transition-all focus:border-primary focus:ring-0 dark:text-white"
              id="message"
              name="message"
              placeholder=" "
              rows={5}
              required
            ></textarea>
            <label className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all dark:text-slate-400">
              Your Message
            </label>
          </div>
          <button
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-5 font-black text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 disabled:opacity-50 dark:text-slate-900"
            type="submit"
            disabled={loading}
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              <MdSend />
            </span>
          </button>
        </form>
        <div className="mt-12">
          <p className="mb-4 text-xs font-bold tracking-widest text-slate-500 uppercase dark:text-slate-400">
            Location: Dhanmondi, Dhaka, Bangladesh
          </p>

          <div className="relative h-48 w-full overflow-hidden rounded-xl border border-primary">
            <div className="absolute inset-0 z-0">
              <Map center={[23.7461, 90.3742]} />
            </div>

            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 animate-pulse rounded-full bg-primary/30"></div>
                <span className="material-symbols-outlined relative z-10 text-4xl text-primary">
                  <FaLocationCrosshairs size={1} />
                </span>
              </div>
            </div>

            <div className="glass absolute bottom-4 left-4 z-[1000] flex items-center gap-2 rounded-lg px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase">
              <span className="size-2 animate-pulse rounded-full bg-primary"></span>
              Currently UTC +6
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
