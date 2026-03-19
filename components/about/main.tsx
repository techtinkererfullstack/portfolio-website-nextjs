"use client"

import useReveal from "@/hooks/reveal"
import Hero from "./hero"
import Philosophy from "./philosophy"

export default function Main() {
  useReveal()
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 pt-10 sm:px-6 md:py-12 lg:px-8">
      {/* <!-- Hero Section --> */}
      <Hero />
      {/* <!-- Professional Philosophy --> */}
      <Philosophy />
      {/* <!-- Beyond the Code --> */}
      <section className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="order-2 space-y-8 lg:order-1">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Beyond the Code
          </h2>
          <p className="font-sans text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            When I'm not behind a screen, I'm usually exploring the physical
            world or contributing back to the tech community that raised me.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="glass-card flex items-center gap-4 rounded-xl border border-white/5 p-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-500/10 text-primary">
                <span className="material-symbols-outlined">camera</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Photography
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Street &amp; Landscape
                </p>
              </div>
            </div>
            <div className="glass-card flex items-center gap-4 rounded-xl border border-white/5 p-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-500/10 text-primary">
                <span className="material-symbols-outlined">public</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Travel
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  24 Countries visited
                </p>
              </div>
            </div>
            <div className="glass-card flex items-center gap-4 rounded-xl border border-white/5 p-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-500/10 text-primary">
                <span className="material-symbols-outlined">code_blocks</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Open Source
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Active contributor
                </p>
              </div>
            </div>
            <div className="glass-card flex items-center gap-4 rounded-xl border border-white/5 p-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-500/10 text-primary">
                <span className="material-symbols-outlined">
                  fitness_center
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Wellness
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Mental &amp; physical flow
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
          <div className="space-y-4">
            <img
              alt="Camera and street photography"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFDYxiKppCIMFSez0zzh0BHEhT-lPnVs84bfkFS_MhyVej7ZjXZST3Om6IbmIyV0VO4Y7BDR_K0zeCM7GvdKKlxLPe-Vyk7mN8Sczo1x3SKeWUc4ebAwJmv-4uMJnxAQvcDfaek3Zwe06cAMulHfcQMVHMw6k_UKE7JzJjQCVjQc3wS5LPGopohkuYoSkOYI2BZGZtwqHaYB3fkWVvytH157p-rWYORIq8-lxdoYnQK3rFtMAY__UFu3dY4WLUQNQPtgOoYdalsH8"
            />
            <img
              alt="Travel nature landscape"
              className="aspect-square w-full rounded-2xl object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3edUePGHiCe64bA20_M5pnoj574h8eUJZ7tiol7GBWwB5mbu7IDZsTH5_UdLUm5I23DgZquDKxiCXzj6cEHML-GAyT_wD2-_RSvOJT3LY8DfQUYnrqkxvIRy8yb0i5Tj1tQ5UJe4GUpVO-vBfWjjuafx6Kfv7wNoI22N6FUhNvoA41q-dwhYgjGzqNCaJn_gc2S80kF5KeayTBZ0t-m4WvPrO5gLfz8tz39RfjVfkQRGcSCLOvy9PPSFBBOTFGbqxQYa4QRX2kkQ"
            />
          </div>
          <div className="space-y-4 pt-8">
            <img
              alt="Coding workspace"
              className="aspect-square w-full rounded-2xl object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Fs6qZAQMU0JOjks22_JQAmpiwpyLbydmZlRAWP9uv8a5lIad5r41NzlAAHwKHYJWXsUYkAAKZGSmTyzNjeOjBNTYOH8oT5dwsGr2YLxXyZKIvkd94OqjhHv3yk_qsaBkrgU4GxpN17_gBZfBxXpAtZSu4ICfe-N36Uz_kiYIFBQvchRErEeKKAboDr1hXKB8NzNOl8Uns5tF8VsX3zsLLchmxCa1Kj1_vCeDWj6oLvaF51E0Gkz63rOXyyTUCFs0fezlHrX3KyY"
            />
            <img
              alt="Code on screen"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYYaqFOQ1gyWBg3TdZllfEgV1zdoQeGG6FhdlO0uJlIjxrPARvjltIlKs96OCNn-u5_7owAbHr1N6y-sEqFYYX-mk5X-kRcZn7QqEKiWTjYh7ZLYCPk8lH4pL8ZRquKGUph8m8Gb3NVQ5jLgB15C-Tfu4ye_20f_hLAYqvGEZKR68Q0fSKn3tmh2Q6dZ0wZAuploRFVdWkVbFY91btITR-E3csEdhVZmXKJrO9ZcED_m7-CbLSJDiunCPpenoGnGUdu16KGIy2T2k"
            />
          </div>
        </div>
      </section>
      {/* <!-- Current Focus --> */}
      <section className="reveal glass relative overflow-hidden rounded-[2rem] p-12">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 size-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-center gap-12 md:flex-row">
          <div className="md:w-1/3">
            <h2 className="mb-4 text-3xl leading-tight font-bold text-slate-900 dark:text-slate-100">
              Current Focus
            </h2>
            <p className="font-sans text-slate-600 dark:text-slate-400">
              Always evolving. Here's what's currently occupying my headspace
              and terminal.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:w-2/3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/5 dark:bg-slate-900/50">
              <h4 className="mb-2 flex items-center gap-2 font-bold text-primary dark:text-emerald-400">
                <span className="material-symbols-outlined text-sm">
                  auto_awesome
                </span>
                AI Integration
              </h4>
              <p className="font-sans text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Implementing LLM agents for automated data processing pipelines
                and smarter user interfaces.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/5 dark:bg-slate-900/50">
              <h4 className="mb-2 flex items-center gap-2 font-bold text-primary dark:text-emerald-400">
                <span className="material-symbols-outlined text-sm">token</span>
                Rust for Tooling
              </h4>
              <p className="font-sans text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Rewriting performance-critical CLI tools and backend modules
                using Rust for safety and speed.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Call to Action --> */}
      <section className="reveal space-y-10 py-12 text-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-5xl dark:text-slate-100">
            Let's collaborate.
          </h2>
          <p className="mx-auto max-w-xl font-sans text-lg text-slate-600 dark:text-slate-400">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 rounded-2xl bg-primary px-10 py-4 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 dark:text-slate-900">
            Get in Touch <span className="material-symbols-outlined">mail</span>
          </button>
        </div>
        <div className="flex justify-center gap-8 pt-6">
          <a
            className="flex items-center gap-2 text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-emerald-400"
            href="#"
          >
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            className="flex items-center gap-2 text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-emerald-400"
            href="#"
          >
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            className="flex items-center gap-2 text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-emerald-400"
            href="#"
          >
            <span className="text-sm font-medium">Twitter</span>
          </a>
          <a
            className="flex items-center gap-2 text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-emerald-400"
            href="#"
          >
            <span className="text-sm font-medium">Read.cv</span>
          </a>
        </div>
      </section>
    </main>
  )
}
