import { FaArrowRight } from "react-icons/fa"

export default function Articles() {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition-all hover:border-primary/30 hover:shadow-xl dark:bg-primary/10">
      <div className="relative aspect-video overflow-hidden">
        <img
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-alt="React code visualization on dark screen"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHeYjAHArP0ifieFrk756DtG-onhzku3J1-jd-fv36pIbqg1TWO4HLhLM6dVYh6MvHR_8ldPfhF87bKhEMETP-1INzhxtvQWJLp1j6u1BaUF4pf9FC_JsvmTaDL_7ioNcyVv8dYT_wn_DvDmIlAKwGOE4X5-OKf_JqGyLvCqeHESikRJuGfJGFMim_7i_DiaDwzVS_X8dq68YNA0AhYTO52oVzFGMg-PuDN82SJ_Ya5Pb5oXhCOfFj7XZ49Ok6jPxceYhEezXwXjI"
        />
        <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
          Development
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="material-symbols-outlined text-sm">
            calendar_today
          </span>
          <span>Oct 24, 2023</span>
          <span className="mx-1">•</span>
          <span>8 min read</span>
        </div>
        <h3 className="mb-3 text-xl leading-tight font-bold transition-colors group-hover:text-primary">
          Mastering React Server Components
        </h3>
        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Deep dive into the architecture of React Server Components, exploring
          how they improve performance by reducing client-side JavaScript.
        </p>
        <a
          className="group/link inline-flex items-center gap-2 text-sm font-bold text-primary"
          href="#"
        >
          Read More
          <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">
            <FaArrowRight />
          </span>
        </a>
      </div>
    </article>
  )
}
