export default function Pagination() {
  return (
    <div className="mt-12 flex flex-col items-center gap-4 sm:mt-16 sm:gap-6 md:mt-20">
      <button className="glass-effect flex items-center gap-2 rounded-xl px-6 py-2 text-sm font-bold transition-colors hover:bg-primary/10 sm:px-8 sm:py-3 sm:text-base">
        Load More Resources
        <span className="material-symbols-outlined text-base sm:text-lg">
          expand_more
        </span>
      </button>
      <div className="text-xs text-slate-500 sm:text-sm">
        Showing 5 of 42 technical notes
      </div>
    </div>
  )
}
