export default function Philosophy() {
  return (
    <section className="reveal space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Professional Philosophy
        </h2>
        <p className="mx-auto max-w-2xl font-sans text-slate-600 dark:text-slate-400">
          The guiding principles that inform every architectural decision and
          line of code I write.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="glass-card group rounded-2xl p-8 transition-all hover:border-primary/40">
          <span className="material-symbols-outlined mb-6 block text-4xl text-primary">
            speed
          </span>
          <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">
            Performance First
          </h3>
          <p className="font-sans leading-relaxed text-slate-600 dark:text-slate-400">
            Optimizing every millisecond. I believe speed is a feature and
            high-performance applications lead to better user retention.
          </p>
        </div>
        <div className="glass-card group rounded-2xl p-8 transition-all hover:border-primary/40">
          <span className="material-symbols-outlined mb-6 block text-4xl text-primary">
            person_search
          </span>
          <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">
            User-Centric Design
          </h3>
          <p className="font-sans leading-relaxed text-slate-600 dark:text-slate-400">
            Technology should serve people. I prioritize accessibility and
            intuitive UX to ensure the human element is never lost.
          </p>
        </div>
        <div className="glass-card group rounded-2xl p-8 transition-all hover:border-primary/40">
          <span className="material-symbols-outlined mb-6 block text-4xl text-primary">
            layers
          </span>
          <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">
            Scalable Architecture
          </h3>
          <p className="font-sans leading-relaxed text-slate-600 dark:text-slate-400">
            Building systems that grow. I focus on clean, modular codebases that
            remain maintainable as businesses evolve.
          </p>
        </div>
      </div>
    </section>
  )
}
