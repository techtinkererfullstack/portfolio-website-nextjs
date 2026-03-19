export default function Header() {
  return (
    <header className="reveal mb-16 flex flex-col items-center gap-8 md:flex-row md:items-start">
      <div className="group relative">
        <div className="absolute -inset-1 rounded-full bg-primary/30 blur transition duration-500 group-hover:bg-primary/50"></div>
        <div
          className="relative size-32 overflow-hidden rounded-full border-2 border-primary/30 bg-slate-800 bg-cover bg-center md:size-40"
          data-alt="Professional portrait of a male engineer in a dark studio setting"
        ></div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-emerald-400"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary dark:bg-emerald-400"></span>
          </span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        <h1 className="mb-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-4xl lg:text-5xl dark:text-slate-100">
          Senior Full-Stack Engineer
        </h1>
        <p className="mb-4 text-base font-medium text-primary sm:text-lg md:text-xl dark:text-emerald-400">
          UI/UX Designer &amp; Systems Architect
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 md:justify-start dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-primary dark:text-emerald-400">
              location_on
            </span>
            San Francisco, CA
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-primary dark:text-emerald-400">
              alternate_email
            </span>
            contact@alexrivers.dev
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-primary dark:text-emerald-400">
              language
            </span>
            alexrivers.dev
          </span>
        </div>
      </div>
    </header>
  )
}
