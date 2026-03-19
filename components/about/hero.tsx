import Image from "next/image"

export default function Hero() {
  return (
    <section className="reveal grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      <div className="group relative">
        <div className="absolute -inset-4 rounded-2xl bg-primary/20 opacity-50 blur-2xl transition-opacity group-hover:opacity-70"></div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
          <Image
            alt="Professional portrait of a software engineer"
            className="h-full w-full object-cover"
            data-alt="Professional portrait of a male software engineer in a modern setting"
            src="/profile.png"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase">
          My Story
        </div>
        <h1 className="text-2xl leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-3xl md:text-5xl lg:text-6xl dark:text-slate-100">
          Crafting digital
          <span className="text-primary italic dark:text-emerald-400">
            excellence
          </span>{" "}
          through code.
        </h1>
        <div className="space-y-6 font-sans text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg dark:text-slate-400">
          <p>
            I'm a Senior Full-Stack Engineer based in San Francisco with over 8
            years of experience building scalable, user-centric digital
            experiences. My journey started with a curiosity for how things
            work, evolving into a passion for crafting seamless full-stack
            solutions.
          </p>
          <p>
            I specialize in bridging the gap between complex backend
            architectures and intuitive frontend interfaces. Whether it's
            optimizing database queries or fine-tuning CSS transitions, I
            believe every detail matters in the pursuit of performance and
            elegance.
          </p>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl dark:text-slate-100">
              8+
            </span>
            <span className="text-sm tracking-widest text-slate-500 uppercase">
              Years Exp.
            </span>
          </div>
          <div className="h-10 w-px bg-white/10"></div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl dark:text-slate-100">
              40+
            </span>
            <span className="text-sm tracking-widest text-slate-500 uppercase">
              Projects
            </span>
          </div>
          <div className="h-10 w-px bg-white/10"></div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl dark:text-slate-100">
              12
            </span>
            <span className="text-sm tracking-widest text-slate-500 uppercase">
              Awards
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
