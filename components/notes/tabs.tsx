export default function Tabs() {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 md:w-auto">
      <button className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white sm:px-5 sm:py-2 sm:text-sm">
        All Notes
      </button>
      <button className="glass-effect rounded-full px-4 py-1.5 text-xs font-medium transition-colors hover:bg-primary/20 sm:px-5 sm:py-2 sm:text-sm">
        React
      </button>
      <button className="glass-effect rounded-full px-4 py-1.5 text-xs font-medium transition-colors hover:bg-primary/20 sm:px-5 sm:py-2 sm:text-sm">
        Node.js
      </button>
      <button className="glass-effect rounded-full px-4 py-1.5 text-xs font-medium transition-colors hover:bg-primary/20 sm:px-5 sm:py-2 sm:text-sm">
        System Design
      </button>
      <button className="glass-effect rounded-full px-4 py-1.5 text-xs font-medium transition-colors hover:bg-primary/20 sm:px-5 sm:py-2 sm:text-sm">
        SQL
      </button>
      <button className="glass-effect rounded-full px-4 py-1.5 text-xs font-medium transition-colors hover:bg-primary/20 sm:px-5 sm:py-2 sm:text-sm">
        TypeScript
      </button>
    </div>
  )
}
