export default function Page() {
  return (
    <div className="glass-card group stagger-item flex flex-col overflow-hidden rounded-xl border-dashed shadow-sm hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-grow flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <span className="material-symbols-outlined text-3xl text-primary">
            add_circle
          </span>
        </div>
        <h3 className="mb-2 text-xl font-bold">Your Next Big Idea</h3>
        <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
          Have a project that needs a developer with focus and precision? Let's
          collaborate.
        </p>
        <button className="rounded-xl bg-primary px-8 py-3 font-bold text-white transition-transform hover:scale-105">
          Hire Me Now
        </button>
      </div>
    </div>
  )
}
