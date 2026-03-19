"use Client"

import { FaArrowCircleRight } from "react-icons/fa"

export default function LatestThoughts() {
  return (
    <div>
      <section className="reveal mt-32 pb-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              Latest Thoughts
            </h2>
            <div className="mt-2 h-1.5 w-12 rounded-full bg-primary"></div>
          </div>
          <a
            className="flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2 dark:text-emerald-400"
            href="#"
          >
            Read Blog
            <span className="material-symbols-outlined text-sm">
              <FaArrowCircleRight />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="stagger-item bg-sage-50/50 border-sage-100 rounded-2xl border p-6 transition-all hover:border-primary/50 dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-center gap-4">
              <span className="text-xs font-bold tracking-widest text-primary uppercase dark:text-emerald-400">
                Web Development
              </span>
              <span className="text-xs text-slate-500">Oct 24, 2023</span>
            </div>
            <h3 className="mb-3 text-lg font-bold sm:text-xl">
              Mastering CSS Grid in 2024
            </h3>
            <p className="text-sage-800 mb-6 line-clamp-2 dark:text-slate-400">
              A deep dive into the latest features of CSS Grid and how to build
              complex responsive layouts with minimal code.
            </p>
            <a
              className="group flex items-center gap-2 font-bold text-primary dark:text-emerald-400"
              href="#"
            >
              Read Article
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                east
              </span>
            </a>
          </div>
          <div className="stagger-item bg-sage-50/50 border-sage-100 rounded-2xl border p-6 transition-all hover:border-primary/50 dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-center gap-4">
              <span className="text-xs font-bold tracking-widest text-primary uppercase dark:text-emerald-400">
                UI Design
              </span>
              <span className="text-xs text-slate-500">Oct 18, 2023</span>
            </div>
            <h3 className="mb-3 text-lg font-bold sm:text-xl">
              The Psychology of Emerald Accents
            </h3>
            <p className="text-sage-800 mb-6 line-clamp-2 dark:text-slate-400">
              Why deep green tones are becoming the new standard for
              professional digital interfaces and branding.
            </p>
            <a
              className="group flex items-center gap-2 font-bold text-primary dark:text-emerald-400"
              href="#"
            >
              Read Article
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                east
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
