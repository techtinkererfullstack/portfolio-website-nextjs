export default function Form() {
  return (
    <section className="reveal flex flex-col justify-center lg:col-span-7">
      <div className="glass rounded-2xl p-8 shadow-2xl md:p-12">
        <form action="#" className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="form-floating-label relative">
              <input
                className="block w-full border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-slate-900 transition-all focus:border-primary focus:ring-0 dark:text-white"
                id="fullname"
                name="fullname"
                placeholder=" "
                type="text"
              />
              <label className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all dark:text-slate-400">
                Full Name
              </label>
            </div>
            <div className="form-floating-label relative">
              <input
                className="block w-full border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-slate-900 transition-all focus:border-primary focus:ring-0 dark:text-white"
                id="email"
                name="email"
                placeholder=" "
                type="email"
              />
              <label className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all dark:text-slate-400">
                Email Address
              </label>
            </div>
          </div>
          <div className="form-floating-label relative">
            <input
              className="block w-full border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-slate-900 transition-all focus:border-primary focus:ring-0 dark:text-white"
              id="subject"
              name="subject"
              placeholder=" "
              type="text"
            />
            <label className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all dark:text-slate-400">
              Subject
            </label>
          </div>
          <div className="form-floating-label relative">
            <textarea
              className="block w-full resize-none border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-slate-900 transition-all focus:border-primary focus:ring-0 dark:text-white"
              id="message"
              name="message"
              placeholder=" "
            ></textarea>
            <label className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all dark:text-slate-400">
              Your Message
            </label>
          </div>
          <button
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-5 font-black text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 dark:text-slate-900"
            type="submit"
          >
            SEND MESSAGE
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </form>
        {/* <!-- Location Indicator / Map Section --> */}
        <div className="mt-12">
          <p className="mb-4 text-xs font-bold tracking-widest text-slate-500 uppercase dark:text-slate-400">
            Location: San Francisco, CA
          </p>
          <div className="relative h-48 w-full overflow-hidden rounded-xl border border-primary">
            <div
              className="absolute inset-0 bg-primary/20 bg-cover bg-center mix-blend-overlay grayscale"
              data-alt="Abstract dark map pattern of San Francisco"
              data-location="San Francisco"
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 animate-pulse rounded-full bg-primary/20"></div>
                <span className="material-symbols-outlined relative z-10 text-4xl text-primary">
                  location_on
                </span>
              </div>
            </div>
            <div className="glass absolute bottom-4 left-4 flex items-center gap-2 rounded-lg px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase">
              <span className="size-2 rounded-full bg-primary"></span>
              Currently UTC -8
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
