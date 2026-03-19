export default function Search() {
  return (
    <div className="w-full sm:max-w-sm md:max-w-md">
      <div className="group relative">
        <span className="material-symbols-outlined text-accent-sage absolute top-1/2 left-3 -translate-y-1/2 text-sm transition-colors group-focus-within:text-white sm:left-4 sm:text-base">
          search
        </span>
        <input
          className="glass-effect w-full rounded-xl py-2.5 pr-3 pl-10 text-sm transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-primary sm:py-3 sm:pr-4 sm:pl-12 sm:text-base md:py-4"
          placeholder="Search resources, topics, or keywords..."
          type="text"
        />
      </div>
    </div>
  )
}
