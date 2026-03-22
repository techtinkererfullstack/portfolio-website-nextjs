"use client"
import { MdSend } from "react-icons/md"
import dynamic from "next/dynamic"
import type { MapProps } from "../Map"
import { FaLocationCrosshairs, FaLocationPinLock } from "react-icons/fa6"

const Map = dynamic(() => import("../Map"), { ssr: false })

export default function Form() {
  return (
    <section className="reveal flex flex-col justify-center lg:col-span-7">
      <div className="glass rounded-2xl p-8 shadow-2xl md:p-12">
        <form action="#" className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="form-floating-label relative">
              <input
                className="block w-full border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-slate-900 transition-all focus:border-primary focus:ring-0 dark:text-white"
                id="fullname"
                name="fullname"
                placeholder=" "
                type="text"
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
            ></textarea>
            <label className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all dark:text-slate-400">
              Your Message
            </label>
          </div>
          <button
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-5 font-black text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 dark:text-slate-900"
            type="submit"
          >
            SEND MESSAGE
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              <MdSend />
            </span>
          </button>
        </form>
        {/* <!-- Location Indicator / Map Section --> */}
        {/* */}
        <div className="mt-12">
          <p className="mb-4 text-xs font-bold tracking-widest text-slate-500 uppercase dark:text-slate-400">
            Location: Dhanmondi, Dhaka, Bangladesh
          </p>

          <div className="relative h-48 w-full overflow-hidden rounded-xl border border-primary">
            {/* 1. The Dynamic Map Component */}
            <div className="absolute inset-0 z-0">
              <Map center={[23.7461, 90.3742]} />
            </div>

            {/* 2. Optional: Custom Pulse Overlay (If you want to keep your specific UI style) */}
            {/* Note: We use pointer-events-none so users can still click the map below it */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 animate-pulse rounded-full bg-primary/30"></div>
                {/* You can keep this icon or let the Leaflet Marker handle it */}
                <span className="material-symbols-outlined relative z-10 text-4xl text-primary">
                  <FaLocationCrosshairs size={1} />
                </span>
              </div>
            </div>

            {/* 3. Timezone Badge - Ensure z-index is high */}
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
