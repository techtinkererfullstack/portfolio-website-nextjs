export default function Main() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-20 md:px-20">
      {/* <!-- Hero Section --> */}
      <div className="mb-12">
        <h1 className="to-accent-sage mb-4 bg-gradient-to-r from-white bg-clip-text text-5xl font-black text-transparent md:text-6xl">
          Engineering Resources
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          A curated collection of technical deep-dives, architectural patterns,
          and reusable code snippets from my journey as a full-stack engineer.
        </p>
      </div>
      {/* <!-- Search and Filter Bar --> */}
      <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="w-full md:max-w-md">
          <div className="group relative">
            <span className="material-symbols-outlined text-accent-sage absolute top-1/2 left-4 -translate-y-1/2 transition-colors group-focus-within:text-white">
              search
            </span>
            <input
              className="glass-effect w-full rounded-xl py-4 pr-4 pl-12 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-primary"
              placeholder="Search resources, topics, or keywords..."
              type="text"
            />
          </div>
        </div>
        <div className="scrollbar-hide flex w-full items-center gap-2 overflow-x-auto pb-2 md:w-auto">
          <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold whitespace-nowrap text-white">
            All Notes
          </button>
          <button className="glass-effect rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-primary/20">
            React
          </button>
          <button className="glass-effect rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-primary/20">
            Node.js
          </button>
          <button className="glass-effect rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-primary/20">
            System Design
          </button>
          <button className="glass-effect rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-primary/20">
            SQL
          </button>
          <button className="glass-effect rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-primary/20">
            TypeScript
          </button>
        </div>
      </div>
      {/* <!-- Notes Grid --> */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* <!-- Card 1 --> */}
        <div className="group glass-effect card-hover relative flex flex-col overflow-hidden rounded-2xl p-6">
          <div className="absolute top-0 right-0 p-4">
            <span className="rounded bg-primary px-2 py-1 text-[10px] font-black tracking-widest text-white uppercase">
              New
            </span>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-accent-sage text-sm">
              calendar_today
            </span>
            <span className="text-xs font-medium text-slate-500">
              Oct 24, 2023
            </span>
            <span className="mx-1 text-slate-700">•</span>
            <span className="text-accent-sage text-xs font-bold tracking-wider uppercase">
              System Design
            </span>
          </div>
          <h3 className="group-hover:text-accent-sage mb-3 text-xl leading-tight font-bold transition-colors">
            Scalable WebSocket Architecture with Redis
          </h3>
          <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
            Exploring horizontal scaling strategies for real-time applications
            using Redis Pub/Sub and sticky sessions in a microservices
            environment.
          </p>
          <div className="border-glass-border flex items-center justify-between border-t pt-4">
            <div className="flex -space-x-2">
              <div className="border-glass-border flex size-6 items-center justify-center rounded-full border bg-primary/40 text-[10px] font-bold">
                JS
              </div>
              <div className="border-glass-border flex size-6 items-center justify-center rounded-full border bg-blue-500/40 text-[10px] font-bold">
                RD
              </div>
            </div>
            <a
              className="text-accent-sage flex items-center gap-1 text-sm font-bold transition-all hover:gap-2"
              href="#"
            >
              Read Note
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="group glass-effect card-hover relative flex flex-col overflow-hidden rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-accent-sage text-sm">
              calendar_today
            </span>
            <span className="text-xs font-medium text-slate-500">
              Oct 15, 2023
            </span>
            <span className="mx-1 text-slate-700">•</span>
            <span className="text-accent-sage text-xs font-bold tracking-wider uppercase">
              React
            </span>
          </div>
          <h3 className="group-hover:text-accent-sage mb-3 text-xl leading-tight font-bold transition-colors">
            React Server Components: A Deep Dive
          </h3>
          <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
            Understanding the mental model shift required for RSCs, data
            fetching patterns, and the zero-bundle-size impact on client
            performance.
          </p>
          <div className="border-glass-border flex items-center justify-between border-t pt-4">
            <div className="flex -space-x-2">
              <div className="border-glass-border flex size-6 items-center justify-center rounded-full border bg-cyan-500/40 text-[10px] font-bold">
                RE
              </div>
              <div className="border-glass-border flex size-6 items-center justify-center rounded-full border bg-white/10 text-[10px] font-bold">
                NX
              </div>
            </div>
            <a
              className="text-accent-sage flex items-center gap-1 text-sm font-bold transition-all hover:gap-2"
              href="#"
            >
              Read Note
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="group glass-effect card-hover relative flex flex-col overflow-hidden rounded-2xl p-6">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-accent-sage/20 border-accent-sage/30 text-accent-sage rounded border px-2 py-1 text-[10px] font-black tracking-widest uppercase">
              Updated
            </span>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-accent-sage text-sm">
              calendar_today
            </span>
            <span className="text-xs font-medium text-slate-500">
              Sep 28, 2023
            </span>
            <span className="mx-1 text-slate-700">•</span>
            <span className="text-accent-sage text-xs font-bold tracking-wider uppercase">
              SQL
            </span>
          </div>
          <h3 className="group-hover:text-accent-sage mb-3 text-xl leading-tight font-bold transition-colors">
            Advanced Indexing &amp; Query Optimization
          </h3>
          <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
            Going beyond simple B-Trees. Exploring GIN, BRIN indexes and how to
            read EXPLAIN ANALYZE output for complex PostgreSQL queries.
          </p>
          <div className="border-glass-border flex items-center justify-between border-t pt-4">
            <div className="flex -space-x-2">
              <div className="border-glass-border flex size-6 items-center justify-center rounded-full border bg-blue-600/40 text-[10px] font-bold">
                PG
              </div>
              <div className="border-glass-border flex size-6 items-center justify-center rounded-full border bg-orange-500/40 text-[10px] font-bold">
                SQL
              </div>
            </div>
            <a
              className="text-accent-sage flex items-center gap-1 text-sm font-bold transition-all hover:gap-2"
              href="#"
            >
              Read Note
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
        {/* <!-- Card 4 --> */}
        <div className="group glass-effect card-hover relative flex flex-col overflow-hidden rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-accent-sage text-sm">
              calendar_today
            </span>
            <span className="text-xs font-medium text-slate-500">
              Sep 12, 2023
            </span>
            <span className="mx-1 text-slate-700">•</span>
            <span className="text-accent-sage text-xs font-bold tracking-wider uppercase">
              Node.js
            </span>
          </div>
          <h3 className="group-hover:text-accent-sage mb-3 text-xl leading-tight font-bold transition-colors">
            Event Loop Architecture &amp; Libuv
          </h3>
          <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
            A low-level look at how Node.js handles asynchronous I/O and why
            blocking the event loop is detrimental to high-throughput apps.
          </p>
          <div className="border-glass-border flex items-center justify-between border-t pt-4">
            <div className="flex -space-x-2">
              <div className="border-glass-border flex size-6 items-center justify-center rounded-full border bg-green-500/40 text-[10px] font-bold">
                JS
              </div>
            </div>
            <a
              className="text-accent-sage flex items-center gap-1 text-sm font-bold transition-all hover:gap-2"
              href="#"
            >
              Read Note
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
        {/* <!-- Card 5 --> */}
        <div className="group glass-effect card-hover relative flex flex-col overflow-hidden rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-accent-sage text-sm">
              calendar_today
            </span>
            <span className="text-xs font-medium text-slate-500">
              Aug 30, 2023
            </span>
            <span className="mx-1 text-slate-700">•</span>
            <span className="text-accent-sage text-xs font-bold tracking-wider uppercase">
              TypeScript
            </span>
          </div>
          <h3 className="group-hover:text-accent-sage mb-3 text-xl leading-tight font-bold transition-colors">
            Mastering Generics &amp; Conditional Types
          </h3>
          <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
            Building bulletproof utility types for large-scale applications.
            Making your code truly type-safe with advanced TypeScript patterns.
          </p>
          <div className="border-glass-border flex items-center justify-between border-t pt-4">
            <div className="flex -space-x-2">
              <div className="border-glass-border flex size-6 items-center justify-center rounded-full border bg-blue-400/40 text-[10px] font-bold">
                TS
              </div>
            </div>
            <a
              className="text-accent-sage flex items-center gap-1 text-sm font-bold transition-all hover:gap-2"
              href="#"
            >
              Read Note
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
        {/* <!-- Card 6 --> */}
        <div className="group glass-effect card-hover relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-primary/20 bg-transparent p-6 text-center">
          <div className="p-8">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
              <span className="material-symbols-outlined text-accent-sage">
                add
              </span>
            </div>
            <p className="font-medium text-slate-400">Request a Topic</p>
            <p className="mt-2 text-xs text-slate-600">
              Is there something you'd like to see covered? Let me know.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Pagination/Footer --> */}
      <div className="mt-20 flex flex-col items-center gap-6">
        <button className="glass-effect flex items-center gap-2 rounded-xl px-8 py-3 font-bold transition-colors hover:bg-primary/10">
          Load More Resources
          <span className="material-symbols-outlined">expand_more</span>
        </button>
        <div className="text-sm text-slate-500">
          Showing 5 of 42 technical notes
        </div>
      </div>
    </main>
  )
}
