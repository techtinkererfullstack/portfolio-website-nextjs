export default function Tabs() {
  return (
    <div className="reveal flex flex-wrap gap-4 border-b border-primary/20 pb-6">
      <button className="rounded-full bg-primary px-6 py-2 text-sm font-bold text-white">
        All Disciplines
      </button>
      <button className="text-sage-muted rounded-full bg-primary/10 px-6 py-2 text-sm font-bold transition-all hover:bg-primary/20">
        Development
      </button>
      <button className="text-sage-muted rounded-full bg-primary/10 px-6 py-2 text-sm font-bold transition-all hover:bg-primary/20">
        Design Systems
      </button>
      <button className="text-sage-muted rounded-full bg-primary/10 px-6 py-2 text-sm font-bold transition-all hover:bg-primary/20">
        Business Strategy
      </button>
    </div>
  )
}
