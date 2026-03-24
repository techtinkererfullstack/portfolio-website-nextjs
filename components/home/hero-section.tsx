"use client"

import useReveal from "@/hooks/reveal"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  useReveal()

  return (
    <>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="reveal relative space-y-8 lg:col-span-7">
          <div
            className="parallax-element absolute -top-10 -left-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl"
            data-speed="-0.1"
          ></div>
          <div className="text-sage-900 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider uppercase dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Available for new projects
          </div>
          <h1 className="text-sage-950 text-2xl leading-[1.1] font-black tracking-tight text-slate-900 sm:text-3xl md:text-5xl lg:text-7xl dark:text-white">
            Android Developer Tech Tinkerer <br />
            <span className="text-primary dark:text-emerald-400">
              Full-Stack.
            </span>
          </h1>
          <p className="text-sage-800 max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl dark:text-slate-400">
            With 10 years of experience as a Chief Accountant, I build
            high-performance Android and Web applications designed for technical
            precision and business ROI.
          </p>
          <div className="flex flex-wrap gap-3 pt-4 sm:gap-4">
            <Link href="/projects">
              <button className="transform rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:bg-primary/90 sm:px-8 sm:py-4 sm:text-base">
                Projects
              </button>
            </Link>
            <Link
              href="/sample.pdf"
              download="Custom_Filename.pdf"
              target="_blank"
              prefetch={false}
              rel="noopener noreferrer "
            >
              <button className="rounded-xl border border-slate-300/50 bg-slate-200 px-6 py-2.5 text-sm font-bold text-slate-900 transition-all hover:bg-slate-300 sm:px-8 sm:py-4 sm:text-base dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                Download
              </button>
            </Link>
          </div>
          <div className="border-sage-100 flex items-center gap-8 border-t pt-8 dark:border-white/5">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                5+
              </span>
              <span className="text-sm tracking-wider text-slate-500 uppercase">
                Years Exp.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                40+
              </span>
              <span className="text-sm tracking-wider text-slate-500 uppercase">
                Projects Done
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                20+
              </span>
              <span className="text-sm tracking-wider text-slate-500 uppercase">
                Clients
              </span>
            </div>
          </div>
        </div>
        <div className="reveal relative lg:col-span-5">
          <div
            className="parallax-element absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
            data-speed="0.1"
          ></div>
          <div
            className="parallax-element absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-emerald-500/5 blur-[100px]"
            data-speed="0.15"
          ></div>
          <div className="absolute -inset-4 rounded-full bg-primary/20 opacity-30 blur-3xl"></div>
          <div
            className="parallax-element bg-sage-100 relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl dark:bg-slate-800"
            data-speed="0.05"
          >
            <Image
              alt="Professional Workspace"
              className="h-full w-full object-cover transition-all duration-700 hover:grayscale-0"
              data-alt="Minimalist desk setup with laptop and plant"
              src="/profile.png"
              width={800}
              height={800}
            />
            <div className="from-background-dark/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>
            <div className="glass-nav absolute right-6 bottom-6 left-6 rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Latest Project</p>
                  <p className="text-xs text-slate-300">
                    SaaS Analytics Dashboard 2.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
