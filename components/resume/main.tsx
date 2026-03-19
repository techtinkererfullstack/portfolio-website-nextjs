"use client"

import useReveal from "@/hooks/reveal"
import Header from "./header"

export default function Main() {
  useReveal()
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 pt-10 sm:px-6 md:py-12 lg:px-8">
      {/* <!-- Hero Header Section --> */}
      <Header />
      {/* <!-- Quick Stats --> */}
      <section className="reveal mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="group rounded-xl border border-primary/20 bg-primary/10 p-6 transition-all hover:border-primary/40">
          <p className="mb-1 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            Experience
          </p>
          <p className="text-xl font-bold text-slate-900 transition-colors group-hover:text-primary sm:text-2xl md:text-3xl dark:text-slate-100 dark:group-hover:text-emerald-400">
            10+ Years
          </p>
        </div>
        <div className="group rounded-xl border border-primary/20 bg-primary/10 p-6 transition-all hover:border-primary/40">
          <p className="mb-1 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            Projects
          </p>
          <p className="text-xl font-bold text-slate-900 transition-colors group-hover:text-primary sm:text-2xl md:text-3xl dark:text-slate-100 dark:group-hover:text-emerald-400">
            50+
          </p>
        </div>
        <div className="group rounded-xl border border-primary/20 bg-primary/10 p-6 transition-all hover:border-primary/40">
          <p className="mb-1 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            Commits
          </p>
          <p className="text-xl font-bold text-slate-900 transition-colors group-hover:text-primary sm:text-2xl md:text-3xl dark:text-slate-100 dark:group-hover:text-emerald-400">
            1.2k+
          </p>
        </div>
        <div className="group rounded-xl border border-primary/20 bg-primary/10 p-6 transition-all hover:border-primary/40">
          <p className="mb-1 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            Open Source
          </p>
          <p className="text-xl font-bold text-slate-900 transition-colors group-hover:text-primary sm:text-2xl md:text-3xl dark:text-slate-100 dark:group-hover:text-emerald-400">
            12
          </p>
        </div>
      </section>
      {/* <!-- Experience Section --> */}
      <section className="reveal mb-16" id="experience">
        <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
          <span className="material-symbols-outlined text-primary">work</span>
          Professional Experience
        </h2>
        <div className="space-y-6">
          {/* <!-- Job 1 --> */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-slate-300 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-primary/40">
            <div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity group-hover:opacity-20">
              <span className="material-symbols-outlined text-6xl text-primary">
                code
              </span>
            </div>
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-slate-100">
                  Senior Full-Stack Engineer
                </h3>
                <p className="font-medium text-primary dark:text-emerald-400">
                  TechFlow Solutions
                </p>
              </div>
              <span className="mt-1 text-sm font-medium text-slate-500 md:mt-0 dark:text-slate-400">
                2020 — Present
              </span>
            </div>
            <ul className="max-w-3xl space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <span className="font-bold text-primary dark:text-emerald-400">
                  ▹
                </span>
                <span>
                  Led the migration of a legacy monolith to a modern
                  micro-frontend architecture using
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    React
                  </span>{" "}
                  and
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    Tailwind CSS
                  </span>
                  .
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">▹</span>
                <span>
                  Designed and implemented a custom UI Design System that
                  reduced front-end development time by 40% across 3 product
                  teams.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">▹</span>
                <span>
                  Optimized CI/CD pipelines using GitHub Actions, reducing
                  deployment time from 25 minutes to under 8 minutes.
                </span>
              </li>
            </ul>
          </div>
          {/* <!-- Job 2 --> */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-slate-300 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-primary/40">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-slate-100">
                  Full-Stack Developer &amp; UI Lead
                </h3>
                <p className="font-medium text-primary dark:text-emerald-400">
                  Creative Logic Agency
                </p>
              </div>
              <span className="mt-1 text-sm font-medium text-slate-500 md:mt-0 dark:text-slate-400">
                2017 — 2020
              </span>
            </div>
            <ul className="max-w-3xl space-y-3 text-sm text-slate-400">
              <li className="flex gap-2">
                <span className="font-bold text-primary">▹</span>
                <span>
                  Architected scalable Node.js/Express backends for high-traffic
                  e-commerce platforms processing $1M+ monthly.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">▹</span>
                <span>
                  Collaborated with designers to build interactive user
                  interfaces using
                  <span className="font-medium text-white">Framer Motion</span>
                  and specialized SVG animations.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Skills Section --> */}
      <section className="reveal mb-16" id="skills">
        <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
          <span className="material-symbols-outlined text-primary">
            psychology
          </span>
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-slate-300 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-primary/40">
            <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
              <span className="material-symbols-outlined text-sm text-primary">
                laptop_mac
              </span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-slate-300 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-primary/40">
            <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
              <span className="material-symbols-outlined text-sm text-primary">
                dns
              </span>
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-slate-300 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-primary/40">
            <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
              <span className="material-symbols-outlined text-sm text-primary">
                palette
              </span>
              Design &amp; Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
              <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  React / Next.js
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="reveal grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* <!-- Education --> */}
        <section className="reveal" id="education">
          <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
            <span className="material-symbols-outlined text-primary">
              school
            </span>
            Education
          </h2>
          <div className="space-y-6">
            <div className="relative border-l-2 border-primary/20 pl-6">
              <div className="absolute top-0 -left-1.5 size-3 rounded-full bg-primary"></div>
              <h3 className="text-lg leading-tight font-bold text-slate-900 dark:text-slate-100">
                M.S. in Computer Science
              </h3>
              <p className="text-sm font-medium text-primary">
                Stanford University
              </p>
              <p className="mt-1 text-xs text-slate-400">2015 — 2017</p>
            </div>
            <div className="relative border-l-2 border-primary/20 pl-6">
              <div className="absolute top-0 -left-1.5 size-3 rounded-full bg-slate-700"></div>
              <h3 className="text-lg leading-tight font-bold text-slate-900 dark:text-slate-100">
                B.S. in Software Engineering
              </h3>
              <p className="text-sm font-medium text-primary">UC Berkeley</p>
              <p className="mt-1 text-xs text-slate-400">2011 — 2015</p>
            </div>
          </div>
        </section>
        {/* <!-- Certifications --> */}
        <section className="reveal" id="certifications">
          <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
            <span className="material-symbols-outlined text-primary">
              verified
            </span>
            Certifications
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-slate-300 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-primary/40">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/20">
                <span className="material-symbols-outlined text-primary">
                  cloud
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  AWS Certified Solutions Architect
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Amazon Web Services • 2023
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-slate-300 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-primary/40">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/20">
                <span className="material-symbols-outlined text-primary">
                  design_services
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Google UX Design Professional
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Coursera / Google • 2022
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
