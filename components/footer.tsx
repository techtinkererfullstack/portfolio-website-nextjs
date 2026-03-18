export default function Footer() {
  return (
    <footer className="bg-sage-50/50 border-t border-slate-200 py-12 dark:border-white/5 dark:bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded bg-primary">
              <span className="material-symbols-outlined text-sm text-white">
                terminal
              </span>
            </div>
            <span className="text-lg font-bold tracking-tight">Portfolio</span>
          </div>
          <p className="text-sm text-slate-500">
            © 2024 Portfolio Design. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition-all hover:bg-primary hover:text-white dark:border-white/10"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                alternate_email
              </span>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition-all hover:bg-primary hover:text-white dark:border-white/10"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">hub</span>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition-all hover:bg-primary hover:text-white dark:border-white/10"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                person
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
