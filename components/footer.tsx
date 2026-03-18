import { FaPhoneAlt } from "react-icons/fa"
import { FaGithub, FaTerminal, FaWhatsapp } from "react-icons/fa6"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { SiGmail } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="bg-sage-50/50 border-t border-slate-200 py-12 dark:border-white/5 dark:bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded bg-primary">
              <span className="material-symbols-outlined text-sm text-white">
                <FaTerminal />
              </span>
            </div>
            <span className="text-lg font-bold tracking-tight">Shafe Alam</span>
          </div>
          <p className="text-sm text-slate-500">
            © 2026 Shafe Alam. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition-all hover:bg-primary hover:text-white dark:border-white/10"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                <FaPhoneAlt />
              </span>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition-all hover:bg-primary hover:text-white dark:border-white/10"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                <SiGmail />
              </span>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition-all hover:bg-primary hover:text-white dark:border-white/10"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                <FaGithub />
              </span>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition-all hover:bg-primary hover:text-white dark:border-white/10"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                <FaWhatsapp />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
