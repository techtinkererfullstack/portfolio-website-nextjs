import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export default function Pagination() {
  return (
    <div className="mt-16 flex items-center justify-center gap-2">
      <button className="flex size-10 items-center justify-center rounded-lg text-slate-400 hover:bg-primary/20">
        <span className="material-symbols-outlined">
          <IoIosArrowBack />
        </span>
      </button>
      <button className="flex size-10 items-center justify-center rounded-lg bg-primary font-bold text-white">
        1
      </button>
      <button className="flex size-10 items-center justify-center rounded-lg transition-colors hover:bg-primary/20">
        2
      </button>
      <button className="flex size-10 items-center justify-center rounded-lg transition-colors hover:bg-primary/20">
        3
      </button>
      <span className="px-2 text-slate-400">...</span>
      <button className="flex size-10 items-center justify-center rounded-lg transition-colors hover:bg-primary/20">
        12
      </button>
      <button className="flex size-10 items-center justify-center rounded-lg text-slate-400 hover:bg-primary/20">
        <span className="material-symbols-outlined">
          <IoIosArrowForward />
        </span>
      </button>
    </div>
  )
}
