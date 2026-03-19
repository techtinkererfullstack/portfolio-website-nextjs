export default function Tabs() {
  return (
    <div className="reveal mb-10 flex flex-wrap gap-3 border-b border-primary/10 pb-4">
      <button className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20">
        All Projects
      </button>
      <button className="glass rounded-full px-6 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-primary/10 dark:text-slate-300">
        UI/UX
      </button>
      <button className="glass rounded-full px-6 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-primary/10 dark:text-slate-300">
        Frontend
      </button>
      <button className="glass rounded-full px-6 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-primary/10 dark:text-slate-300">
        Backend
      </button>
      <button className="glass rounded-full px-6 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-primary/10 dark:text-slate-300">
        Mobile
      </button>
      <button className="glass rounded-full px-6 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-primary/10 dark:text-slate-300">
        FullStack
      </button>
    </div>
  )
}
