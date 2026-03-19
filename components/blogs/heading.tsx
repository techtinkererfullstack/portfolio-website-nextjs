export default function Heading() {
  return (
    <header className="-mx-4 mb-12 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="text-center md:text-left">
        <h1 className="mb-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl dark:text-slate-100">
          Latest Thoughts
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-400">
          Reflections on engineering high-performance web applications,
          minimalist interface design, and the journey of a full-stack
          developer.
        </p>
      </div>
    </header>
  )
}
