import { FaCode, FaEye } from "react-icons/fa"

export default function Card() {
  return (
    <div className="glass-card group stagger-item flex flex-col overflow-hidden rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-alt="Screenshot of a dark themed data analytics dashboard"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZjubHpL1a6i6hpEoPFKsT_VYWYsWHuuSh9JqCofAMNa1D8roarY6gCrby_biriSqrYv_gZ2TmwdjlyOB8_V9pHsLsDlqId7pOhrN2cudBRtHeyaJFa0OZvVFGS0uX7CLAOPLt8yRQ5rD5U-CJIFnFWgGmkiA1tJrb4mkg1rcn0DkpWDOEQkVA8gW1GdW-7hwdqcCl03L-aB9RI1ID5zpElJHaLbnhCNga4OHu9-37sF3l1BEbXNjpp1ZKQwW-Nrki7CkNFquObI"
        />
        <div className="from-background-dark/80 absolute inset-0 bg-gradient-to-t to-transparent"></div>
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 text-xl font-bold">Quantum Dashboard</h3>
        <p className="mb-4 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
          Enterprise-grade analytics platform featuring real-time data streaming
          and complex visualization modules.
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="dark:text-primary-light rounded bg-primary/20 px-2 py-1 text-[10px] font-bold tracking-wider text-primary uppercase">
            Next.js
          </span>
          <span className="dark:text-primary-light rounded bg-primary/20 px-2 py-1 text-[10px] font-bold tracking-wider text-primary uppercase">
            D3.js
          </span>
          <span className="dark:text-primary-light rounded bg-primary/20 px-2 py-1 text-[10px] font-bold tracking-wider text-primary uppercase">
            TypeScript
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-primary/10 pt-4">
          <div className="flex gap-4">
            <button
              className="text-slate-400 transition-colors hover:text-primary"
              title="View Code"
            >
              <span className="material-symbols-outlined text-xl">
                <FaCode />
              </span>
            </button>
            <button
              className="text-slate-400 transition-colors hover:text-primary"
              title="View Backend"
            >
              <span className="material-symbols-outlined text-xl"></span>
            </button>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white transition-all hover:bg-primary/90">
            <FaEye />
            <span className="material-symbols-outlined text-sm">Live</span>
          </button>
        </div>
      </div>
    </div>
  )
}
