import { FaArrowRight } from "react-icons/fa"
import { SlCalender } from "react-icons/sl"

export default function Card() {
  return (
    <div className="group glass-effect card-hover relative flex flex-col overflow-hidden rounded-2xl p-4 sm:p-6">
      <div className="absolute top-0 right-0 p-2 sm:p-4">
        <span className="rounded bg-primary px-2 py-1 text-[8px] font-black tracking-widest text-white uppercase sm:text-[10px]">
          New
        </span>
      </div>
      <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4">
        <span className="material-symbols-outlined text-accent-sage text-xs sm:text-sm">
          <SlCalender />
        </span>
        <span className="text-xs font-medium text-slate-500">Oct 24, 2023</span>
        <span className="text-slate-700">•</span>
        <span className="text-accent-sage text-xs font-bold tracking-wider uppercase">
          System Design
        </span>
      </div>
      <h3 className="group-hover:text-accent-sage mb-3 text-lg leading-tight font-bold break-words transition-colors sm:text-xl">
        Scalable WebSocket Architecture with Redis
      </h3>
      <p className="mb-4 flex-grow text-xs leading-relaxed break-words text-slate-400 sm:mb-6 sm:text-sm">
        Exploring horizontal scaling strategies for real-time applications using
        Redis Pub/Sub and sticky sessions in a microservices environment.
      </p>
      <div className="border-glass-border flex flex-wrap items-center justify-between gap-2 border-t pt-3 sm:pt-4">
        <div className="flex -space-x-2">
          <div className="border-glass-border flex size-5 items-center justify-center rounded-full border bg-primary/40 text-[8px] font-bold sm:size-6 sm:text-[10px]">
            JS
          </div>
          <div className="border-glass-border flex size-5 items-center justify-center rounded-full border bg-blue-500/40 text-[8px] font-bold sm:size-6 sm:text-[10px]">
            RD
          </div>
        </div>
        <a
          className="text-accent-sage flex items-center gap-1 text-xs font-bold break-words transition-all hover:gap-2 sm:text-sm"
          href="#"
        >
          Read Note
          <span className="material-symbols-outlined flex-shrink-0 text-base">
            <FaArrowRight />
          </span>
        </a>
      </div>
    </div>
  )
}
